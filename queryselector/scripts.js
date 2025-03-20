// const btn=document.querySelector('button')
// console.log('btn');
// btn.onclick=function(){
//     alert('welcome')
// }

// Anotherway
// btn.onclick=()=>alert('another way of welcome display')

// 
const btn=document.querySelector('button')
btn.addEventListener('mouseenter', () => {
  const p =document.querySelectorAll('p')
  p.style.color='red'
})
