var fs = require('fs')
var filelength = undefined

function countBreaks(callback){
	fs.readFile(process.argv[2], 'utf8', function reader(err, data){
			if (err) throw err
			// console.log("data is \n" + data + "\n\n")
			filelength = (data.split('\n')).length - 1
			// console.log("filelength is " + filelength)
			callback()
		})
}

function logOutput(){
	console.log(filelength)
}

countBreaks(logOutput)
