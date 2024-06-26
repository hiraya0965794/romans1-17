<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard</title>
<style>
    div.ex {
        width: 500px;
        margin: auto;
    }

    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color:lightgray;
        background-repeat: no-repeat;
        background-attachment: fixed;  
        background-size: cover;
    }
    .container {
        max-width: 90%;
        margin: 0 auto;
        padding: 30px;
        text-align: center;
        border-radius: 5px ;
        
    }
    .gauge-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        

    }
    .gauge {
        display: inline-block;
        position: relative;
        width: 370px;
        height: 220px;
        margin-right: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
        background-color: white;
        
    }
    .gauge canvas {
        display: block;
        margin: 0 auto;
        background-color: white;
        

    }
    .gauge-value{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      font: bold 24px Arial;
      color:gray;
      
      
    }
    .warning-boxes {
        position: absolute;
        top: 7%;
        left: 7%;
        display: flex;
        flex-direction: column;
        
    }
    .warning-box {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        margin-bottom: 5px;
        text-align: right;
    }
    .warning-box-container {
        display: flex;
        align-items: center; 
    }
    
    .warning-text {
        font-size: 14px;
        margin-right: 10px;
    }
    .warning-box.red {
        background-color: red;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }
    .warning-box.orange {
        background-color: orange;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }
    .warning-box.yellow {
        background-color: yellow;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }
    .warning-box.green {
        background-color: green;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }
/*MEDIA SCREEN SIZE*/
    @media  screen and (max-width:  600px) {
        .container {
        max-width: 100%;
    }
    
    .gauge {
        width: 100%; 
        margin-right: 0; 
    }

    .video-container {
        width: 100%;
        height: 30vh; 
        left: 0; 
        bottom: 0; 
    }

    .header img:first-child,
    .header img:last-child {
        display: none;
    }}
    
/*MEDIA SCREEN SIZE*/
@media  screen and (max-width:  768px) {
        .container {
        max-width: 80%;
    }
    
    .gauge {
        width: 50%; 
        margin-right: 0; 
    }

    .video-container {
        width: 80%;
        height: 30vh; 
        left: 0; 
        bottom: 0; 
    }

    .header img:first-child,
    .header img:last-child {
        display: none; 
    }}
/*MEDIA SCREEN SIZE*/
@media  screen and (max-width:  450px) {
        .container {
        max-width: 50%;
    }
    
    .gauge {
        width: 60%; 
        margin-right: 0; 
    }

    .video-container {
        width: 60%;
        height: 30vh; 
        left: 0; 
        bottom: 0; 
    }

    .header img:first-child,
    .header img:last-child {
        display: none; 
    }}
