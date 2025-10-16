//my attempt

function niceArray(N, array, K) {
  let count = 0;
  for(let i = 0; i<N; i++){
    if(array[i]%2===0){
      count++;
    }
  }
  if(count>K) console.log('Nice array');
  else console.log('Bad array');
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  const arrlen = parseInt(a[0], 10);
  const arr = a[1].split(' ').map(Number);
  const K = parseInt(a[2], 10);
  
  niceArray(arrlen, arr, K);
}

main();
