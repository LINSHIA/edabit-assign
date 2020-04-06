console.log("Hello");

//Bitwise Operations
function bitwiseAND(n1: number, n2: number) : number { 
  return n1&n2; }

function bitwiseOR(n1: number, n2: number) : number { 
  return n1|n2; }
  
function bitwiseXOR(n1: number, n2: number) : number {
   return n1^n2; }

// Add up the Numbers from a Single Number 
function addUp(num: number) {
  return (num * (num + 1))/2;
  }

// A Redundant Function 

function redundant(str: any)
{
  return function() { return str ; };

// Array of Multiples 

const arrayOfMultiples = (num: number, length: any) => {
	return  ((_: any, i: number) => num * (i + 1))}};

