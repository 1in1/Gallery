function dl(o){return console.log(o.url),browser.downloads.download({url:o.url})}browser.runtime.onMessage.addListener(dl);
