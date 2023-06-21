


#  📒 Vanilla javascript 연습장 📔

## const and let


const a = 5;
const b = 10;
b  = 2; //error: Uncaught TypeError: Assignment to constant variable. const 는 업데이트 xx
let  myName =  'foo';
myName = 'hayeon'; //let 은 업데이트 가능
console.log(a + b);
console.log( 'hello '+ myName);

const ,let 변수할당에 대해 코드를 보고 작성저의 의도를 알수있다.
기본적으로 const사옹하고 변수를 업데이트하고싶다면 let ,하지만 중요한 몇몇만 업데이트 하기때문에 필요할때만 let을 쓰자.
항상 const , 가끔 let, var 노노!

## Booleans

const amIFat = null;
let someTing;
console.log(amIFat); //null
console.log(someTing); //undefined


null은  아무것도 없는 값,비어있는게 아니라 아무것도 없는값,의도적으로 표현,자연적으로 발생하지 않는것 ,변수 안에 어떤것이 없다는 것읗 확실히 하기위해 씀 
undefined은 변수는 존재하는데 정의되지 않음,메모리 안에는 공간은 았지만, 값이 들어가지 않는상태.

## Arrays


array를 쓰는 목적 : 하나의 varialbe 안에 데이터의 list를 가지는것
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday" ,"Friday" ,"Saturday"];

//GET Item from Array 

console.log(daysOfWeek[4]);

//Add one more day to ten array

daysOfWeek.push("Sunday");

console.log(daysOfWeek);
console.log(daysOfWeek[2435435]); //undefined 해당 인덱스가없음

## Objects

const playerName = 'hayeon';
const playerScore = 1000;
const playerAge = 26;

 const player = ['hayeon', 1000, 26];
 이 경우 array는 1212, 26이게 무슨 의미인지 알려주지 않음. 의미를 얻을수없다.
오브젝트는 속성을 가진 데이터를 저장하도록 해주기때문에 배열과 차이가 있다. -> 설명이 필요할때, property가 있어야할때 배열은 이 자체로 무슨의미인지 알지못한다. 
const player = {

    name: 'hayeon',
    ponints : 1000,
    age : 26,
    
}
console.log(player.name);
console.log(player['name']); //위의 결과 랑 동일

player.age =  20; //object안의 무언가를 수정하는 건 괜찮 
console.log(player.age); // 20 ,constant로 정의했는데 값이 업데이트되었네??
//player 자체를 바꾸려면 오류! , player언의 값은 바꿀수있다.
//const 전첼를 하나의 값으로서 업데이트 하려고 할 떼 에러발생!! 
//player =  false; 에러

player.myFats = 'cat';  //추가 가능
console.log(player);
//{name: 'hayeon', ponints: 1000, age: 20, myFats: 'cat'}


## Function
 
코드를 캡슐화해서 실행을 여러 번 할 수있게 한다. 반복해서 재사용할수있다.

function myDream(name,dream){ // 데이터 받음~~(Parameters)
 

    console.log(`${name}은 ${dream}가 되고 싶습니다!`)

    console.log (`${name}은 자바스크립트를 잘 하고 싶습니다!`);
    
}

myDream('이하언','frontend developer') //데이터 보냄~~ (Arguments)
//console.log(name,dream) Uncaught ReferenceError: a is not defined => a는 블록 밖에서 존재xx
//Arguments: 함수 호출 시 전달되는 값들을 의미, Parameters: 함수의 인수를 받는 변수, 함수 정의에서 사용되는 변수들을 의미

function plus(a,b){
    console.log(a + b)
}
plus()//console.log(a, b)일때 undefined undefined 값이 정의되어있지 않으니까,(a + b)일때 NaN(숫자가 아님) 연산 +를 지만 아무값이 x
plus(1,2)
plus('1','2') //12

const player = {// 객체에서도 함수 사용 
    name: '이하연',
    dream: '개발자',
    seyHello : function(otherName){
        console.log(`Hello! ${otherName} nice to meet you!`);
    },

};

player.seyHello('현상');
player.seyHello('니꼴라');


## Return 

const age = 98;  
function calulataKrAge(ageOfForeigner){ //2. 98을 파라미터로 받음
    return  ageOfForeigner + 2;  // 3. return 98 + 2 를  리턴
    //nction이 function의  밖과 소통하는 방법
}
const krAge = calulataKrAge(age); //1,calulataKrAge호출되면 98이라는 인수가 age로 들어옴
        //4. return 을 함으로써 function을 호춯하는 코드가 100이 됨
const calulator = {

    plus : function (a,b){
        return (a + b) ; // 질문의 답이 필요, return 되는 순간 함수는 종료 
        
    },
    sub :  function (a,b){
        return ( a - b);
    },
    mul :  function (a,b){
        return ( a * b);
    },
    div :  function (a,b){
        return ( a / b);
    },
    mod :  function (a,b){
        return (a % b );
    }
};
//return 결과를 변수에 할당,내가 정한 변수는 함수의 결과 type을 가지게 되고,함수의 return 값을 가진다
    const plusResult = calulator.plus(1,3); //4
    const subResult = calulator.sub(5,plusResult); //1
    const nulResult = calulator.mul(5,subResult); //5
    const divResult = calulator.div(2,plusResult); //0.5
    const modResult = calulator.mod(2,divResult);//0


    console.log(plusResult,subResult,nulResult,divResult,modResult)


    
## Conditional

const age = parseInt(prompt('How old are you?'));

//string => number ,문자만 입력하면 NaN

//1. age가 number 이고 18이하면 음주 할 수 없음
//2 18이상~50이하면 음주할수있다.
//3. 50이상으면 경고문


