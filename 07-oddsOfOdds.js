//my attempt

function oddsOfOdds(n,A){
  let count = 0;
  for(let i=0; i<n; i++){
    if(A[i]%2!==0){
      count++;
    }
  }
  if(count%2!=0){
    console.log('Yes');
  }else console.log('No');
}


function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  const testcases = parseInt(a[0], 10);
  
  let line = 1;
  for(let j = 1; j<=testcases; j++){
  
    const arrLen = parseInt(a[line], 10); //console.log(arrLen);
    const smallArr = a[line+1].split(' ').map(Number);
    
    oddsOfOdds(arrLen,smallArr);
    line+=2;
  }
  
}

main();
