

const capital=(sen)=>{

const word=sen.split(' ');

const capitalWord=word.map(word=>word.charAt(0).toUpperCase()+ word.slice(1));
  
return capitalWord.join(' ');



}

console.log(capital("this is a string"));
