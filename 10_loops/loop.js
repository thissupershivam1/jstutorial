//print 0 to 4

// console.log('0');
// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');

//Loops helps us to do the same thing again and again

for(let count=0;count <5;count++){
    console.log(count);
}
//iterate over arrays
let names=["John","Peter","Jane"];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

//iterate over arrays using forEachloop
console.log(`using foreach loop`);
names.forEach(function test(n){
    console.log(n);
});

//for of loop
for(n of names){
    console.log(n);
}

//iterate over an object
let student={
    name:"Peter",
    rollNo:567,
    age:23,
};
console.log("iterate over an object");
for(key in student){
    console.log("Key is "+key+"  value is  "+student[key]);
}

//while loop in js

let c=0;
while(c<5){
    console.log(c);
    c++;
}

