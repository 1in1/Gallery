//********************CONTENT SCRIPT FOR GALLERY EXTENSION********************//
//INCLUDES THE DIVS AND CSS WE NEED, THEN BUILDS THE NECESSARY DATA FOR
//THE GALLERY OBJECT


// Include the necessary div
var domInsert = document.createElement("div");
domInsert.innerHTML = markup;
document.body.appendChild(domInsert);

//Include the necessary CSS
var node = document.createElement('style');
node.innerHTML = allCSS;
document.body.appendChild(node);


var fileList = document.getElementsByClassName("file");
var items = [];
var img, title;
for(i = 0; i < fileList.length; i++) {
  img = fileList[i].getElementsByClassName('fileText')[0];
  items.push({
        src: img.children[0].href,
        w: parseInt(img.lastChild.wholeText.substring(img.lastChild.wholeText.lastIndexOf(" ") + 1,
                                              img.lastChild.wholeText.lastIndexOf("x"))),
        h: parseInt(img.lastChild.wholeText.substring(img.lastChild.wholeText.lastIndexOf("x") + 1,
                                              img.lastChild.wholeText.lastIndexOf(")"))),
        title: img.children[0].innerHTML
  });
}


var options = {
    bgOpacity: 0.7,
    index: 0,
    escKey: true,
    arrowKeys: true,
    zoomEl: false,
    shareEl: true,
    //We are just hijacking the shareEl button to use as a download button,
    //don't need the built-in functionality
    shareButtons: {}
};


var pswpElement = document.querySelectorAll('.pswp')[0];
var gallery;

function launchGallery(index) {
  console.log(index);
  if (typeof(index) !== 'undefined')
    options.index = index;

  gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.listen('close', function() {
    options.index = gallery.getCurrentIndex();

    new Noty({
    type: 'info',
    layout: 'topRight',
    text: 'Jump to #' + parseInt(fileList[options.index].parentElement.id.substr(1)),
    theme: 'relax',
    timeout: 2500,
    callbacks: { onClick: function($options) {
        console.log(options.index);
        fileList[options.index].scrollIntoView({
          behaviour: 'smooth',
          block: 'start'
        });
    } }
    }).show();
  });
  gallery.init();
}


//Add event listeners
document.addEventListener('keyup', (e) => {
  if (e.key === 'm' && e.getModifierState("Alt")) {
    launchGallery();
  }
  else if (e.key === 'n' && e.getModifierState("Alt")) {
    gallery.close();
  }
});

document.addEventListener('click', (e) => {
  if(e.target.tagName == 'IMG' && e.altKey) {
    var targ = e.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('file')[0];
    for(i = 0; i < fileList.length; i++) {
      if(targ == fileList[i])
        launchGallery(i);
    }
  }
});

document.getElementsByClassName("pswp__button pswp__button--share")[0].addEventListener("click", function($gallery, $items) {
  var i = gallery.getCurrentIndex();
  //Probably safe to assume gallery is open if they've clicked the share button...
  browser.runtime.sendMessage({index: i, url: items[i].src, title: items[i].title})
  .then( () => {
    new Noty({
      type: 'success',
      layout: 'centerRight',
      text: 'Download started...',
      theme: 'relax',
      timeout: 2500
      }).show();
  }).catch( (p) => {
    new Noty({
      type: 'error',
      layout: 'centerRight',
      text: 'Failed to start download :(',
      theme: 'relax',
      timeout: 2500
    }).show();
    console.log(p);
  });
});
