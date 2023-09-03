// 함수와 함수의 호출의 차이, 고차함수

// 함수의 선언문
// const add =  (a,b) => (a + b);
const add = (a,b) => {
  return a + b;
}
// const add =  () =>{
//   a +  b
// } 함수의 내부
// const add = ( {a +  b}) // 객체를 리턴

// 함수의 선언문
function calculator(func , a , b){
  return func(a, b);
}
// console.log(add(3,5)); // 8
// 함수의 호출
console.log(calculator(add() , 3, 5)); //함수의 호출과 함수를 헷갈리지 말자
document.querySelector('#header').addEventListener('click', add());
// undefined + undefined로 출력 

//고차함수(함수 안에서 다른 함수를 리턴하는 함수)
// 호출을 보면 그 함수의 리턴 값으로 그냥 바꿔준다고 생각하면 된다.

//  함수의 선언문
const onClick = () => {

  return () => {
    console.log('Hi');
  };
}
// 함수의 호출은 리턴 값으로 바로 대체됨   

//  함수의 호출
document.querySelector('#header').addEventListener('click', onclick());                                               
document.querySelector('#header').addEventListener('click',
() => {
  console.log('Hi');
});         


//  react 예제

import {useCallback} from  'react';

export const App = () => {
  const onClick = useCallback((e)=>{
    console.log(e.target);
  }, []);

  return (
    <div onClick = {onClick}></div>
    // <div onClick = {onClick()}></div>
    // <div onClick = {(e)=>{
    //   console.log(e.target);
    // }}></div>
    // <div onClick = {undefined}></div>
  )
}

