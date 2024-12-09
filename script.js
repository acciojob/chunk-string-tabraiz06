function chunkString(str, chunkLength) {
  if (chunkLength <= 0) {
    throw new Error("Chunk length must be a positive integer.");
  }

  const result = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  
  return result;
}


// Do not change the code below 
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

alert(chunkString(str, size));

