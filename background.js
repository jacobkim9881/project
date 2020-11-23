window.get = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.get[request.url] = request.count
})


//create items shown in html file
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})


chrome.runtime.onInstalled.addListener(() => {

//declarativeContent is needed when popup should be opened
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({

            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
         }])
    });

});

//load key which is logged at popup.js
chrome.storage.local.get(['key'], function(result) {
    console.log('value currently is ' + result.key);
});
