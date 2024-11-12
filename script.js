// select dom elms 
const buttons = document.querySelectorAll(".calculator button");
const showInputElm = document.querySelector('.show_inputs');
const resultElm = document.querySelector('.result_elm');

let chars = ['%', '/', '*', '+', '-', '=']; // for checking and stop enter operator
let btnValues = '';

buttons.forEach((button)=>{
     button.addEventListener("click", (e)=>{
          let btnCurValue = e.target.innerText; // take current value

          if(btnCurValue === "=" && btnValues !== ""){
               resultElm.innerText = eval(btnValues.replace('%', '/100*')); // calculate
          }else if(btnCurValue === "C"){  // all clear 
               btnValues = '';
               resultElm.innerText = '0';
          }else if(btnCurValue === "del"){  // one character delete 
               btnValues = btnValues.slice(0, btnValues.length-1).replace('del', '');
          }else {
               if(btnValues === '' && chars.includes(btnCurValue)) return; // if input empty and enter operator then  will not be input
               btnValues += e.target.innerText; // take all value
          }
          showInputElm.innerText = btnValues; // show the result on dom 
     });
});