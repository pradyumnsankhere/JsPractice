const arr=[1,23,423,556];

const calAvg=(arr)=>{
 
     const sum= arr.reduce((total,ele)=>total+ele)

    return  sum/(arr.length);


}

console.log(calAvg(arr));