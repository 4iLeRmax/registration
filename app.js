'use strict'
import { formFilled } from "./modules/formFilled.js";
import { timeConverter } from "./modules/timeConverter.js";

const checkIcon1 = new Vivus(
  'check1',
  {
    type: 'oneByOne',
    duration: 45,
    // delay: 50
  }
);
function playCheck1 (){
  checkIcon1.stop().reset().play();
}

const checkIcon = new Vivus(
  'check',
  {
    type: 'oneByOne',
    duration: 45,
    // delay: 50
  }
);
function playCheck (){
  checkIcon.stop().reset().play();
}

const closeCheckIcon = new Vivus(
  'closeCheck',
  {
    type: 'oneByOne',
    duration: 45,
    reverseStack: true
    // delay: 50
  }
);
function playCloseCheck (){
  closeCheckIcon.stop().reset().play();
}
let cardSignUp = document.querySelector('.card.signUp');
let cardLogIn = document.querySelector('.card.logIn');
let cardCorrect = document.querySelector('.card.correct');
let correctEnter = document.querySelector('.correctEnter');
let errorEnter = document.querySelector('.errorEnter');

let signInputs = document.querySelectorAll('.sign');
let signEmail = document.querySelector('.sign.email');
let signPass = document.querySelector('.sign.pass');
let signEmpty = document.querySelectorAll('.card.signUp .empty');

let loginInputs = document.querySelectorAll('.login');
let loginEmail = document.querySelector('.login.email');
let loginPass = document.querySelector('.login.pass');
let loginEmpty = document.querySelectorAll('.card.logIn .empty');

let eye = document.querySelectorAll('.password img');
let link = document.querySelectorAll('.link');
let close = document.querySelectorAll('.close');


let userBtn = document.querySelector('.account__btn');
let registrationWrap = document.querySelector('.registration__wrap');
userBtn.onclick = ()=>{
  // if(){//Если не авторизован то...
  registrationWrap.classList.remove('hide');
  cardSignUp.classList.remove('hide');
  // }
  // else if(){  // Если авторизован то..

  // }
}
// registrationWrap.onclick = ()=>{
//   registrationWrap.classList.add('hide');
// }
const closeCard = ()=>{
  for(let i=0; i<close.length; i++){
    close[i].onclick = ()=>{
      document.querySelector('.registration__wrap').classList.add('hide');
    }
  }
}
closeCard();


let inputs = document.querySelectorAll('.form__input');
for(let i=0; i<inputs.length; i++){
  let empty = document.querySelectorAll('.empty');
  inputs[i].onfocus = ()=>{
    if(!inputs[i].classList.contains('active') && !empty[i].classList.contains('active')){
      inputs[i].classList.add('active');
      empty[i].classList.add('active');
    }
  }
  inputs[i].onblur = ()=>{
    if(inputs[i].value == ''){
      if(inputs[i].classList.contains('active') && empty[i].classList.contains('active')){
        inputs[i].classList.remove('active');
        empty[i].classList.remove('active');
      }
    }
  }
  inputs[i].oninput = ()=>{
    if(inputs[i].classList.contains('error') && empty[i].classList.contains('error')){
      inputs[i].classList.remove('error');
      empty[i].classList.remove('error');
    }
  }
}


const checkPassword = ()=>{
  for(let i=0; i<eye.length; i++){
    eye[i].onclick = ()=>{
      let input = document.querySelectorAll('.pass');
      if(input[i].getAttribute('type') == 'text'){
        input[i].setAttribute('type', 'password');
      }
      else if(input[i].getAttribute('type') == 'password'){
        input[i].setAttribute('type', 'text');
      }
    }
  }
}
checkPassword();







