 const arr=[1,23,4534,66];

 const arr1=[1,23,4534,66];

const arrayEq=(arr,arr1)=>{

    if(arr.lenght!=arr1.lenght){
        return false;
    }
      
   for(i=0; i<arr.lenght; i++){
    if(arr[i]!=arr1[i]){
    
        return false;
       
    }
   }

   return true;


}

console.log(arrayEq(arr,arr1));