//객체, this
//method : 객체 프로퍼티로 할당 된 함수
// fly가 superman의 method
const superman = {
  name : 'Superman',
  age : 26,
  fly(){
    console.log('날아갑니다');
  }
}
console.log(superman.fly());

let user = {
  name : '하연',
  sayHello( ){
    console.log(`Hello, I'm ${this.name}`);
  }
}       // user가 this가 된다!
console.log(user.sayHello());

//화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
//화살표 함수 내부에서 this를 사용하면 , 그 this는 외부에서 값을 가져 옴
let boy = {
  name : 'John',
  sayHello :  ()=>{
    console.log(this); // 전역객체를 가리킴  -> ㅡ브라우저 환경에선 window ,  node -> global
  }
}
boy.sayHello();
//this != boy


// 예제

let man = user; //객체에 user로도 접근할 수 있고, man으로도 접근 할 수 있다.
user =  null; 
man.sayHello();
console.log(man.name); // 메소드에서는 this를 활용하는게 좋음