

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
    shareEl: false,
    shareButtons: {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
};


var pswpElement = document.querySelectorAll('.pswp')[0];
var gallery;

document.addEventListener('keyup', (e) => {
  if (e.key === 'm' && e.getModifierState("Alt")) {
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
  else if (e.key === 'n' && e.getModifierState("Alt")) {
    gallery.close();
  }
});