/*............................*/
    .half-screen-box {
        width: 50%;
        height: 50vh;
        background-color: white;
        position: absolute;
        bottom: 1cm;
        right: 1cm;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }

    .header {
        background-color: #007bff;
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        position: relative;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }
    
    .header img {
        max-width: 100%;; 
        height: auto; 
        margin-right: 10px;
    }
    .header img:first-child {
    content: '';
        position: absolute;
        left: 470px; 
        top: 50%;
        transform: translateY(-50%);
        background-size: contain;
        background-repeat: no-repeat;
        width: 50px;
        height: auto;
    float: left; 
    }

    .header img:last-child {
    content: '';
        position: absolute;
        right: 450px; 
        top: 50%;
        transform: translateY(-50%);
        background-size: contain;
        background-repeat: no-repeat;
        width: 70px;
        height: auto;
    float: right;
    }

    .content {
        padding: 20px;
        
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 2);
    }

    th, td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        text-align: center;
        vertical-align: middle; 
    }

    th {
        background-color: #f2f2f2;
        color: #333;
    }

    tr:hover {
        background-color: #1a8db6;
    }

    .search-container {
        margin-bottom: 20px;
        display: flex;
        color: #333;

    }

    .search-input {
        flex: 1;
        padding: 10px;
        border-radius: 5px 0 0 5px;
        border: 1px solid #0a0000;
        outline: none;
    }

    .search-button {
        padding: 10px 20px;
        background-color: #007bff;
        border: none;
        border-radius: 0 5px 5px 0;
        color: #fff;
        cursor: pointer;
        
    }

    .print-input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #0a0000;
        outline: none;
        margin-right: 5px;
    }

    .no-data {
        text-align: center;
        color: #999;
        margin-top: 20px;
    }

    .print-container {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end; 
    }

    .date-container {
    display: flex;
    align-items: center;
    margin-left: 10px; 
    }

    .print-button {
    padding: 10px 20px;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    }

    @media print {
    .search-container,
    .print-container,
    .dropdown {
        display: none;
    }
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }
    }

    @media print {

    .half-screen-box {
        width: 90%;
        max-width: none;
        height: auto;
        margin: 20;
        padding: 0;
        top: 80px;
    }
    }

    
    .video-container {
        width: 55%;
        height: 50vh;
        position: absolute;
        bottom: 1cm;
        left: 1cm;
        overflow: hidden;
        
    }
    video {
        width: 80%;
        height: 100%;
        object-fit: cover;
        
    }
    
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <header class="header">
       <img src="csu.png"> WSN IoT-Based Flood Monitoring System <img src="coea.png">
    </header>
    <div class="container">
        <div class="dashboard">
            <div class="gauge-container">
                <div class="gauge">
                    <div class="warning-boxes">
                        <div class="warning-box-container">
                            <div class="warning-box red"></div>
                            <span class="warning-text">Critical</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box orange"></div>
                            <span class="warning-text">Alert</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box yellow"></div>
                            <span class="warning-text">Warning</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box green"></div>
                            <span class="warning-text">Normal</span>
                        </div>
                    </div>
                    <canvas id="gauge1" width="350" height="200"></canvas>
                </div>
                <div class="gauge">
                    <div class="warning-boxes">
                        <div class="warning-box-container">
                            <div class="warning-box red"></div>
                            <span class="warning-text">Critical</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box orange"></div>
                            <span class="warning-text">Alert</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box yellow"></div>
                            <span class="warning-text">Warning</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box green"></div>
                            <span class="warning-text">Normal</span>
                        </div>
                    </div>
                    <canvas id="gauge2" width="350" height="200"></canvas>
                </div>
                <div class="gauge">
                    <div class="warning-boxes">
                        <div class="warning-box-container">
                            <div class="warning-box red"></div>
                            <span class="warning-text">Critical</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box orange"></div>
                            <span class="warning-text">Alert</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box yellow"></div>
                            <span class="warning-text">Warning</span>
                        </div>
                        <div class="warning-box-container">
                            <div class="warning-box green"></div>
                            <span class="warning-text">Normal</span>
                        </div>
                    </div>
                    <canvas id="gauge3" width="350" height="200"></canvas>
                </div>
            </div>
        </div>
        <div class="water-level-history">
          <br>
        </div>
    </div>
    <div class="half-screen-box">
        <div class="header">Water Level Data</div>
        <div class="content">
           
            <div class="search-container">
                <input type="text" id="searchInput" class="search-input" placeholder="Search..." oninput="suggestSearch()">
                <button class="search-button" type="button" onclick="filterTable()"><i class="fas fa-search"></i></button>
                <div class="date-container">
                    <input type="date" id="startDate" class="print-input">
                </div>
                <div class="date-container">
                    <input type="date" id="endDate" class="print-input">
                </div>
                <button class="print-button" type="button" onclick="printDataWithinRange()">Print Data</button>
            </div>
            
            <table id="dataTable">
                <thead>
                    <tr>
                        <th>Gauge Number</th>
                        <th>Value</th>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>
                    <% waterlevels.forEach(function(waterlevel) { %>
                        <tr>
                            <td>Sensor <%= waterlevel.gauge_number %></td>
                            <td><%= (parseFloat(waterlevel.value)).toFixed(2) %> m</td>
                            <td class="date_time"><%= waterlevel.updated_at %></td>
                        </tr>
                    <% }); %>
                </tbody>
            </table>
            <div id="noDataMessage" class="no-data" style="display: none;">No Data Found</div>
        </div>
    </div>
    <div class="video-container">
        <video width="80" height="100" autoplay loop>
            <source src="/map.mp4" type="video/mp4">
        </video>
    </div>
