// console.log("THERES A GHOST IN THE BACKGROUND");


chrome.runtime.onMessage.addListener(function (
  message,
  sender,
  senderResponse
) {
  if (message.msg === "image") {
    //if we're sent an img message
    fetch("https://some-random-api.ml/img/red_panda")
      .then((response) => response.text())
      .then((data) => {
        let dataObj = JSON.parse(data);
        senderResponse({ data: dataObj, index: message.index });
      })
      .catch((error) => console.log("error", error));
    return true; // Will respond asynchronously.
  }
});
