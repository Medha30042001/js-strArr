//my attempt
//https://onecompiler.com/javascript/43zpkbcyv

function averageOfAll(n, arr){
  let sum = 0;
    for(let i=0; i<n; i++){
      sum += arr[i];
    }
    console.log(Math.ceil(sum / n));
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  let b = a[1].split(' ').map(Number);
  averageOfAll(parseInt(a[0], 10), b);
}

main();
