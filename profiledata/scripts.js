const data=[]

function add(){
    let no = document.getElementById('no').value
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value

    data.push({no: no,name:name,age:age})

    console.log(data);
    // for clear
    document.getElementById('no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''

    display()
    // let no = document.getElementById('no').value
    // let name = document.getElementById('name').value
    // let age = document.getElementById('age').value
    // data.push({no:no.value,name:name.value,age:age.value})
    // no.value=name.value=age.value=''
    // console.log(data);
    
}

function display(){
    let tbody=document.getElementById('tbody')
    tbody.innerHTML=''
    for (user of data){
        const tr=document.createElement("tbody")
        tr.innerHTML=`
        <td>${user.no}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        `
        tbody.appendChild(tr)
    }
}
display()