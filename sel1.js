var i, total=0

for(i = 2; i < process.argv.length; i++){
	total += parseInt( process.argv[i], 10)
}


console.log(total)
