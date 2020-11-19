window.get = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.get[request.url] = request.count
})


//create items shown in html file
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
