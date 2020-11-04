const output = document.getElementById("output")
const input = document.getElementById("input")
const history = document.getElementById("history")
let j = 0

/* keyboard taps */
const btns = document.querySelectorAll('.btn')
window.addEventListener('keydown', keyboard)
function keyboard(e){
   const attr = `[data-key="${e.key}"]`
   const key = document.querySelector('button' + attr)
   if (key != null){
      key.classList.add("btn-active")
      key.click()
      setTimeout(() => {key.classList.remove("btn-active"); }, 100)
   }
   if (input.value.length >= 15){
      input.classList.add('smallFonts')
   }else{
      input.classList.remove('smallFonts')
   }
   
   if (Number(input.value) != ''){
      let arr = input.value.split(".");
      arr[0] = arr[0].replace(/\s/g, '');
      arr[0] = parseInt(arr[0]).toLocaleString('ru-Ru');
      input.value = arr.join('.')
   }

}

/* open history and show trashbox */
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

function inputNumber(i){
   input.value.length == 0 && i == "." ? input.value = "0" : '';
   if (input.value != 'error'){ 
      if (j == 1){
         input.value = ""
         j = 0
      }else if (j == 2){
         output.value = ""
         input.value = ""
         j = 0
      }
      input.value.length < 18 ? input.value += i : '';
   }
}

function inputSymbol(a){
   if (input.value != 'error'){
      j == 2 ? j = 1 : '' ;
      output.value += ' ' + input.value.replace(/\s/g, '') + ' ' + a
      j = 1
   }
}

function result(){
   if (input.value != "" && input.value != "error" &&  input.value != 0){
      /* calculating */
      let num = eval(output.value + input.value.replace(/\s/g, ''))

      /* check and handling long numbers */
      if (((num.toString().includes('.')) ? (num.toString().split('.').pop().length) : '') > 6){
         num = num.toFixed(4)
      }else if (((num.toString().includes('.')) ? (num.toString().split('.').pop().length) : '') > 1){
         num = num.toFixed(2)
      }

      output.value += ' ' + input.value.replace(/\s/g, '') + " ="
      input.value = num
      j = 2

      /* delete image with title of empty history and add result to history */      
      $(function(){   
         $('.history__title').remove();
         $('.history__img').remove();
      });
      let history__example = document.createElement("p");
      history__example.className = "history__item2";
      history__example.innerHTML = Number(input.value).toLocaleString('ru-Ru');
      history.prepend(history__example)
      history__example = document.createElement("p");
      history__example.className = "history__item1";
      history__example.innerHTML = output.value
      history.prepend(history__example)
   }else{
      output.value = ""
      input.value = "error"
      return
   }
}

function reset(){
   output.value = ""
   input.value = ""
   j = 0
}

function backspace(){
   input.value == 'error' ? reset() : '';
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