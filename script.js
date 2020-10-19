const output = document.getElementById("output")
const input = document.getElementById("input")
const history = document.getElementById("history")
let j = 0


function inputNumber(i){
   if (input.value.length == 0 && i == "."){
      input.value = "0"
   }
   if (input.value)
   if (j == 1){
      input.value = ""
      j = 0
   }else if (j == 5){
      output.value = ""
      input.value = ""
      j = 0
   }
   input.value += i
}

function inputSymbol(a){
   if (j == 5){
      j = 1
   }
   output.value = input.value + a
   j = 1
}

function result(){
   let num, result;
   if (input.value == " " && output.value == " "){
      input.value = " "
   }

   if (input.value == "error"){
      reset()
      return
   }

   num = eval(output.value + input.value)
   if ((num ^ 0) != num){
      num = num.toFixed(4)
   }

   result = output.value + input.value + "="
   output.value = result
   input.value = num
   j = 5

   if (num == Infinity){
      output.value = ""
      input.value = "error"
   }
   if (input != Infinity || input != "error"){
      let history__result = document.createElement("p");
      history__result.className = "history__result";
      history__result.innerHTML = input.value
      history.prepend(history__result) 
      let history__example = document.createElement("p");
      history__example.className = "history__example";
      history__example.innerHTML = output.value
      history.prepend(history__example)
   }
}

function reset(){
   output.value = ""
   input.value = ""
   j = 0
}

function backspace(){
   input.value = input.value.substring(0, input.value.length - 1)
}

function clearHistory(){
   document.getElementById("history").innerHTML = "";
}

$(function(){
   $("#btn-open").click(function(){
      $("#block-result").toggleClass("block-result-full");
         $("#btn-open").toggleClass("block-result__btn-open-reverse");
            $("#btn-clear").delay(10000);
               $("#btn-clear").toggleClass("block-result__btn-clear-hidden")
   })
})

/* function check(e){
   console.log(e.value)
   
   if((e.which >=48 && e.which <=57) || (e.which >=96 && e.which <=105) || e.which==8 || (e.which >=37 && e.which <=40) || e.which==46) // delete 
   {
       return true;
   } else {
       return false;            
   }		 
}

$("#input").keyup(function(e) {
   if((e.which >=48 && e.which <=57) || (e.which >=96 && e.which <=105) || e.which==8 || (e.which >=37 && e.which <=40) || e.which==46) // delete 
   {
       return true;
   } else {
       return false;            
   }		
}); */


