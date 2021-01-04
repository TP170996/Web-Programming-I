const geometry = require("./geometry")
const utilities = require("./utilities")

//volumeOfRectangularPrism
console.log('Volume of Rectagular Prism')
try {
    console.log('test 1:')
    console.log(geometry.volumeOfRectanglarPrism(1,2,6))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
try {
    console.log('test 2:')
    console.log(geometry.volumeOfRectanglarPrism(1,-2,6))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
try {
    console.log('test 3:')
    console.log(geometry.volumeOfRectanglarPrism(1,6))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
//surafceAreaOfRectangularPrism
console.log('Surface Area of a Prism')
try {
        console.log('test 1:')
    console.log(geometry.surfaceAreaOfRectanglarPrism(1,2,3))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
//volumeOfSphere
console.log('Volume of Sphere')
try {
    console.log('test 1:')
    console.log(geometry.volumeOfSphere(3))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
try {
    console.log('test 2:')
    console.log(geometry.volumeOfSphere(-3))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
try {
    console.log('test 3:')
    console.log(geometry.volumeOfSphere("a"))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
//surfaceAreaOfSphere
console.log('Surface Area of a sphere')
try {
    console.log('test 1:')
    console.log(geometry.surfaceAreaOfSphere(3))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
//deepEquality
console.log('Deep Equality')
try {
    console.log('test 1:')
    const first={a:2,b:3};
    const second={a:2,b:3};
    const third={a:8,b:6};
    console.log(utilities.deepEquality(first,second))
    console.log(utilities.deepEquality(first,third))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
//uniqueElements
console.log('Unique Elements')
try {
    console.log('test 1:')
    const testArr=["a","a","b","a","b","c"]
    console.log(utilities.uniqueElements(testArr))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
try {
    console.log('test 2:')
    const testArr=[]
    console.log(utilities.uniqueElements(testArr))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
//countOfEachCharacterInString
console.log('Count of each character in a string')
try {
    console.log('test 1:')
    const test="Hello, the pie is in the oven";
    console.log(utilities.countOfEachCharacterInString(test))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}
try {
    console.log('test 1:')
    const test=55;
    console.log(utilities.countOfEachCharacterInString(test))
    console.log('passed successfully')
}catch (error){
    console.log(error)
    console.error(' failed test case')
}