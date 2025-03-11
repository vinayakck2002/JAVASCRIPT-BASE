function reverse(){
//    alert("hello")
let a =document.getElementById("input")

let val=a.value
let reversed=""
for(let i=val.length-1;i>=0;i--){
reversed +=val[i]

}
document.getElementById("result").innerHTML=(reversed)

console.log(reversed);
return reversed
}
