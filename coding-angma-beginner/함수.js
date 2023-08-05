// 함수 선언 방식
//function 함수명(파라미터,매개변수,인수){
  // console.log(값)
// }
// 함수명(아규먼트, 실제 값)

//1. 매개변수가 없는 함수
function showError(){
  console.log('에러 발생 , 새로고침');
}

showError();
showError();
showError();


//2. 매개변수가 있는 함수

function sayHello(name){
  console.log(name) //파라미터가 없을 때, undefined
  let msg = `Hello`; // 지역변수 , 함수 안에서만 사용가능
  if(name){
    msg += `, ${name}!`;
  }
  console.log(msg);
}
sayHello();
sayHello('hayeon');
// console.log(msg) ReferenceError: msg is not defined

console.log('----------------------');



let msg = 'Bye'; // 외부 변수 , 전역 변수
console.log('함수 호출 전');
console.log(msg);

function sayBye(name){
  console.log('함수 내부');
  msg += `, ${name}`
  console.log(msg);
}

sayBye('hayeon');
console.log('함수 호출 후');
console.log(msg);

console.log('---------------------');
//전역 변수와 지역 변수가 같은 변수 명을 가져도 관계 없음 

let massge =  'welcome'; // 전역 변수
console.log(massge); //welcome

function sayWelcome(name){
  let massge = 'Bye'; //지역 변수
  console.log(`${name} ,${massge}`); // hayeon ,Bye
}

sayWelcome('hayeon');
console.log(massge); //Welcome

//공통으로 바라봐야하는 변수를 제외하고 , 지역변수를 사용하는 습관을 들이자
//전역변수가 많아지면 관리가 힘들어짐


// OR 사용
function sayHello(name){

  let msg = `Hello`; // 지역변수 , 함수 안에서만 사용가능
  if(name){
    msg += `, ${name}!`;
  }
  console.log(msg);
}
sayHello();
sayHello('hayeon');
// console.log(msg) ReferenceError: msg is not defined