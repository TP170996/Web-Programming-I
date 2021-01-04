const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}
var checkwords;
var inputVal;
function checkInput(checkwords){
    if(typeof checkwords !='string')
    {
        throw `${checkwords || "provided variable"} is not a string`;
    }
    else
        return checkwords

}
function lookupDefinition(inputVal){
    checkInput(inputVal);
    let x=words[inputVal];
    if(x === undefined){
        throw `${inputVal || "provided input"} is not available`;
    }
    return words[inputVal]

}

function getWord(inputVal){
    checkInput(inputVal);
    let getWord= Object.keys(words).find(key => words[key] === inputVal);
    if (getWord === undefined){
        throw "Word not found"
    }
    return getWord

}

module.exports={lookupDefinition,getWord}


