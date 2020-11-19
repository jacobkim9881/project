// creates ID to export table to csv--works
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", exportTableToCSV);
 
    
});

//Start and Stop buttons for logging
const btnStart = document.getElementById("click-start");
const btnStop = document.getElementById("click-stop");


//attempt to get start/stop logging buttons to work--underwork
function Logger(isLogging) {
    console.log(isLogging)
    if (isLogging) {
        
        btnStart.style.display = "block";
        btnStop.style.display = "none";    
        //localStorage.setItem("btn", Logger(false));
    }else {
        //for loop when start button is false
        btnStart.style.display= "none";
        btnStop.style.display= "block";
        addRow();
    }
    
}

//using storage API to save data for last btn pressed--underwork
chrome.storage.local.set({key: Logger()}, function() {
    console.log('value is set to  ' + Logger());
});

chrome.storage.local.get(['key'], function(result) {
    console.log('value currently is ' + result.key);
});
    
    
  
//button to start logging
document.addEventListener("DOMContentLoaded", function () {
    btnStart.addEventListener("click", function() {Logger(false)}); 
    btnStop.addEventListener("click", function() {Logger(true)});
});


//function to append row to HTML table --underwork--
function addRow() {
        //perhaps need an for loop for every page visited 
   
    
    const bg = chrome.extension.getBackgroundPage()    
    Object.keys(bg.get).forEach(function (url) {
    
    //get html table
        // Append product to the table
    var table = document.getElementById("tbodyID");
        
            //inputed data --
            browser= "Google Chrome"; 
            protocol = "example";
            downloads = "example";
            description = "example";
            time = Date.now();

        
        //put dates in array and replace it and have var as myDate
    // add new row to the table
                  //1 = in the top 
                  //table.rows.length = the end
                  //table.rows.length/2+1 = the center 

            var newRow = table.insertRow(0);
                  
                  // add cells to the row
                  var browserCell = newRow.insertCell(0);
                  var timeCell = newRow.insertCell(1);
                  var urlCell = newRow.insertCell(2);
                  var protocolCell = newRow.insertCell(3);
                  var downloadsCell = newRow.insertCell(4);
                  var descCell = newRow.insertCell(5);
                  
                  // add the data to the cells
                  
                  urlCell.innerHTML = `${url}`; 
                  timeCell.innerHTML = time;
                    browserCell.innerHTML = browser;
                    descCell.innerHTML = description;
                    protocolCell.innerHTML = protocol;
                    downloadsCell.innerHTML = downloads;
                  console.log("works");
     }) 
            }
 


//function to for onClick function--works
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    
    csvFile = new Blob([csv], {type:"text/csv"});
                       
                       
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    downloadLink.setAttribute("download", "ChromeLog.csv");
    
    document.body.appendChild(downloadLink);
    
    
    downloadLink.click();
}

//function to export HTML table to csv file--works
function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for(var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        for(var j=0; j < cols.length; j++)
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));
    }   
       
   
    //download csv file
    downloadCSV(csv.join("\n"), filename);
    
    
}    
   