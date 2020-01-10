#RUN ME FROM THE ROOT DIRECTORY OF THE PROJECT

require 'fileutils'
require 'rest-client'

FileUtils.rm_r Dir.glob('./build/*')
FileUtils.mkdir_p './build/js/'
FileUtils.cp './src/manifest.json', './build/manifest.json'
FileUtils.cp "./src/js/noty.min.js", "./build/js/noty.min.js"
FileUtils.cp "./src/js/photoswipe-ui-default.min.js", "./build/js/photoswipe-ui-default.min.js"
FileUtils.cp "./src/js/photoswipe.min.js", "./build/js/photoswipe.min.js"

css = Array.new
psrootmini = RestClient.post "https://html-minifier.com/raw", {:input => File.open("./src/photoswipe-root.html").read}
css[0] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/photoswipe.css").read}
css[1] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/default-skin.css").read}
css[2] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/noty.css").read}
css[3] = RestClient.post "https://cssminifier.com/raw", {:input => File.open("./src/style/relax.css").read}

mainout = File.open("./build/js/inject.js", "w")
mainout.write("const markup = `")
mainout.write(psrootmini.gsub(/\n/,""))
mainout.write("`; const allCSS = `")
css.each do |x|
  mainout.write(x)
end
mainout.write("`; ")

#Have temporarily disabled minimising the injection script, as something it was doing
#was stopping it from passing FF validation (syntax error, supposedly)

#injsrc = RestClient.post "https://javascript-minifier.com/raw", {:input => File.open("./src/js/inject.js").read}
injsrc = File.open("./src/js/inject.js").read
mainout.puts injsrc

File.open("./build/js/download.js","w").write(RestClient.post("https://javascript-minifier.com/raw", {:input => File.open("./src/js/download.js").read}))

#Pack and sign for Firefox

FileUtils.rm_r Dir.glob('./out/firefox/*')
FileUtils.mkdir_p './out/firefox/'
key = File.open("apikey.txt").readlines
#system("web-ext build --source-dir .\\build --artifacts-dir .\\out\\firefox")
system("web-ext sign --source-dir .\\build --artifacts-dir .\\out\\firefox --api-key #{key[0].chomp} --api-secret #{key[1].chomp}")

FileUtils.mkdir_p './dist/firefox/'
FileUtils.cp(Dir.glob('./out/firefox/*.xpi'), './dist/firefox/')