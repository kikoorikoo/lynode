 // Create a program that prints a list of files in a given directory,
 //  filtered by the extension of the files. You will be provided a directory
 //  name as the first argument to your program (e.g. '/path/to/dir/') and a
 //  file extension to filter by as the second argument.

 //  For example, if you get 'txt' as the second argument then you will need to
 //  filter the list to only files that end with .txt. Note that the second
 //  argument will not come prefixed with a '.'.

 //  Keep in mind that the first arguments of your program are not the first
 //  values of the process.argv array, as the first two values are reserved for
 //  system info by Node.

 //  The list of files should be printed to the console, one file per line. You
 //  must use asynchronous I/O.



var fs = require('fs')
var path = require('path')
var filepath = process.argv[2]
var extension = process.argv[3]
var list = undefined

function getList(callback){
	fs.readdir(filepath, function cb2(err, files){
		if (err) throw err
		list = files
		callback()
	})
}

function logList(){
	var extmatch = []
		// console.log("list is " + list + "\n\n is it an array? system says " + Array.isArray(list) )

		//if extension is match for input, put in new array
		// extension.exec(list[i])
	list.forEach(function(element, index, list){
			if( ( path.extname( element ) ).substring(1) === extension){
				extmatch.push( element )
			}
			// else{
			// 	console.log(path.extname(element) + " is no match for " + extension)
			// }
		})
		// console.log("extmatch is " + extmatch)
		extmatch.forEach(function(element, index, extmatch){
			console.log(element)
		})

}

getList(logList)

