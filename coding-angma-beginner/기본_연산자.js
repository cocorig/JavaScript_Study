// 나머지는 어디에 쓸까?
// 홀수 : x % 2 = 1
// 짝수 : y % 2 = 0

//어떤 값이 들어와도 5를 넘기면 안될때
//x % 5 = 0 ~ 4사이의 값만 반환
let ans = 0;
for(let i = 0; i < 10; i++){
  ans =  i % 5
  console.log(ans) //0~4
}

//증감, 감소 연산자

let num = 10;
// num을 증가시키기 전의 값을 넣는다.
let result = num++;

console.log(result);