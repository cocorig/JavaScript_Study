const mathScore = 3
const engScore = 5
const result =  (mathScore + engScore) / 2;

console.log(result)


//자동 형 변환
// 문자형이라도 나누기같은 표현식은 숫자형으로 자동 형 변환 -> 혼란유기 -> 원하는 형으로 변환하자 -> 명시적 형변환을 해야함
console.log('9080' / 2); //4540

//명시적 형 변환

  String(3)
  String(true)
  String(false)
  String(null)
  String(undefined)

// 사용자의 입력이 문자일때 자주 사용

console.log(Number('1234'),  // 1234
Number('134fg6'), // NaN -> 문자가 포함된것을 숫자형으로 바꾸려할떼

Number(true), // 1
Number(false), // 0
)


// Boolean
//false인 것들 -> 그 외 모두 true
// - 숫자  0
// 빈 문자열 ''
//null
//undefined
//NaN


console.log(
  Boolean(1), //true
  Boolean(0), //false
  Boolean(' '), //true , -> 한 칸 띄면 값이 들어있는것으러 간주
  Boolean(''), ///false
  Boolean(null), //false
  Boolean(undefined), //false
  Boolean(NaN) //false
  
);

// 주의사항!! 버그없는 코드로 만들려면 기억하자
Number(null); //0
Number(undefined); // NaN
Boolean(0) // false
Boolean('0') // 문자열 0은 true로 간주
Boolean('') // false
Boolean(' ') // 공뱍은 빈 문자열이 아닌것으로 간주해서 true