// const data = {
//     fname:"manu",
//     lname:"lal",
//     fullname: function(){
//         console.log(this.fname,this.lname);
        
//     }
// }
// console.log(data);
// data.fullname()

// ==================CALL-METHOD============================================================================================

// call return a value
// const nameobj ={
//     fname:"anil",
//     age:20
// }

// const data ={
//     fname:"nani",
//     lname:"jacob",
//     age:40,
//     fullname: function () {
//         console.log(this.fname,this.age);
        
//     }
// }

// console.log(data)
// data.fullname.call(nameobj)

// ==================BIND-METHOD============================================================================================

//bind return function

// const nameobj ={
//     fname:"anil",
//     age:20
// }

// const data ={
//     fname:"nani",
//     lname:"jacob",
//     age:40,
//     fullname: function () {
//         console.log(this.fname,this.age);
        
//     }
// }

// console.log(data)
// const d1=data.fullname.call(nameobj)
// d1()
// console.log(d1);
