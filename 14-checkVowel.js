//my attempt
//https://onecompiler.com/javascript/43zq36kbd

function checkVowel(N, str) {
  let vowels = 'aeiouAEIOU';
  let check = false;
  
  for(let ch of str){
    if(vowels.includes(ch)){
      check = true;
      break;
    }
  }
  console.log(check);
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split('\n');
  checkVowel(parseInt(a[0], 10), a[1]);
}

main();

