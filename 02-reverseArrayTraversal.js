//my approach

function reverseArrayTraversal(n, arr){
  let str = '';
    for(let i=n-1; i>=0; i--){
      str += arr[i] + ' ';
    }
    console.log(str);
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  let b = a[1].split(' ').map(Number);
  reverseArrayTraversal(parseInt(a[0], 10), b);
}

main();
