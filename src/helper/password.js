const checkpwd = (password)=>{
    const SpecialSym =['!','@','#','$','%','^','&','*','-','_'] 
    const val = true
      
    if (password.length < 1){ 
        val = false}
          
    if (password.length > 8){
        val = false
    }
          
    if(!stringContainsNumber(password)){
        val = false
    }
          
    if(!isUpper(password)){
        val = false
    }
        return val
}
function stringContainsNumber(_input){
    let string1 = String(_input);
    for( let i = 0; i < string1.length; i++){
        if(!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ") ){
          return true;
        }
    }
    return false;
  }

  function isUpper(_input){
      for(let i = 0;i<String(_input).length;i++){
        if(startsWithCapital(String(_input),i)){
            return true;
        }
      }
  }
  function isLower(_input){
    for(let i = 0;i<String(_input).length;i++){
        if(startsWithLower(String(_input),i)){
            return true;
        }
      }
  }
  function startsWithCapital(word,i){
    return word.charAt(i) === word.charAt(i).toUpperCase()
}
function startsWithLower(word,i){
    return word.charAt(i) === word.charAt(i).toLowerCase()
}