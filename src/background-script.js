/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {
  console.log("background script received message");
  browser.notifications.create({
    "type": "basic",
    "title": "this a title",
    "message": message.url
  });
}

browser.runtime.onMessage.addListener(notify);
