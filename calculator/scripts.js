function add(){
        let a=document.getElementById("input1")
        let b=document.getElementById("input2")
        let c=parseInt(a.value) + parseInt(b.value)
        console.log(c.value);
        document.getElementById("a1").innerHTML=("result :"+c)
    }
    function sub(){
        let a=document.getElementById("input1")
        let b=document.getElementById("input2")
        let c=parseInt(a.value) - parseInt(b.value)
        console.log(c.value);
        document.getElementById("a1").innerHTML=("result :"+c)
    }

    function div(){
        let a=document.getElementById("input1")
        let b=document.getElementById("input2")
        let c=parseInt(a.value) / parseInt(b.value)
        console.log(c.value);
        document.getElementById("a1").innerHTML=("result :"+c)
    }
    function mod(){
        let a=document.getElementById("input1")
        let b=document.getElementById("input2")
        let c=parseInt(a.value) - parseInt(b.value)
        console.log(c.value);
        document.getElementById("a1").innerHTML=("result :"+c)
    }
    function mul(){
        let a=document.getElementById("input1")
        let b=document.getElementById("input2")
        let c=parseInt(a.value) * parseInt(b.value)
        console.log(c.value);
        document.getElementById("a1").innerHTML=("result :"+c)
    }