const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application.json; charset=utf-8',
    },
    body: data,
  });
  return await response.json();
}
const sendCart = () => {
  const cartForm = document.querySelector('.form.form__signUp');
  cartForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(cartForm);
    const data = {};

    // console.log(formFilled());
    // console.log(formFilled(signInputs,signEmail,signPass,signEmpty));

    if(formFilled(signInputs,signEmail,signPass,signEmpty) === true){
      for(const[key, value] of formData){
        data[key] = value.trim();
      }
      let time = timeConverter(new Date());
      data.time = time;
      // console.log(data);
      sendData('https://github.com/4iLeRmax/registration/index2.php', JSON.stringify(data))
      .then(()=>{
        cartForm.reset();
      })
      .catch((err)=>{
        console.log(err);
      });
      cardSignUp.classList.add('hide');
      cardCorrect.classList.remove('hide');
      setTimeout(() => {
        // console.log('interval');
        cardCorrect.classList.add('hide');
        cardLogIn.classList.remove('hide');
      }, 3000);
      signEmail.value = '';
      signPass.value = '';
      for(let i=0; i<signInputs.length; i++){
        signInputs[i].classList.remove('active');
        signEmpty[i].classList.remove('active');
      }
      playCheck1();


    }
    // else if(formFilled(signInputs,signEmail,signPass)===false){}

  })


}
sendCart();



const correctVerification = ()=>{
  cardLogIn.classList.add('hide');
  correctEnter.classList.remove('hide');
  setTimeout(() => {
    correctEnter.classList.add('hide');
    document.querySelector('.registration__wrap').classList.add('hide');
    console.log('next page');
  }, 1500);
  setTimeout(() => {
    // window.location.href = 'https://www.youtube.com/';
  }, 1000);
  loginEmail.value = '';
  loginPass.value = '';
  for(let i=0; i<loginInputs.length; i++){
    loginInputs[i].classList.remove('active');
    loginEmpty[i].classList.remove('active');
  }
  playCheck();
}
const wrongVerification = ()=>{
  cardLogIn.classList.add('hide');
  errorEnter.classList.remove('hide');
  setTimeout(() => {
    // console.log('interval');
    errorEnter.classList.add('hide');
    cardLogIn.classList.remove('hide');
  }, 1500);
  loginEmail.value = '';
  loginPass.value = '';
  for(let i=0; i<loginInputs.length; i++){
    loginInputs[i].classList.remove('active');
    loginEmpty[i].classList.remove('active');
  }
  playCloseCheck();
}

const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`ERROR URL, ${url}, status: ${response.status}`);
  }
  return await response.json();
};
const dataComapre = ()=>{
  const cartForm = document.querySelector('.form.form__logIn');
  cartForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(cartForm);
    const data = {};
  
    console.log(formFilled(loginInputs,loginEmail,loginPass,loginEmpty));
    if(formFilled(loginInputs,loginEmail,loginPass,loginEmpty) === true){
      for(const[key, value] of formData){
        data[key] = value.trim();
      }
      getData('new.json')
      .then(json=>{
        console.log(data);
        let bool;
        for(let item of json){
          if(data.mail === item.mail && data.password === item.password){
            bool = true;
            break;
          }
          else{
            bool = false;
          }
        }
        console.log(bool);
        if(bool === true){
          correctVerification();
        }
        else if(bool === false){
          wrongVerification();
        }
      });
    }
  });
}
dataComapre();



const linkCard = ()=>{
  for(let i=0; i<link.length; i++){
    link[i].onclick = (e)=>{
      console.log(link[i].textContent);
      if(link[i].textContent == 'Есть аккаунт'){
        IHaveAccount();
      }
      if(link[i].textContent == 'Нет аккаунта?'){
        IDontHaveAccount();
      }
    }
  }
}
linkCard();
const IHaveAccount = ()=>{
  cardSignUp.classList.add('hide');
  cardCorrect.classList.add('hide');
  signEmail.value = '';
  signPass.value = '';
  for(let i=0; i<signInputs.length; i++){
    signInputs[i].classList.remove('active');
    signEmpty[i].classList.remove('active');
  }
  cardLogIn.classList.remove('hide');
}
const IDontHaveAccount = ()=>{
  cardLogIn.classList.add('hide');
  cardCorrect.classList.add('hide');

  loginEmail.value = '';
  loginPass.value = '';

  for(let i=0; i<loginInputs.length; i++){
    loginInputs[i].classList.remove('active');
    loginEmpty[i].classList.remove('active');
  }
  
  cardSignUp.classList.remove('hide');
}

