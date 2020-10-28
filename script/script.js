const output = document.getElementById("output")
const input = document.getElementById("input")
const history = document.getElementById("history")
let j = 0


function inputNumber(i){
   if (input.value.length == 0 && i == "."){
      input.value = "0"
   }
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
   if (input.value != "" && input.value != "error"){
      let num, result;

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
      
      $(function(){   
         $('.history__title').remove();
            $('.history__img').remove()
      });
      let history__example = document.createElement("p");
      history__example.className = "history__item";
      history__example.innerHTML = output.value +  + input.value
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
   let h = document.getElementById("history")
   h.innerHTML = ""
   h = document.createElement("img")
   h.className = "history__img"
   h.setAttribute("src", "/History.png")
   history.append(h)
   h = document.createElement("p")
   h.className = "history__title"
   h.innerHTML = "There's no history yet"
   history.append(h)
}

$(function(){
   $("#btn-open").click(function(){
      $("#block-result").toggleClass("block-result-full");
      $("#btn-open").toggleClass("block-result__btn-open-reverse");
      let height = $("#block-result").height()
      if (height == 100){
         $("#btn-clear").fadeIn()
      }
      if (height > 500){
         $("#btn-clear").fadeOut()
      }
      
         
   })
})

