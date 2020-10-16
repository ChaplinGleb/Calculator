const resultHistory = document.getElementById("result-history")
const resultResult = document.getElementById("result-result")
const historyOutput = document.getElementById("history")
let j = 0

function inputNumber(i){
   if (j == 1){
      resultResult.value = ""
      j = 0
   }
   if (j == 5){
      resultHistory.value = ""
      resultResult.value = ""
      j = 0
   }
   resultResult.value += i
}

function inputSymbol(a){
   if (j == 5){
      j = 1
   }
   resultHistory.value = resultResult.value + a
   j = 1
}

function result(){
   let num, result 
   num = resultHistory.value + resultResult.value
   num = eval(num)
   result = resultHistory.value + resultResult.value + "="
   resultHistory.value = result
   resultResult.value = ""
   resultResult.value = num
   j = 5
}
function reset(){
   resultResult.value = ""
   resultHistory.value = ""
   j = 0
}
function backspace(){
   
}