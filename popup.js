
//loads element url on page
/*document.addEventListener('DOMContentLoaded', function () {
   
  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.bears).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}`
    document.body.appendChild(div)
    
  })


}, false)
*/


// creates ID to export table to csv--works
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", exportTableToCSV);
 
    
});


/*document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", addRow);
 
    
});
*/



//inputed data --

time = "000010"
browser= "Google Chrome" 
protocol = "https://"
downloads = "example"
description = "example"


//function to append row to HTML table --underwork--
function addRow() {
        //perhaps need an for loop for every page visited 
    
    const bg = chrome.extension.getBackgroundPage()    
    Object.keys(bg.bears).forEach(function (url) {
    
    //get html table
        // Append product to the table
    var table = document.getElementById("tbodyID");
    
    let myDate = new Date();
    console.log(myDate);
    // add new empty row to the table
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
                  timeCell.innerHTML = myDate;
                    browserCell.innerHTML = browser;
                    descCell.innerHTML = description;
                    protocolCell.innerHTML = protocol;
                    downloadsCell.innerHTML = downloads;
                  console.log("works");
     }) 
            }
addRow()
//console.log(addRowUsingJquery);

//perhaps add row using JQuery--underwork
/*function addRowUsingJquery() {
	// Get a reference to table
	let table = document.querySelector('#tableID');
 	
    const add = chrome.extension.getBackgroundPage()
    Object.keys(add.bears).forEach(function (url) {
    
       
        
	// Build the row
    	let template = `
                <tr>
                    	<td>${USERNAME}</td>
                    	<td>${`url`}</td>
                    	<td>${TIMESTAMP}</td>
                </tr>`;

 	// Add the row to the end of the table
    	table.innerHTML += template; 
        console.log("works");
        
     })


}

 */                          

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
    
    
    
    
 