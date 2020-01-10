# Gallery

*Downloads button now added and working in FF; needs different API for Chrome, haven't done yet.*

Firefox/Chrome extension to provide a slideshow gallery implementation for imageboards. Currently implementing 4channel, will move on to other sites once I'm satisfied it's clean and stable.

At present, whenever you are in a thread: 
Alt+Clicking an image will open the gallery to that image.
Alt+M will open the gallery on the image last open in the gallery.
Alt+N, the close button, or clicking in the null space behind the image will close it.
The arrow keys, or the left/right controls in the gallery can be used to cycle through the images in a thread.

When the gallery is closed, the extension remembers the position in the gallery, and will open a notification with the post number of that image. If clicked, the page will jump down to that post, else the notification will time out in 2.5 seconds.


***

INSTALLATION:

Firefox: Just open the .xmi file, in /dist/firefox, with the browser. You should then be able to visit, say, http://boards.4channel.org/ck/ , and the extension will be usable.

Chrome: Still installing it in debug mode at the moment. Copy the dist folder somewhere on the local machine, and visit chrome://extension in Chrome. Turn on developer mode in the top right, click "Load unpacked", and select the dist folder. You should then be able to visit, say, http://boards.4channel.org/ck/ , and the extension will be usable.

IF BUILDING: Ensure you are in the root folder of the distribution, and run
```ruby
ruby build.rb
```


***

Built with noty: https://github.com/needim/noty/blob/master/docs/README.md and PhotoSwipe: https://github.com/dimsemenov/PhotoSwipe/blob/master/README.md
