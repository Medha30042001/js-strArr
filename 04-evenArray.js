//my attempt
//https://onecompiler.com/javascript/43zphtvwq

function evenArray(n, arr){
    for(let i=0; i<n; i++){
      if(arr[i]%2==0){
        console.log(arr[i]);
      }
    }
    
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  let b = a[1].split(' ').map(Number);
  evenArray(parseInt(a[0], 10), b);
}

main();
