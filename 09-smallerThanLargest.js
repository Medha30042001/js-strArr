//my attempt
//https://onecompiler.com/javascript/43zpzdbvd

function smallerThanLargest(N,arr){
  let max = 0;
  let str = '';
  for(let i=0; i<N; i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  for(let j=0; j<N; j++){
    if(arr[j]!==max){
      arr[j] = -1;
    }
  }
  for(let k=0; k<N; k++){
    str+=arr[k] + ' ';
  }
  console.log(str);
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  const testcases = parseInt(a[0], 10);
  
  let line = 1;
  for(let j = 1; j<=testcases; j++){
  
    const arrLen = parseInt(a[line], 10); //console.log(arrLen);
    const smallArr = a[line+1].split(' ').map(Number);
    
    smallerThanLargest(arrLen,smallArr);
    line+=2;
  }
  
}

main();
