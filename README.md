# Gallery

Firefox extension to provide a slideshow gallery implementation for imageboards. Currently implementing 4channel, will move on to other sites once I'm satisfied it's clean and stable.

At present, whenever you are in a thread: Alt+M will open the gallery on the image last open in the gallery. Alt+N, the close button, or clicking in the null space behind the image will close it. The arrow keys, or the left/right controls in the gallery can be used to cycle through the images in a thread.

When the gallery is closed, the extension remembers the position in the gallery, and will open a notification with the post number of that image. If clicked, the page will jump down to that post, else the notification will time out in 2.5 seconds.


***

INSTALLATION:
Still installing it in debug mode at the moment. Copy the dist folder somewhere on the local machine, and visit about:debugging in Firefox. Click "This Firefox", then "Load Temporary Add-on", and open the manifest.json file. You should then be able to visit, say, http://boards.4channel.org/ck/ , and the extension will be usable

IF BUILDING: Ensure you are in the root folder of the distribution, and run
```ruby
ruby build.rb
```
