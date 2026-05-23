let obj={
    id:1,
    fname:"Om",
    lname:"Tiwari",
    fullname:function(city){
        console.log(this.fname +this.lname );
        
    }

}

let user={
    id:10,
    fname:"VI",
    lname:"SI",
    address:{
        city:"Delhi"
    }

}
obj.fullname.call(user,"Bhopal")
obj.fullname.apply(user,["Bhopal"])

let user1=obj//Reference copy
user1.name="hello"
// let user2={...obj} //ShallowCopy-nexted object is copied with reference
let user2=structuredClone(obj)//Deep Copy
user2.name="hii"
user2.address.city="Delhi"
console.log(user.name);
console.log(user2.address.city);
console.log(user.address.city);

console.log(user1.name);
console.log(user2.name);


// let arr=[1,2,3,4]
// // arr.mapppp
// console.log(Array.prototype);
let str="js  js   js"
let ans= str.split("").reverse().join("")
console.log(ans);
console.log(str.replaceAll("js","jsx"));
console.log(str.charAt(0));
console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.trim());
console.log(str.includes("s"));
console.log(str.indexOf("j"));
console.log(str.substring(0,4),"substring");
console.log(str.substr(0,4),"substr");
console.log(str.split(""));

