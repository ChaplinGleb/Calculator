const resultHistory = document.getElementById("result-history")
const resultResult = document.getElementById("result-result")
const historyOutput = document.getElementById("history")
let j = 0


function inputNumber(i){
   if (resultResult.value.length == 0 && i == "."){
      resultResult.value = "0"
   }
   if (resultResult.value)
   if (j == 1){
      resultResult.value = ""
      j = 0
   }else if (j == 5){
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
   let num, result;
   if (resultResult.value == " " && resultHistory.value == " "){
      resultResult.value = " "
   }

   if (resultResult.value == "error"){
      reset()
      return
   }

   num = eval(resultHistory.value + resultResult.value)
   if ((num ^ 0) != num){
      num = num.toFixed(2)
   }

   result = resultHistory.value + resultResult.value + "="
   resultHistory.value = result
   resultResult.value = num
   j = 5

   if (num == Infinity){
      resultHistory.value = ""
      resultResult.value = "error"
   }
}

function reset(){
   resultHistory.value = ""
   resultResult.value = ""
   j = 0
}

function backspace(){
   resultResult.value = resultResult.value.substring(0, resultResult.value.length - 1)
}
document.getElementById("result-result").onkeydown = function(e){
   if((e.which >=48 && e.which <=57) || (e.which >=96 && e.which <=105) || e.which==8 || (e.which >=37 && e.which <=40) || e.which==46) // delete 
   {
       return true;
   } else {
       return false;            
   }		 
}
