module.exports = function(filepath, ext, cb) {
	var fs = require('fs')
	var path = require('path')
	var matches = []
	var extension = "." + ext

	fs.readdir(filepath, function (err, files){
		if (err) return cb(err)

		files.forEach(function(element, index, files){
			if( path.extname( element ) === extension ){
				matches.push(element)
				// console.log("pushed " + element + " to " + matches)
			}
		}) //end forEach
		// console.log("mathes are " + matches)
		return cb(null, matches)
	})
	// return cb(null, matches)
}