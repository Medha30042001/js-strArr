//my attempt
//https://onecompiler.com/javascript/43zq26c8a

function printCharReverse(N,str) {
    for(let i=N-1; i>=0; i--){
      console.log(str[i]);
    }
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  printCharReverse(parseInt(a[0], 10), a[1]);
}

main();
