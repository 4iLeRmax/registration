export function formFilled(inputs, mail, pass, empty){
  let bool = true;
  // как зарегистрироватся с помощью гугл или бук
  for(let i=0; i<inputs.length; i++){
    if(inputs[i].value == ''){
      bool = false;
      inputs[i].classList.add('error');
      empty[i].classList.add('error');
      // console.log(inputs[i]);
      // console.log(empty[i]);

      // return false;
    }
    else if(inputs[i].value !== ''){
      bool = true;
      // console.log('2');
    }
  }
  let strMail = mail.value;
  let strPass = pass.value;
  if(bool = true){
    if(strMail.length>=6 && strMail.length<=40 && strMail.includes('@') && strMail.includes('.')){
      if(strPass.length>=8 && strPass.length<=128 && /[a-z]/.test(strPass) && /[A-Z]/.test(strPass) && !/ /.test(strPass) && /[0-9]/.test(strPass)){
        bool = true;
      }
      else{
        bool = false;
        console.log('error pass');
        inputs[1].classList.add('error');
        empty[1].classList.add('error');
      }
    }
    else{
      bool = false;
      console.log('error mail');
      inputs[0].classList.add('error');
      empty[0].classList.add('error');
      // console.log(empty[0]);
    }
  }
  return bool;
}