let display = document.getElementById("display");
function show(x) {
    display.value += x;
}
function clr(){
 display.value= "";
 }
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

