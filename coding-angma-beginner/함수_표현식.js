
//차이점 : 호출 타이밍
// 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 생성해놓음 -> 선언된 함수 모임 
// 함수의 사용 범위는 코드 위치보다 위로 올라감 -> 호이스팅
//함수 선언문 : 어디서든 호출 가능 , 더 자유로움
sayHello();

  function sayHello(){
  console.log('Hello');
}


// 함수 표현식 : 코드에 도달하면 생성

// ... 1
// ... 2
let sayHello1 = function(){  // 3 -> 생성
  console.log('Hello');  
}
sayHello1();



//화살표 함수
// let add = function(num1 , num2){
//   return num1 + num2;
// }

let add = (num1, num2) => (
  num1 + num2
)
// let add = (num1, num2) => num1 + num2;
//{ return  num1 + num2 } ->  ( num1, num2 );
add(1,2);


let ShowError =  () => {
  console.log('error');
}

ShowError();

const sayHello2 =  (name = 'friend') => {
  const msg = `Hello ${name}`;
  console.log(msg);
}
sayHello2();
sayHello2('hayeon');

// { return }
const add3 = (num1, num2) =>{
  const result = num1 + num2;
  return result;
}
// return없이 ()
const add4 = (num1, num2) =>(
      num1 + num2
)
console.log(add4(1,6));