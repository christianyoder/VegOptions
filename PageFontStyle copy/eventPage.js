// var toBeParsed = document.getElementsByTagName("body").innerText;
// if (function(){return toBeParsed.split('veg').length - 1 > 0}) {
  
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
    if (request.message === "activate_icon") {
        chrome.pageAction.show(sender.tab.id);
    }
});
    

// chrome.pageAction.onClicked.addListener(function(activeTab) {
//     chrome.activeTab.executeScript(null, {file: "content.js"});
// });

//     $('.css-1x9iesk').css('background-color','green');
// } else {
//     $('.css-1x9iesk').css('background-color','red');
// }




