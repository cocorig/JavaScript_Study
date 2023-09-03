// 'use strict';인 경우에는 this는 undefined

// function a(){
//   console.log(this);// window를 가리킴
// }
// a();


// ES2015 모듈에선 strict 모드가 자동 적용됨
//  js -> window , globalThis
//  node ->global , globalThis

//  this가 바뀔때

const obj = {
  name : 'hayeon',
  sayName(){
      console.log(this.name)
  }
};

obj.sayName(); // hayeon ,이때의 sayName의 함수의 this는 obj의 name을 가리킴
// window.name = ''
const sayN =  obj.sayName;// 함수 앞에 객체가 붙으면 this는 그 객체가 된다. sayN에 sayName함수를 대입하면? ' '
console.log(sayN); // [Function: sayName]


// this는 함수가 호출될 때 정해짐 -> 함수가 호출되는데 this가 특별한 동작을하는게 없다? 그럼 this는 기본적으로 window



//  생성자 함수 
function Human(name){
  this.name =  name;
}

console.log(new Human('hayeon')); 
// Human { name: 'hayeon' }




// this는 window전역인데 가 바뀌는 경우 정리!!!! (렉시컬 스코프와 달리 함수 호출에 따라 달라짐)
// 0.  'use strict';인 경우에는 this는 undefined
// 1. 앞에 객체가 붙어서 호출하는 경우, 객체의 메서드를 호출하는 경우(this-> 그 객체) 
  // object.method()
// 2. new가 붙어서 호출하는경우(자기 자신)
  //  new ()
// 3. this를 직접적으로 바꿔주는 경우(bind , apply , call)
  // sayname.bind({name : 'hayeon'})() -> 함수를 새로 만드는 bind, 호출식을 따로 써줘야함

  // sayname.apply({name : 'hayeon'}) // 바로 호출하는 함수

  // sayname.call({name : 'hayeon'})
// 4. 화살표 함수의 this
  //부모의 스코프(선언)를 가리킴  
// 5. 함수 호출시 this를 바꿔주는 행동을 했나 안했나 확인




  // 여기서 퀴즈!   // inner에 대한 스코프체인은? (obj는 무시 함수의 선언만 봄)
  // inner -> sayName -> anonymous
// 스코프 체인을 알아야 하는 이유? 이 inner함수에서 변수에 접근 가능한지 알기위해

// const obj1 = {
//   name : 'hayeon',
//   sayName(){
//     console.log(this.name);  // 'hayeon'  , 1번 경우에 해당 , onj1.sayName()
//     function inner(){
//       console.log(this.name);
//     }
//     inner(); //호출시 this바꿔주는 행동을 x -> 여기서 this는 window를 가리킴
    
//   }
// }
// console.log(obj1.sayName());


//  inner함수가 화살표 함수일 때
const obj1 = {
  name : 'hayeon',
  sayName(){
    console.log(this.name); // hayeon 
    const inner = () => { // inner가 화살표 함수니까 부모함수의 this를 바로 가져옴, this는 호출할 때 판단해야함.
      console.log(this.name); 
    }
    inner();
  }
}
obj1.sayName() //  this는 호출할 때 판단해야함.

const sayName =  obj1.sayName;
sayName() // window를 가리킴

// 화살표함수의 this를 보려면 부모함수의 this를 봐야하는데, 부모함수가 어떻게 호출됐는지를 봐야한다.
// obj.sayName을 호출하니까 this -> 그 객체 ,  sayName의 this는 hayeon
// 위의 예제에선 inner의 부모함수는 sayName()
// 정리 : 어떻게 호출됐는지 봐야지 sayName의 this가 정해지고 inner(화살표 함수)의 this도 같이 정해진다.