function outerfunction(outervar) {
    return function innerfunction(bcd) {
        console.log(outervar);
        console.log(bcd);
        
        
        
    }
    
}
let a = outerfunction(10)
console.log(a);
a(100)
