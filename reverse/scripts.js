function reverse(){
    let a = document.getElementById("input")
    let text = "Hello World";
    let reversedText = "";
    
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    
    console.log(reversedText);
    // Output: "dlroW olleH"
    
}