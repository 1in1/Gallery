//********************BACKGROUND SCRIPT FOR GALLERY EXTENSION********************


function dl(msg) {
  console.log(msg.url);
  return browser.downloads.download({url: msg.url});
}

browser.runtime.onMessage.addListener(dl);
