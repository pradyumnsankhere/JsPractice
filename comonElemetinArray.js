const arr=[1,4,6,7,8,2,4];
const arr1=[2,4,6,27,1,4];

const commonElement=(arr,arr1)=>{
    
    return  arr.filter((elemet)=>arr1.includes(elemet));   
      
      
}
 
console.log(commonElement(arr,arr1));