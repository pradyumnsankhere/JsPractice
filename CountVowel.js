  
  const countVowel=(str)=>{

    return str.replace(/[^aeiou]/g, "").length; 
}
    

  console.log(countVowel('striing'))