if(isNaN(age) || age <  0){ 
    console.log('Please enter a number'); //age가 NaN이거나 age가 0보다 작을때
}else if(age >= 18 &&  age <= 50 ){ 
    console.log('you can drink');//age가 NaN이 아니면 실행 (18 <= age <=50)을때
}else if(age > 50 && age <=80){ //(50 < age <= 80)

    console.log("You should exercise");

}else if(age === 100){ // (age === 100) 순서 중요! 위에서부터 아래로 실행되기때문에 age가 80이상 밑에 쓰면  age가 80보다 크기때문에 'you can do' 실행됨
    console.log('you are a wise');

}else if(age > 80){ // (age > 80)
    console.log('you can do ')
}

if(( a && b) || ( c && b) ||( x || y)){ //ture일떼 실행 

}

------

# JAVASCRIPT ON THE BROWSER

### The Document Object

document는 내가 접근할 수 있는 html을 가리키는 객체(object), 내 웹사이트를 가리킴! 
브라우저가 html정보가 아주 많이 들어있는 document라는 객체를 전달해주는것.
javascript에서 html을 읽어올 뿐 아니라 html을 변경할 수도 있다.
console.dir(); // elementㄴ를 더 자세히 볼수있음
###  HTML in Javascript

title.textContent => title안에 들어있는 값
innerText 
innerHTML 

###  Searching For Elements 


//const title= document.getElementsByTagName('h1'); //h1태그를 모두 가져와라 ,HTMLCollection [h1] 결과값이 h1태그가 담긴 배열임
const title =  document.querySelector('.hello h1:first-child');//hello라는 클래스네임을 태그안에 h1태그를 가져와라,<h1>Grab me!</h1> hello가 여러개라도 첫번쩨 element만 가져온다,
//const titie = document.getElementsByClassName('hello')//클래스네임을 찾는거니까 querySelector와 다르게 앞에 . 을 안붙혀도된다!
const titles =  document.querySelectorAll('.hello h1'); //모두 다 가져와서 배열에 저장
title.innerText = 'Got you!!'; //첫번째 h1만 Got you!!
console.log(title); //<h1>Grab me!</h1> 
console.log(titles);//NodeList(3) [h1, h1, h1],h1이 들어있는 배열을 가져옴,조건에 부합하는 모든 element를 가져다줌

### Events 

const title =  document.querySelector('.hello') //css selector
const btn = document.querySelector('.btn');
console.dir(title.style); //js object를 보여줌,js object의 property값들을 변경할 수 있음.

//innerHtml : <h1>Grab me!!!</h1>    <h2>Got you!!</h2> 안에 들어있는 html태그,
요소 콘텐츠의 마크업을 나타내는 문자열입니다.
//innerText : "Grab me!!! Got you!!"안에들아있는 text들
//nodeName: 'DIV' //태그 이름
//textContent :"Grab me!!!  Got you!! "
//eventListener는  말 그대로 event listen하는것.
function handleClick() {
    console.log('click');
    title.style.color = 'red' ;
}
btn.addEventListener('click',handleClick) //click 이벤트가 발생할시 실행할 함수를 전달해줄것 괄호(실행버튼)는 넣지말아야한다!
//원래 function을 실행하랴면 handleClick()을 해줘야하는거 아니야?
//나는 버튼이 클릭되면 실행하고싶은거, 바로 실행하고싶지않아서 function이름만 넘겨주고 clcik을 할 경우 js기 니 대신 버튼을 눌러줌!
//btn.addEventListener('click',handleClick()) 이렇게 할 경우 바로 함수가 실행됨


### events



//우리가 하는건 javascript로 html element를 가져오고 가져온 element를 event listener애 추가해준것!


### CSS in Javascript 


#### 버튼을 클릭했을때 h1 태그의 color를 바꾸고 싶다!


#### 1. className으로 
html코드
<div class="title">
    <h1 class="sexy-font">javascript is fun!!</h1>
    <h1>javascript is fun!!!!</h1>
</div>
<button class="btn" >클릭</button>


css코드
.sexy-font{
    font-family: 'Ubuntu', sans-serif;
}
.clicked{
    color:tomato;
}

js코드
btn.addEventListener('click', () => {
  
    const clickedClass = 'clicked';
    if(h1.className === clickedClass){ //h1태그 classname이 clicked면 classname을 없애라!
      h1.className = '';

    }else{ //clicked가 없다면 classname을 추가한다!
      h1.className = clickedClass;
    }

    });
className으로 clicked를 추가하면 이전에 있던 class들은 상관하지않고 교체해버린다
기존의 class를 그냥 없애버림!

#### classList

classList는 class들의 목록으로 작업할 수있게끔 허용해줌
btn.addEventListener('click', () => {
  
  // //h1.classList.toggle('clicked');
  const clickedClass = 'clicked';
  if( h1.classList.contains(clickedClass)){ //contains( 'clicked' ) h1의 class속성이 존재하는지 확인

        h1.classList.remove(clickedClass); //clicked이 있다면 클래스 값을 제거한다.
  }else{
        h1.classList.add(clickedClass);  //clicked이 없다면 클래스 값을 추가한다.
  } 


    });

className과 달리 기존의  클래스가 사라지지않고 clicked클래스만 제거,추가된다.
기존의 스타일과 classname을 가져갈 수 있다.


#### Element.classList.toggle(string [, force])


btn.addEventListener('click', () => {
  
  h1.classList.toggle('clicked');
 

});

클래스가 있으면 클래스가 제거되고,false를 반환함다.
클래스가 없다면 클래스를 추가하고 ture를 반환한다.


