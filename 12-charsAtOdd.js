//my attempt
//https://onecompiler.com/javascript/43zq2br4k

function charAtOddPos(N,str) {
    for(let i=0; i<N; i++){
      if(i%2!==0){
        console.log(str[i]);
      }
    }
}


function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  charAtOddPos(parseInt(a[0], 10), a[1]);
}

main();

