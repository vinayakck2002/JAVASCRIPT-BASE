// const p=document.querySelector('p');
// let a=10;
// const x=setInterval( () =>{
//     a--;
//     p.textContent=a;
//     if(a===0){
//         clearInterval(x);
//     }
// },1000
// )

const p = document.querySelector('p')
let m =1
let s =60
const x=setInterval(() => {
    s--
    p.innerHTML = `${m}:${s}`
    if(s===0){      
        m--
        s=59
    }

        if(m<0){
            clearInterval(x)
        }

    
}, 1000);


