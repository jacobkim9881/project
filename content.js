


const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})

function getCSVLinkElement(arr){

    var link = document.createElement("a");
    link.textContent = "Save as CSV";
    link.download = "file.csv";
    var csv = arr.map(function(v){return v.join(',')}).join('\n');
    link.href = encodeURI("data:text/csv,"+csv);

    return link;

}

var el = getCSVLinkElement([['num','sq'],[2,4],[3,9]]);
document.body.appendChild(el);