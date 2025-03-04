let units=350
if(units==100){
    bill=0
    console.log("no charge");    
}
else if(units<=200){
    bill=(units-100)*5
    console.log("bill : ",bill);
    
}
else{
    bill=(100*5)+((units-200)*10)
    console.log("bill : ",bill);
}
alert('hello')
