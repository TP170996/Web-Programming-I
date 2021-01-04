const dictionary = require("./dictionary")
try {
    console.log(dictionary.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}
try{
    console.log(dictionary.getWord("The action or process of writing computer programs."))
}catch (error){
    console.log(error)
}
try {
    console.log(dictionary.lookupDefinition("charisma"))
}catch (error){
    console.log(error)
}
try{
    console.log(dictionary.getWord("A sudden or irregular invasion or attack for war or spoils : raid"))
}catch (error){
    console.log(error)
}
try {
    console.log(dictionary.lookupDefinition("car"))
}catch (error){
    console.log(error)
}
try{
    console.log(dictionary.getWord("A box"))
}catch (error){
    console.log(error)
}