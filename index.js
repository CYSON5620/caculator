const inputValue = document.getElementById("userinput");

const number = document.querySelectorAll(".number").forEach(function (item){
    
    item.addEventListener("click", function (e){
       
        if (inputValue.innerText === "NaN"){
            inputValue.innerText ="";
        }
       if (inputValue.innerText === "0") {
inputValue.innerText ="";

       }
       inputValue.innerText += e.target.innerHTML.trim();
    
    })
});
 
const calculate = document.querySelectorAll(".operations").forEach(function (item) {
    console.log(item)
    item.addEventListener("click", function (e){
        console.log(e.target.innerHTML);
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);
if (e.target.innerHTML === "=") {
    console.log("iii")
inputValue.innerText = eval(inputValue.innerText);
} else if (e.target.innerHTML === "AC") {
    inputValue.innerText = 0;
} else if (e.target. innerHTML ==="DEL") {
    inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length -1);
    if (inputValue.innerText.length == 0){
        inputValue.innerText = 0;} 
}else if(e.target.innerHTML === '*'){
    inputValue.innerHTML== '*';
}else if(e.target.innerHTML==='-'){
    inputValue.innerHTML ==='-'
}else if(e.target.innerHTML ==='+'){
  inputValue.innerHTML==='+'
}
    });
    
});