<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>   
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    function drawGauge(canvasId, gaugeValue) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height;
        const radius = Math.min(width, height) / 2 * 0.9;
        const startAngle = Math.PI;
        const endAngle = 2 * Math.PI;

        ctx.clearRect(0, 0, width, height);
        
        // GAUGE BACKGROUND
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineWidth = 20;
        ctx.strokeStyle = '#ddd';
        ctx.stroke();

    // GAUGE COLOR
    let color;
    let fillPercentage;

    if (gaugeValue >= 0 && gaugeValue <= 0.5) {
        color = 'red';
        fillPercentage = gaugeValue / 0.5;
    } else if (gaugeValue > 0.5 && gaugeValue <= 1.5) {
        color = 'orange';
        fillPercentage = (gaugeValue - 0.5) / 1; 
    } else if (gaugeValue > 1.5 && gaugeValue <= 2.5) {
        color = 'yellow';
        fillPercentage = (gaugeValue - 1.5) / 1; 
    } else if (gaugeValue > 2.5 ){
        color = 'green';
        fillPercentage = (gaugeValue - 2.5) / 2; 
    }

        // FILL GAUGE
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, Math.PI, Math.PI + (endAngle - startAngle) * fillPercentage);
        ctx.lineWidth = 10;
        ctx.strokeStyle = color;
        ctx.stroke();

        // DISPLAY GAUGE VALUE
        const valueString = (gaugeValue).toFixed(2) + " m";
        ctx.fillStyle = color;
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "between";
        ctx.fillText(valueString, centerX, centerY);
    }

    function updateGauges() {
    // AJAX REQUEST FOR EACH GAUGE
    $.ajax({
        url: 'http://romans1-17.vercel.app:5000/fetch/1', // FETCHING DATA FOR GAUGE 1
        method: 'GET',
        success: function (data) {
            drawGauge('gauge1', parseFloat(data.value)); // ASSUMING THE SERVER RETURNS THE GAUGE VALUE
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data for gauge 1:', error);
        }
    });

    $.ajax({
        url: 'http://romans1-17.vercel.app:5000/fetch/2', //  FETCHING DATA FOR GAUGE 2
        method: 'GET',
        success: function (data) {
            drawGauge('gauge2', parseFloat(data.value)); // ASSUMING THE SERVER RETURNS THE GAUGE VALUE
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data for gauge 2:', error);
        }
    });
    $.ajax({
        url: 'http://romans1-17.vercel.app:5000/fetch/3', //  FETCHING DATA FOR GAUGE 3
        method: 'GET',
        success: function (data) {
            drawGauge('gauge3', parseFloat(data.value)); // ASSUMING THE SERVER RETURNS THE GAUGE VALUE
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data for gauge 3:', error);
        }
    });
}

// CALL THE FUNCTION INITIALLY TO FETCH AND UPDATE GAUGE DATA
updateGauges();

// UPDATE GAUGE EVERY SECOND
setInterval(updateGauges, 1000);



///////////SEARCH RESULT//////////////////
// FUNCTION TO SUGGEST SEARCH RESULTS BASED ON USER INPUT
function suggestSearch() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const table = document.getElementById('dataTable');
            const rows = table.querySelectorAll('tbody tr');

            let foundAnyRow = false;

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.querySelectorAll('td');
                let foundInRow = false;

                for (let j = 0; j < cells.length; j++) {
                    const cell = cells[j];
                    if (cell.textContent.toLowerCase().includes(input)) {
                        foundInRow = true;
                        break;
                    }
                }

                if (foundInRow) {
                    row.style.display = ''; // SHOW THE ROW
                    foundAnyRow = true;
                } else {
                    row.style.display = 'none'; // HIDE THE ROW
                }
            }

            const noDataMessage = document.getElementById('noDataMessage');
            if (noDataMessage) {
                noDataMessage.style.display = foundAnyRow ? 'none' : ''; // SHOW MESSAGE IF NO ROWS FOUND
            }
        }


