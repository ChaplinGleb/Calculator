const resultHistory = document.getElementById("result-history")
const resultResult = document.getElementById("result-result")
const historyOutput = document.getElementById("history")
let j = 0

function inputNumber(i){
   if (j != 0){
      resultResult.value = ""
      j = 0
   }
   resultResult.value += i
}

function inputSymbol(a){
   resultHistory.value = resultResult.value + a
   ++j
}

function result(){
   let num, result 
   num = resultHistory.value + resultResult.value
   num = eval(num)
   result = resultHistory.value + resultResult.value + "="
   resultHistory.value = result
   resultResult.value = ""
   resultResult.value = num
   ++j
}
function reset(){
   resultResult.value = ""
   resultHistory.value = ""
   j = 0
}