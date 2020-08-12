class Formatter {
  //add static methods here
  static capitalize(str){
    return str.replace(str[0], str[0].toUpperCase())
  }
  static sanitize(str){
   var newStr=str.replace(/[^\w\s'-]|_/g,"");
   return newStr;
  }
  static titleize(str){
   const arr=["the","a","an","but","of","and","for","at","by","and","from"];
   const newarr=str.split(" ");
   for(let i=0;i<newarr.length;i++){
     if(newarr[i]===newarr[0]){
       newarr[0]= newarr[0].toUpperCase();
     }
     for(let j=0;j<arr.length;j++){
       if(newarr[i]!==arr[j]){
         newarr[i]= newarr[i].replace(newarr[i][0],newarr[i][0].toUpperCase());
       }
     }
     
   }
   return newarr;
  }
}
Formatter.capitalize("sss");