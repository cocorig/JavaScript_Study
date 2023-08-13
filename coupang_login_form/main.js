// 1.이메일 로그인, QR코드 로그인 버튼 클릭시 active 클래스 toggle
// 2. 문자 숨기기 버튼 토글 ->  이미지 변경
// 3. 아이디, 비번 오류메세지 토글
const fieldset =  document.querySelector('fieldset');
const tab_email =  document.querySelector('.tab_email');
const tab_qr = document.querySelector('.tab_qr');
const pw_show_hide = document.querySelector('.pw_show_hide span');
const input_wrap_id = document.querySelector('.input-wrap.id');
const input_wrap_pw = document.querySelector('.input-wrap.pw');
const id_error =  document.querySelector('.id_error');
const pw_error =  document.querySelector('.pw_error');

tab_qr.addEventListener('click',()=>{
  tab_qr.classList.toggle('active');
  tab_email.classList.remove('active');
  fieldset.style.display = 'none';
})
tab_email.addEventListener('click',()=>{
  tab_email.classList.toggle('active');
  tab_qr.classList.remove('active');
  fieldset.style.display = 'block';
})



let show_hide = true;

pw_show_hide.addEventListener('click',()=>{
  if(show_hide){
    console.log(pw_show_hide.style.backgroundPosition );
    pw_show_hide.style.backgroundPosition = '-127px -1px';
    show_hide = false;
  
  }else{
    pw_show_hide.style.backgroundPosition = ' -106px -1px';
    show_hide = true;
  }
  
})

input_wrap_id .addEventListener('click',()=>{
  id_error.style.display = 'block';
  input_wrap_id.classList.add('error-border');
})
input_wrap_pw.addEventListener('click',()=>{
  pw_error.style.display = 'block';
  input_wrap_pw.classList.add('error-border');
})