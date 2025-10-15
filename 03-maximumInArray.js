//my attempt
//https://onecompiler.com/javascript/43zph9smc

function maximumInArray(N,arr){
  let max = arr[0];
    for(let i=1; i<N; i++){
      if(arr[i]>max){
        max=arr[i];
      }
    }
    console.log(max);
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  let b = a[1].split(' ').map(Number);
  maximumInArray(parseInt(a[0], 10), b);
}

main();