/////////////TABLE DATE AND TIME UPDATE//////////////
// FUNCTION TO UPDATE THE DATE AND TIME IN THE TABLE CELLS
function updateDateTime() {
        const table = document.getElementById('dataTable');
        const rows = table.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const timeCell = row.querySelector('.date_time'); // ASSUMING THIS IS THE CLASS OF CELL CONTAINING THE TIME
            const dateString = timeCell.textContent.trim(); // GET THE DATE STRING
            const date = new Date(dateString); //PARSE THE DATA STRING

            // FORMAT THE DATE COMPONENTS
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // ADDING 1 BECAUSE MONTHS ARE ZERO-INDEXED
            const day = date.getDate().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');

            // CONSTRUCT THE FORMATTED DATE AND TIME 
            const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

            // UPDATE THE CONTENT WITH FORMATTED DATE AND TIME
            timeCell.textContent = formattedDateTime;
        });
    }

    // CALL THE FUNCTION INITIALLY TO UPDATE THE TABLE
    updateDateTime();

    ////////////PRINTING DATA//////
 // FUNCTION TO PRINT DATA WITHIN THE SPECIFIED DATE RANGE
 function printDataWithinRange() {
    // GET THE START DAT VALUE
    const startDate = document.getElementById('startDate').value;

    // GET THE NED DATE VALUES
    const endDate = document.getElementById('endDate').value;

    // CHECK IF BOTH START AND END DATES ARE FILLED
    if (startDate && endDate) {
        // HIDE ALL UNNECESSARY ELEMENTS BEFORE PRINTING
        const unnecessaryElements = document.querySelectorAll('.gauge, video');
        unnecessaryElements.forEach(element => {
            element.style.display = 'none';
        });

        // HIDE ALL ROWS INITIALLY
        const rows = document.querySelectorAll('#dataTable tbody tr');
        rows.forEach(row => {
            row.style.display = 'none';
        });

        // SHOW THE HEADER ROW
        const headerRow = document.querySelector('#dataTable tbody tr:first-child');
        if (headerRow) {
            headerRow.style.display = '';
        }

        // SHOW THE WATER LEVEL ROW
        const waterLevelRow = document.querySelector('.water-level-row');
        if (waterLevelRow) {
            waterLevelRow.style.display = '';
        }

        // FILTER AND SHOW ROWS WITHIN THE DATE RANGE
        rows.forEach(row => {
            const date_Time = row.querySelector('.date_time').textContent.trim().split(' ')[0]; // EXTRACTING THE DATE PART
            if (date_Time >= startDate && date_Time <= endDate) {
                row.style.display = ''; // SHOW THE ROW IF IT FALLS WITHIN THE SPECIFIED RANGE
            }
        });

        // PRINT THE CONTENT
        window.print();

        
        // RESET THE DISPLAY PROPERTY AFTER PRINTING
        rows.forEach(row => {
            row.style.display = '';
        });

        // SHOW THE WATER LEVEL ROW AFTER PRINTING
        if (waterLevelRow) {
            waterLevelRow.style.display = 'none';
        }

        // SHOW UNNECESSARY ELEMENTS AGAIN AFTER PRINTING
        unnecessaryElements.forEach(element => {
            element.style.display = '';
        });

        // DETECT WHEN THE PRINT DIALOG IS CLOSED
        const mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(mql => {
            if (!mql.matches) {
                //PRINT DIALOG CLOSED
                console.log('Print dialog closed');
                // RELOAD THE PAFE AFTER PRINTING IF CANCELED
                window.location.reload();
            }
        });
    } else {
        // SHOW AN ALERT IF BOTH START AND END DATES ARE NOT SELECTED
        alert("Please select both start and end dates before printing.");
    }
}



</script>
</body>
</html>



