//my attempt

function charAtEvenPos(N,str) {
    for(let i=0; i<N; i++){
      if(i%2===0){
        console.log(str[i]);
      }
    }
    
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  charAtEvenPos(parseInt(a[0], 10), a[1]);
}

main();

