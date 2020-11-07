const output = document.getElementById("output")
const input = document.getElementById("input")
const history = document.getElementById("history")
let arrOut = []
let j = 0

/* нажатия клавиш */
const btns = document.querySelectorAll('.btn')
window.addEventListener('keydown', keyboard)
function keyboard(e){
   const attr = `[data-key="${e.key}"]`
   const key = document.querySelector('button' + attr)
   
   /* оформление нажатия */
   if (key != null){
      key.classList.add("btn-active")
      key.click()
      setTimeout(() => {key.classList.remove("btn-active"); }, 100)
   }

   /* изменение кегеля */
   if (input.value.length >= 15){
      input.classList.add('smallFonts')
   }else{
      input.classList.remove('smallFonts')
   }

   /* деление числа на разряды */
   if (Number(input.value) != '' && input.value != "error"){
      let arr = input.value.split(".");
      arr[0] = arr[0].replace(/\s/g, '');
      arr[0] = parseInt(arr[0]).toLocaleString('ru-Ru');
      input.value = arr.join('.')
   }
}

/* открытие истории + появление кнопки очистки */
$(function(){
   $("#btn-open").on("click touchstart", function(){
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
   (input.value.split(".").length - 1) > 1 ? backspace() : '';
}

function inputSymbol(s){
   if (input.value != 'error'){
      if (j == 2){
         arrOut = []
         arrOut.push(input.value.replace(/\s/g, ''))
         arrOut.push(' ' + s + ' ')
         output.value = arrOut.join('')
         j = 1
      }else if (j == 1 && arrOut[arrOut.length - 1] != s){
         arrOut.pop()
         arrOut.push(' ' + s + ' ')
         output.value = arrOut.join('')
      }else {
         arrOut.push(input.value.replace(/\s/g, ''))
         arrOut.push(' ' + s + ' ')
         output.value = arrOut.join('')
         j = 1
      }
   }
}

function result(){
   if (input.value != "" && input.value != "error" && j != 2){
      /* подсчет */
      let num = eval(output.value + input.value.replace(/\s/g, ''))
      if (num == Infinity){
         output.value = ""
         input.value = "error" 
         return
      }

      /* округление числа */
      if (((num.toString().includes('.')) ? (num.toString().split('.').pop().length) : '') > 6){
         num = num.toFixed(4)
      }else if (((num.toString().includes('.')) ? (num.toString().split('.').pop().length) : '') > 1){
         num = num.toFixed(2)
      }
      
      arrOut.push(input.value.replace(/\s/g, ''))
      arrOut.push(" =")
      output.value = arrOut.join('')
      input.value = num
      j = 2
      
      /* удаление "пустой корзины" и добаление истории */ 
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
   console.log(arrOut)
   
}

function reset(){
   arrOut = []
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