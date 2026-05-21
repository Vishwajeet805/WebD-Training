// import {sum,data} from "./new.js"
// console.log(data)
// sum(4,5)
//pure function
function double(num) {
    return num * 2
}
console.log(double(5))
console.log(double(double(5)))
// impure Function

let count = 0
function fun1() {
    count++
    return count
// restorly
}
console.log(fun1());
console.log(fun1());
console.log(fun1(fun1(fun1())));
//Function recurring
function sum(b){
    return function(a){
        // return a+b
        return function(c)
    {
        return a+b+c
    }}
}
console.log(sum(1)(2)(3));
function rsum(a){
    return function (b){
        if(b){
            return rsum(a+b)
        }
        return a
    }
}
console.log(rsum(1)(2)(3)());
//spread operator (...)
let arr=[1,2,3,4]
let nums=[...arr,6,7,8,9]
console.log(nums)

function fun(a,b,c,...rest){//rest parameter
    console.log(rest);
    
}
fun(1,2,3,4,5,6,78,8,3,0,5,7,7,5,4,47,73,0,7)
//destructuring
let ar=[1,2,3,4,5,6]
let [x,y,z]=ar
console.log(x,y,z)
let obj={
    id:1,
    name:"om",
    isOn:true
}

let {id,isOn,name}=obj
console.log(name,isOn);
