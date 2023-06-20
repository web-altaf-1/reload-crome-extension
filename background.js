chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      setTimeout(function () {
        chrome.tabs.reload(tabId);
      }, 1000);
    }
  });
  