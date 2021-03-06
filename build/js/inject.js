const markup = `<div class=pswp tabindex=-1 role=dialog aria-hidden=true><div class=pswp__bg></div><div class=pswp__scroll-wrap><div class=pswp__container><div class=pswp__item></div><div class=pswp__item></div><div class=pswp__item></div></div><div class="pswp__ui pswp__ui--hidden"><div class=pswp__top-bar><div class=pswp__counter></div><button class="pswp__button pswp__button--close" title="Close (Esc)">&#x1f5d9;</button><button class="pswp__button pswp__button--share" title=Share>DL &#x1f847</button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen">FS</button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class=pswp__preloader><div class=pswp__preloader__icn><div class=pswp__preloader__cut><div class=pswp__preloader__donut></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class=pswp__share-tooltip></div></div><button class="pswp__button pswp__button--arrow--left" title=Previous>&#x2B9C;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button><button class="pswp__button pswp__button--arrow--right" title=Next>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2B9E;</button><div class=pswp__caption><div class=pswp__caption__center></div></div></div></div></div>`; const allCSS = `/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;-ms-touch-action:none;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:0}.pswp *{-webkit-box-sizing:border-box;box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg{position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;will-change:opacity}.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.pswp__container,.pswp__zoom-wrap{-ms-touch-action:none;touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);transition:transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{-webkit-transition:none;transition:none}.pswp__container,.pswp__zoom-wrap{-webkit-backface-visibility:hidden}.pswp__item{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.pswp__img{position:absolute;width:auto;height:auto;top:0;left:0}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp__button{width:44px;height:44px;position:relative;background:0 0;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;-webkit-box-shadow:none;box-shadow:none}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{outline:0;opacity:.9}.pswp__button::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background:url(default-skin.png) 0 0 no-repeat;background-size:264px 88px;width:44px;height:44px;color:#ccc}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:105dpi),(min-resolution:1.1dppx){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:url(default-skin.svg)}.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:0 0}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{display:none;background-position:-88px 0}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:0 0;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{content:'';top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right:before{right:6px;background-position:-94px -44px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;-webkit-box-shadow:0 2px 5px rgba(0,0,0,.25);box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);-ms-transform:translateY(6px);transform:translateY(6px);-webkit-transition:-webkit-transform .25s;transition:transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip a{display:block;padding:8px 12px;color:#000;text-decoration:none;font-size:14px;line-height:18px}.pswp__share-tooltip a:hover{text-decoration:none;color:#000}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{content:'';display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption small{font-size:11px;color:#bbb}.pswp__caption__center{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn{width:20px;height:20px;margin:12px}.pswp__preloader--active{opacity:1}.pswp__preloader--active .pswp__preloader__icn{background:url(preloader.gif) 0 0 no-repeat}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{-webkit-animation:clockwise .5s linear infinite;animation:clockwise .5s linear infinite}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{-webkit-animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite;animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite}.pswp--css_animation .pswp__preloader__icn{background:0 0;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation .pswp__preloader__cut{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation .pswp__preloader__donut{-webkit-box-sizing:border-box;box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:0 0;margin:0}@media screen and (max-width:1024px){.pswp__preloader{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes donut-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}100%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes donut-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}100%{-webkit-transform:rotate(0);transform:rotate(0)}}.pswp__ui{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:0 0}#noty_layout__bottom,#noty_layout__bottomCenter,#noty_layout__bottomLeft,#noty_layout__bottomRight,#noty_layout__center,#noty_layout__centerLeft,#noty_layout__centerRight,#noty_layout__top,#noty_layout__topCenter,#noty_layout__topLeft,#noty_layout__topRight,.noty_layout_mixin{position:fixed;margin:0;padding:0;z-index:9999999;-webkit-transform:translateZ(0) scale(1,1);transform:translateZ(0) scale(1,1);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-font-smoothing:subpixel-antialiased;filter:blur(0);-webkit-filter:blur(0);max-width:90%}#noty_layout__top{top:0;left:5%;width:90%}#noty_layout__topLeft{top:20px;left:20px;width:325px}#noty_layout__topCenter{top:5%;left:50%;width:325px;-webkit-transform:translate(-webkit-calc(-50% - .5px)) translateZ(0) scale(1,1);transform:translate(calc(-50% - .5px)) translateZ(0) scale(1,1)}#noty_layout__topRight{top:20px;right:20px;width:325px}#noty_layout__bottom{bottom:0;left:5%;width:90%}#noty_layout__bottomLeft{bottom:20px;left:20px;width:325px}#noty_layout__bottomCenter{bottom:5%;left:50%;width:325px;-webkit-transform:translate(-webkit-calc(-50% - .5px)) translateZ(0) scale(1,1);transform:translate(calc(-50% - .5px)) translateZ(0) scale(1,1)}#noty_layout__bottomRight{bottom:20px;right:20px;width:325px}#noty_layout__center{top:50%;left:50%;width:325px;-webkit-transform:translate(-webkit-calc(-50% - .5px),-webkit-calc(-50% - .5px)) translateZ(0) scale(1,1);transform:translate(calc(-50% - .5px),calc(-50% - .5px)) translateZ(0) scale(1,1)}#noty_layout__centerLeft{top:50%;left:20px;width:325px;-webkit-transform:translate(0,-webkit-calc(-50% - .5px)) translateZ(0) scale(1,1);transform:translate(0,calc(-50% - .5px)) translateZ(0) scale(1,1)}#noty_layout__centerRight{top:50%;right:20px;width:325px;-webkit-transform:translate(0,-webkit-calc(-50% - .5px)) translateZ(0) scale(1,1);transform:translate(0,calc(-50% - .5px)) translateZ(0) scale(1,1)}.noty_progressbar{display:none}.noty_has_timeout.noty_has_progressbar .noty_progressbar{display:block;position:absolute;left:0;bottom:0;height:3px;width:100%;background-color:#646464;opacity:.2}.noty_bar{-webkit-backface-visibility:hidden;-webkit-transform:translate(0,0) translateZ(0) scale(1,1);-ms-transform:translate(0,0) scale(1,1);transform:translate(0,0) scale(1,1);-webkit-font-smoothing:subpixel-antialiased;overflow:hidden}.noty_effects_open{opacity:0;-webkit-transform:translate(50%);-ms-transform:translate(50%);transform:translate(50%);-webkit-animation:noty_anim_in .5s cubic-bezier(.68,-.55,.265,1.55);animation:noty_anim_in .5s cubic-bezier(.68,-.55,.265,1.55);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.noty_effects_close{-webkit-animation:noty_anim_out .5s cubic-bezier(.68,-.55,.265,1.55);animation:noty_anim_out .5s cubic-bezier(.68,-.55,.265,1.55);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.noty_fix_effects_height{-webkit-animation:noty_anim_height 75ms ease-out;animation:noty_anim_height 75ms ease-out}.noty_close_with_click{cursor:pointer}.noty_close_button{position:absolute;top:2px;right:2px;font-weight:700;width:20px;height:20px;text-align:center;line-height:20px;background-color:rgba(0,0,0,.05);border-radius:2px;cursor:pointer;-webkit-transition:all .2s ease-out;transition:all .2s ease-out}.noty_close_button:hover{background-color:rgba(0,0,0,.1)}.noty_modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:10000;opacity:.3;left:0;top:0}.noty_modal.noty_modal_open{opacity:0;-webkit-animation:noty_modal_in .3s ease-out;animation:noty_modal_in .3s ease-out}.noty_modal.noty_modal_close{-webkit-animation:noty_modal_out .3s ease-out;animation:noty_modal_out .3s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes noty_modal_in{100%{opacity:.3}}@keyframes noty_modal_in{100%{opacity:.3}}@-webkit-keyframes noty_modal_out{100%{opacity:0}}@keyframes noty_modal_out{100%{opacity:0}}@keyframes noty_modal_out{100%{opacity:0}}@-webkit-keyframes noty_anim_in{100%{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@keyframes noty_anim_in{100%{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@-webkit-keyframes noty_anim_out{100%{-webkit-transform:translate(50%);transform:translate(50%);opacity:0}}@keyframes noty_anim_out{100%{-webkit-transform:translate(50%);transform:translate(50%);opacity:0}}@-webkit-keyframes noty_anim_height{100%{height:0}}@keyframes noty_anim_height{100%{height:0}}.noty_theme__relax.noty_bar{margin:4px 0;overflow:hidden;border-radius:2px;position:relative}.noty_theme__relax.noty_bar .noty_body{padding:10px}.noty_theme__relax.noty_bar .noty_buttons{border-top:1px solid #e7e7e7;padding:5px 10px}.noty_theme__relax.noty_type__alert,.noty_theme__relax.noty_type__notification{background-color:#fff;border:1px solid #dedede;color:#444}.noty_theme__relax.noty_type__warning{background-color:#ffeaa8;border:1px solid #ffc237;color:#826200}.noty_theme__relax.noty_type__warning .noty_buttons{border-color:#dfaa30}.noty_theme__relax.noty_type__error{background-color:#ff8181;border:1px solid #e25353;color:#fff}.noty_theme__relax.noty_type__error .noty_buttons{border-color:#8b0000}.noty_theme__relax.noty_type__info,.noty_theme__relax.noty_type__information{background-color:#78c5e7;border:1px solid #3badd6;color:#fff}.noty_theme__relax.noty_type__info .noty_buttons,.noty_theme__relax.noty_type__information .noty_buttons{border-color:#0b90c4}.noty_theme__relax.noty_type__success{background-color:#bcf5bc;border:1px solid #7cdd77;color:#006400}.noty_theme__relax.noty_type__success .noty_buttons{border-color:#50c24e}`; //********************CONTENT SCRIPT FOR GALLERY EXTENSION********************//
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
