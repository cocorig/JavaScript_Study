//Object - 접근 , 추가, 삭제
const superman = {
  name : 'clark',
  age: 23,
}
// 접근 ,  . , 대괄호 사용 가능
console.log(superman.name );//'clark' 
console.log(superman['age']); //  23, [' ']

//추가
superman.gender = 'male';
superman['hairColor'] = 'black';
console.log(superman); //{ name: 'clark', age: 23, gender: 'male', hairColor: 'black' }
//삭제
delete superman.hairColor;
console.log(superman);
//{ name: 'clark', age: 23, gender: 'male' }

//object - 단축 프로퍼티

// const superman = {
//   name, //name : name
//   age, //age : age
//   gender: 'male',
// }


// 프로퍼티 존재 여부 확인 - 언제 in을 쓸까? 무슨 값이 넘어올지 확신할 수 없을 때 사용
// 함수의 인자로 받거나 api통신을 통해 데이터 받아올 때
console.log(superman.birthDay); //undefined
console.log('birthDay' in superman); //false
console.log('age' in superman); ///true

//for ... in 반복문

for(let key in superman){
  console.log(key); //name , age, gender
  console.log(superman[key]); //값 ,  'clark' , 23 ,male 
}

//이름과 나이를 받아서 객체로 반환하는 함수
function makeObject(name, age){
  return {
    name,
    age,
    hobby: 'football',
  }
}
const Mike  = makeObject('Mike', 30);
console.log(Mike);
console.log(Mike.name);
console.log(Mike.age);
console.log(Mike.hobby);
console.log(Mike['name']);
console.log(Mike['age']);
console.log(Mike['hobby']);

function isAdult(user){
  console.log(user);
  if(!('age' in user) || user.age < 20){
    return false;
  }else{
    return true;
  }
}
const Jane = {
  name : 'Jane',
  age : 20,
}

const Hayeon = {
  name : 'Hayeon',
}
console.log(isAdult(Jane));
console.log(isAdult(Hayeon));

// 객체 for ... in

for( key in Jane){
  console.log(key); //name , age
  console.log(Jane[key]); //Jane['name'] , Jane['age']
}