// Question 1
const questionOne = function questionOne(arr) {
    var i=0;
    var mul=0;
    for(i=0;i<arr.length;i++){        
        var square= arr[i]*arr[i];
        var mul= mul+square;
    }    
    return mul;
}
//Question 2
const questionTwo = function questionTwo(num) { 
   var temp=0,a=1,b=0;
    
    if (num<1){
        return 0;
      }
        
    else{
        while (num > 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
          }
        return b;
      }
}
//Question 3
const questionThree = function questionThree(text) {
    var count=0;
    var i;    
    for(i=0;i<text.length;i++){
        if(text[i]=="a"||text[i]=="e"||text[i]=="i"||text[i]=="o"||text[i]=="u"||text[i]=="A"||text[i]=="E"||text[i]=="I"||text[i]=="O"||text[i]=="U"){
          count=count+1;          
        }        
    }
    return count;    
}
//Question 4
const questionFour = function questionFour(num) {
    if(num<0){
        return"NaN";
    }
    else if(num>1){
        var i;
        fact=1;
        for(i=1;i<=num;i++){
            var fact=fact*i;
        }
        return fact;
    }
    else{
        return 1;   
        
    }    
}

module.exports={
    firstName: "TEJASHREE", 
    lastName: "PRABHU", 
    studentId: "10450404",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};