let cost= 1000000


if (cost>100000){
    totalcost=cost * (15 / 100);
    console.log('total amount :',totalcost);
    
}
else if(cost > 50000 && cost<= 100000 ){
    totalcost=cost*(10/100);
    console.log('total amount :',totalcost);
}

else if(cost<= 50000 ){
    totalcost=cost*(5/100);
    console.log('total amount :',totalcost);

}