// // task1
// var colors =['red','green','blue','yellow','orange'];
// side='';
// for(index in colors){
//     console.log(index);
// side=side+index +"";
// }


// // task2
// animals =['cat','dog','rabbit','elephant','lion'];
// side='';
// for(list of animals){
//     console.log(list);
// side=side+list +"";
// }
// console.log(list);


// // task3
// numbers=[2,4,6,8,10];
// result=0;
// for(x of numbers){
//     result=result+x;
// }
// console.log("sum of elements in array (numbers) is:",result);



// // task4
// var numbers=[2,4,6,8,10];
// var reverse=[];
// var reverse_number=[];
// var i =numbers.length-1;
// do{
//     reverse=reverse+numbers[i];
//     i--;
// }
// while(i>=0);
// console.log("array before reversing :",numbers);
// console.log("reversed elements in string :",reverse.split(''));
// for(i=0;i<reverse.length;i++){
//     reverse_number[i]=Number(reverse[i]);
// }
// console.log("reversed elements in numbers ",reverse_number);




// task5
var numbers=[2,4,6,8,10];
var even=0;
var i=0;
do{
    if(numbers[i]%2==0){
        even = even+numbers[i];
    }
    i++;
}
while(i<numbers.length);
console.log("sum of even numbers in an array numbers is :",even);



// // task6
// alpha=['s','a','h','i'];
// var reverse=[];
// var reverse_number=[];
// var i = alpha.length-1;
// while(i>=0){
//     reverse=reverse+alpha[i];
//     i--;
// }
// console.log("array before reversing:",alpha);
// console.log("array after reversing :",reverse.split(''));