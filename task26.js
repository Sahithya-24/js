// named functions
const numbers=[1,2,3,4,5];
arr=[],arr1=[],arr2=[];
function double(element){
    arr.push(element*2);
}
numbers.forEach(double);
console.log(arr);

// anonymous functions
numbers.forEach(function(element){
    arr1.push(element*2);
});
console.log(arr1)

// arrow functions
numbers.forEach((element)=>{return arr2.push(element*2)});
console.log(arr2);











// named functions
const number=[4,10,15,6,25,8];
function lessThan10(value){
    return value < 10;
}
console.log(numbers.filter(lessThan10));

// anonymous functions
console.log(numbers.filter(function(value){if(value <10){return value}}));

// arrow functions
console.log(numbers.filter((value)=>{if(value <10){return value}}));








// named functions
const words =['apple','grape','banana'];
function Uppercase(string){
    return string.toUpperCase();
}
console.log(words.map(Uppercase));
// anonymous functions
console.log(words.map(function(string){return string.toUpperCase()}));

// arrow functions
console.log(words.map((string)=>{ return string.toUpperCase()}));


