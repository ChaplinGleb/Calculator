const resultCalc = document.getElementById("box_result")
function input(i){
   if (resultCalc.value.length > 12){
      resultCalc.value = "Too much";
   }
   if (resultCalc.value != "Too much" && resultCalc.value != "Error"){
      resultCalc.value += i;   
   }
   if(resultCalc.value.substr(resultCalc.value.length - 2) == "**" || resultCalc.value.substr(resultCalc.value.length - 2) == "//" || resultCalc.value.substr(resultCalc.value.length - 2) == "--" || resultCalc.value.substr(resultCalc.value.length - 2) == "++"){
      resultCalc.value = resultCalc.value.substring(0, resultCalc.value.length - 1);
   }
}
function result(){
   if (eval(resultCalc.value) == undefined){
      resultCalc.value = "Error"
      return
   }
   if (resultCalc.value == "Error"){
      return
   }
   if (eval(resultCalc.value) == Infinity){
      resultCalc.value = "Error"
      return
   }
   resultCalc.value = eval(resultCalc.value)
}
function backspace(){
   if (resultCalc.value == "Error" || resultCalc.value == "Too much"){
      resultCalc.value = ""
   }
   resultCalc.value = resultCalc.value.substring(0, resultCalc.value.length - 1)
}
function reset(){
   resultCalc.value = ''
}