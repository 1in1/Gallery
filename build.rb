#RUN ME FROM THE ROOT DIRECTORY OF THE PROJECT

require 'fileutils'
require 'rest-client'

FileUtils.rm_r Dir.glob('./dist/*')
FileUtils.mkdir_p './dist/js/'
FileUtils.cp './src/manifest.json', './dist/manifest.json'
FileUtils.cp "./src/js/noty.min.js", "./dist/js/noty.min.js"
FileUtils.cp "./src/js/photoswipe-ui-default.min.js", "./dist/js/photoswipe-ui-default.min.js"
FileUtils.cp "./src/js/photoswipe.min.js", "./dist/js/photoswipe.min.js"

css = Array.new
psrootmini = RestClient.post "https://html-minifier.com/raw", {:input => File.open("./src/photoswipe-root.html").read}
css[0] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/photoswipe.css").read}
css[1] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/default-skin.css").read}
css[2] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/noty.css").read}
css[3] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/relax.css").read}

mainout = File.open("./dist/js/inject.js", "w")
mainout.write("const markup = `")
mainout.write(psrootmini.gsub(/\n/,""))
mainout.write("`; const allCSS = `")
css.each do |x|
  mainout.write(x)
end
mainout.write("`; ")
injsrc = RestClient.post "https://javascript-minifier.com/raw", {:input => File.open("./src/js/inject.js").read}
mainout.puts injsrc
