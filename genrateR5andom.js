
// const genRandom=(a,b)=>{
//   for(i=a+1; i<b; i++ ){
//     console.log(i);
//   }
// }

// genRandom(2,10);


const genRandom=(max,min)=>{

    return Math.floor(Math.random()*(max-min+1))+min;

}

console.log(genRandom(1,10));