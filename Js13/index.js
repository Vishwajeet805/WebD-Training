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
