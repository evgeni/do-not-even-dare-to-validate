// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {code:"var forms=document.getElementsByTagName('form');for (var key in forms){if (forms.hasOwnProperty(key)){forms[key].onsubmit=function(){return true;}}}"});
});
