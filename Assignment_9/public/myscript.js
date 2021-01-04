document.onload= function(){
    palindrome();    
};
function palindrome() {
    var i,flag=-1;
    palstr = document.getElementById("S").value;   
    str = palstr.toLowerCase().replace(/[^0-9a-z]/gi, '');
    //window.alert(str);
    count=0;
    if (str.length== 0)
    {
        window.alert("No string entered")
    }
    if ((str.length) % 2 === 0)
    {
        count=(str.length)/2;
    }
    else
    {
        if(str.length===1)
        {
            flag=0;
        }
        else
        {
            count=(str.length-1)/2;
        }
    }
    for(i=0; i< count; i++)
    {
        if (str[i] != str.slice(-1-i)[0]) {
			flag=1;
        }
        else
        {
            flag=0;
        }
    }   
         
    if(flag == 0)
    {
        //window.alert(number+"-The inputed number is Prime");
        var node = document.createElement("LI");
        node.className="is-palindrome";
       // node.setAttribute("class","is-prime");
        var textnode = document.createTextNode(palstr+ "   is a palindrome.");
        node.appendChild(textnode);
        document.getElementById("attempts").appendChild(node);
    }
        
    else if(flag == 1)
    {
        //window.alert(number+"-The inputted number is not Prime");
        var node1 = document.createElement("LI");
        node1.className="not-palindrome";
        //textnode1.classList.add("not-prime");
        var textnode1 = document.createTextNode(palstr+ "   is not a palindrome.");
       // textnode1.classList.add("is-prime");
        node1.appendChild(textnode1);
        document.getElementById("attempts").appendChild(node1);
    }
   
    
    
    
}