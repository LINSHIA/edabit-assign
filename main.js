console.log("Hello");

//Bitwise Operations
function bitwiseAND(n1, n2) {
    return n1 & n2
  }
  
  function bitwiseOR(n1, n2) {
    return n1 | n2
  }
  
  function bitwiseXOR(n1, n2) {
    return n1 ^ n2
  
}

//Add up the Numbers from a Single Number


function addUp(num) {
    return (num * (num + 1))/2;
  }

//A Redundant Function
  function redundant(str) {
	return () => str
}

//Array of Multiples
const arrayOfMultiples = (num, length) => {
    return Array.from({length: length}, (_, i) => num * (i + 1));
    

      }
