const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./db');
const strftime = require('strftime');
const cron = require('node-cron');

const PORT = 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));


// RENDER THE INDEX PAGE
app.get('/', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM waterlevel ORDER BY updated_at, gauge_number');
      const waterlevels = result.rows;
// RENDER THE INDEX PAGE WITH THE WATER LEVEL DATA
      res.render('index', { waterlevels: waterlevels });
  } catch (err) {
      console.error('Error fetching water levels:', err);
      res.status(500).send('Internal Server Error');
  }
});

app.get('/video', (req, res) => {
  res.render('video');
});


// ENDPOINT TO FETCH GAUGE DATA 
app.get('/fetch/:gauge', async (req, res) => {
  const gauge = req.params.gauge;

  try {
      // QUERY TO FETCH DATA FOR THE SPECIFIED GAUGE FROM THE DATABASE
      const query = {
          text: 'SELECT * FROM gaugelist WHERE gauge_number = $1',
          values: [gauge],
      };

      // EXECUTE THE QUERY
      const result = await pool.query(query);

      if (result.rows.length > 0) {
          res.json(result.rows[0]); // SENDING THE FIRST ROW ASSUMING GAUGE IS UNIQUE
      } else {
          res.status(404).json({ message: 'Data not found' });
      }
  } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});
// ENDPOINT TO UPDATE GAUGE VALUE
app.get('/update/:gauge/:value', async (req, res) => {
  const gauge = req.params.gauge;
  const newValue = req.params.value;


  try {
      // PERFORM UPDATE OPERATION ON THE DATABASE
      const query = {
          text: 'UPDATE gaugelist SET value = $1 WHERE gauge_number = $2',
          values: [newValue, gauge],
      };

      await pool.query(query);

      res.json({ message: `Value for gauge ${gauge} updated successfully` });
  } catch (err) {
      console.error('Error updating value:', err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ENDPOINT TO INSERT NEW DATA
app.get('/newdata/:gauge/:value', async (req, res) => {
    const gauge = req.params.gauge;
    const newValue = req.params.value;

    try {
        // GET THE CURRENT DATE AND TIME AND FORMAT IST AS DESIRED
        const currentDate = strftime('%F %T', new Date());

        // PERFORM UPDATE OPERATION ON THE DATABASE
        const query = {
            text: 'INSERT INTO waterlevel (value, gauge_number, updated_at) VALUES ($1, $2, $3)',
            values: [newValue, gauge, currentDate],
        };

        await pool.query(query);

        //EMIT A CUSTOM EVENT TO ALL CONNECTED CLIENTS
       io.emit('newData', { gauge, value: newValue, updatedAt: currentDate });

        res.json({ message: `Value for gauge ${gauge} updated successfully` });
    } catch (err) {
        console.error('Error updating value:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

   //SCHEDULE A TASK TO RUN EVERY 2 MINUTES
cron.schedule('*/10 * * * *', async () => {
    try {
       // PERFORM DATA DELETION OPERATION IN YOUR DATABASE
       await pool.query('DELETE FROM waterlevel WHERE updated_at < NOW() - INTERVAL \'10 minutes\'');
        console.log('Data deleted successfully');
    } catch (error) {
        console.error('Error deleting data:', error);
}
});
////////////////////////
// Socket.io CONNECTION EVENT
io.on('connection', (socket) => {
    console.log('A client connected');
    
    // HANDLE EVENTS FROM THE CLIENTS
    socket.on('disconnect', () => {
      console.log('A client disconnected');
    });
});

  ///////////////////
//START SERVER
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});