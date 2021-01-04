function deepEquality(obj1,obj2)
{
    if(obj1==null||obj2==null)
    {
        throw "Error:Enter Input"
    }
    else if(typeof obj1!='object'||typeof obj2!='object')
    {
        throw "Error:Enter Valid Input"
    }
    else
    {
        var eq = JSON.stringify(obj1) == JSON.stringify(obj2);
        return eq;
    }
}

function uniqueElements(arr)
{
    if(arr.length < 1 || arr == undefined)
    {
        throw "Error:Enter Input"
    }
    else if(Array.isArray(arr)==false)
    {
        throw "Error:Enter array"
    }
    else
    {
        let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
        return unique;
    }
    
}

function countOfEachCharacterInString(str)
{
    if(str==null)
    {
        throw "Error:Enter Input"
    }
    else if(typeof str!='string')
    {
        throw "Error:Not a string"
    }
    else
    {
        var count = {};
        str.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
        });
        return count;
    }
    
}

module.exports={deepEquality,uniqueElements,countOfEachCharacterInString}