const resultCalc = document.getElementById("box_result")
const historyOutput = document.getElementById("history")
let i = 0
function input(i){
   if (resultCalc.value.length > 11){
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
   let item, p
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
   if (resultCalc.value != eval(resultCalc.value)){
      item = resultCalc.value + '=' + eval(resultCalc.value)
   }
   resultCalc.value = eval(resultCalc.value)
   if(item != undefined){
      p = document.createElement('p')
      p.className ='history-list_item'
      p.innerHTML = item
      if (i <= 11){
         historyOutput.prepend(p)
         ++i
      }else {
         historyOutput.removeChild(historyOutput.lastChild);
         historyOutput.prepend(p)
      }
   }
}
function backspace(){
   if (resultCalc.value == "Error" || resultCalc.value == "Too much"){
      resultCalc.value = ""
   }
   resultCalc.value = resultCalc.value.substring(0, resultCalc.value.length - 1)
}
function reset(){
   resultCalc.value = ""
}

$(document).ready(function(){
   $("#openHistory").click(function(){
      $("div.history").toggleClass("history_left")
         $("#openHistory").toggleClass("btn-history-rotate")
   });
})
