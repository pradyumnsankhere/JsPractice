  const arr=[1,2,456,6,7]
 
 const  calculateSumofSquare=(arr)=>{

    return   arr.reduce((sum,number)=>sum+Math.pow(number,2))
  }

  console.log(calculateSumofSquare(arr));