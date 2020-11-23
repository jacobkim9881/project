//need addRow() here
//function addRow() {
//...
//}
let address = window.location.href
chrome.runtime.sendMessage(undefined,
	{ url: address}  
)
chrome.storage.local.get(['url'], function(result) {	
//[...result.url, address]
	let arry = [];
	if (result.url === '') {
		arry = [address]
	} else {
		arry = [...result.url, address]
	}
	chrome.storage.local.set({url: arry }, function() {
		console.log(result)
	});

});

