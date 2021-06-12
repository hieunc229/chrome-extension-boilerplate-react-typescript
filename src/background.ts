import { Events } from "./types";


// Listen to messages sent from other parts of the extension.
// Note: onMessage must return "true" if response is async.
chrome.runtime.onMessage.addListener((request, sender) => {
    let isResponseAsync = false;

    // Handle message between the scripts (popup vs background)
    return isResponseAsync;
});


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.runtime.sendMessage({ type: Events.PopupShow });
    chrome.tabs.executeScript(tab.id, {
        file: 'js/backgroundStartup.js'
    });
});
