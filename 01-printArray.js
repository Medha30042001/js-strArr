//my approach
//https://onecompiler.com/javascript/43zpgvvrg

function printArray(N,arr){
  
    for(let i=0; i<N; i++){
      console.log(arr[i]);
    }
    
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  let b = a[1].split(' ').map(Number);
  printArray(parseInt(a[0], 10), b);
}

main();
