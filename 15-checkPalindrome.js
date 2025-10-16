//my attempt
//https://onecompiler.com/javascript/43zq3ad2x

function checkPalindrome(str){
let check = true;
  for(let i=0; i<Math.floor(str.length/2); i++){
    if(str[i]!==str[str.length-i-1]){
      check = false;
      break;
    }
  }
  if(check) console.log('Yes');
  else console.log('No');
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  checkPalindrome(input);
}

main();

