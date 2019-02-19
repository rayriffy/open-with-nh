(function() {
  chrome.contextMenus.create(
    {
      title: "Open with NHentai",
      contexts: ["selection"],
      visible: true,
      onclick: function (e) {
        chrome.windows.getAll({}, function (windows) {
          var isIncog = null;
          for (var i = windows.length - 1 ; i >= 0 ; i--) {
            if (windows[i].incognito) {
              isIncog = windows[i];
              break;
            }
          }
          if(isIncog === null) {
            chrome.windows.create({
              incognito: true,
              state: 'maximized',
              focused: true,
              url: "https://nhent.ai/g/" + e.selectionText
            });
          } else {
            chrome.tabs.create({
              windowId: isIncog.id,
              url: "https://nhent.ai/g/" + e.selectionText,
              active: true
            });
          }
        });
      }
    }
  );
})();
