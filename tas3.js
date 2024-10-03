// 10 natural numbers
for(var i=1;i<=10;i++){
    console.log(i)
}


//5 table
var i=1,mul=5;
for(i=1;i<=10;i++){
    console.log(mul+" "+" * "+i+" "+" = "+" "+(mul*i));             
}



//sum of 10 natural numbers
var sum=0;
for(var i=1;i<=10;i++){
    sum+=i;
}
console.log("sum of 10 natural numbers is; "+sum);



//num divisible by 3
var side = ""
for(var i=1;i<=30;i++){
    if(i%3 == 0){
        side+=i + "\t";
    }
}
console.log(side);



//squares from 1 to 10
var count=" ";
for(var i=1;i<=10;i++){
    for(var j=1;j<=i;j++){
        count+=j*j+"\t";
    }
    count+="\n";
}
consolele.log(count);




