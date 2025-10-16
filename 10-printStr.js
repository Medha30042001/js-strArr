//my attempt
//https://onecompiler.com/javascript/43zpzx4ee

function printChar(N,str) {
    for(let i=0; i<N; i++){
      console.log(str[i]);
    }
    

}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  printChar(parseInt(a[0], 10), a[1]);
}

main();
