//Spread Operator example 1
var arr1=[1,2,3];
var arr2=[...arr1, 4,5,6];
console.log(arr2);
//output: [1, 2, 3, 4, 5, 6]

//spread Operator example 2 
var obj1={
    a:1,
    b:"AHMED Taaw"
}
var obj2={
    ...obj1,
    c:"Ahmed Tawfik"
}
console.log(obj2);
//output: {a: 1, b: 'AHMED Taaw', c: 'Ahmed Tawfik'}

//rest operator example 
function sum(a, ...b){
    console.log(a);
    console.log(b);
}
sum(1,2,3,4,5,6,7,8);
//output: 1, [2, 3, 4, 5, 6, 7, 8]