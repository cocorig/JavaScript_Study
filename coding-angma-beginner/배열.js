let arr = [
  '하연',
  2,
  false, 
  {
    name :  'gkdus',
    age : 30,
  },
  ()=>{
    console.log('test');
  },

]
//push ( )  -> 배열의 끝에 추가
//pop() -> 배열 끝 요소 제거

//shift() -> 배열 앞에서 추가
//unshift() -> 배열 앞에서 제거
let days = ['원', '화','수']
for(let day of days) { // 인데스 못얻음
  console.log(day);
}