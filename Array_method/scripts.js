// array.forEach(callback(element,index,arr),thisValue) :---syntax of forEach
// function data (a,b,callback){
//     const c=a+b
//     callback(c)
// }
// function display(c) {
//     console.log(c);
// }
// data(10,2,display)
// data(110,20,display)

// ===============FOREACH===============================================================================

const a = [1,2,3,4,5,6] 
// a.forEach((item) =>console.log(item));
// // console : 1 2 3 4 5 6 
// ================MAP==============================================================================

// const data = a.map((item)=>item*10)
// console.log(data);
 // // console : [10, 20, 30, 40, 50, 60]

// ========================FILTER==================================================================

// all value return

// const data = a.filter((item)=>item%2==0)
// console.log(data);
// // console : [2, 4, 6]


// USE STRING 

// const b=["abhinav",'akshay','vinayak','hari']
// const data= b.filter((item)=>item[0]=='a')
// console.log(data);
// // console : ['abhinav', 'akshay']


// ==================REDUCE=================================================================

// const red =a.reduce((data,item)=>data+item)
// console.log(red);
// // // console : 21 adding all digit 

// ==================FIND=================================================================

// a single value return

// const data = a.find((item)=>item>4)
// console.log(data);
// // console : 5


