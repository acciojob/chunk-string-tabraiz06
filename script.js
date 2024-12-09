function stringChop(str, size) {
  // your code here
	 if (size <= 0) {
    throw new Error("Chunk length must be a positive integer.");
		 
  }
	
		let result=[]
	for(let i=0 ; i<str.length; i+=size){
		result.push(str.slice(i, i+size))
	}
	console.log(result)
	return result
	
}

// Do not change the code below 
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
