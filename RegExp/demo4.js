//   \W :  정규 표현식에서 \w의 반대로 동작 ,  단어 문자가 아닌 문자(non-word characters)에 일치하는 패턴
//   영문 알파벳 대소문자, 숫자(0-9), 밑줄(_)을 제외한 다른 모든 문자에 일치 (띄어쓰기, 특수문자 등)
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand)); // %
console.log(sentence.match(shortHand)); // !

let sampleString = "Hello_world123! How are you?";
let nonWordRegex = /\W/g;
sampleString.match(nonWordRegex);
//console.log(result); // Output: [ '!', ' ', ' ', ' ', '?' ]
//   /W/g는 문자열에서 영문 알파벳, 숫자, 밑줄을 제외한 모든 문자인 느낌표(!), 공백( ), 물음표(?)에 일치

//  \D :  0에서 9사이의 숫자가 아닌 문자 => [^0-9] 와 같은 의미

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
console.log(movieName.match(noNumRegex));

// ------------------------------------------------------------------------------------------------------

// 사용자 이름에는 영숫자 문자만 사용할 수 있습니다.

// 사용자 이름의 유일한 숫자는 끝에 와야 합니다. 끝에는 0개 이상이 있을 수 있습니다. 사용자 이름은 숫자로 시작할 수 없습니다.

// 사용자 이름 문자는 소문자 및 대문자일 수 있습니다.

// 사용자 이름은 2자 이상이어야 합니다. 2자리 사용자 이름은 알파벳 문자만 사용할 수 있습니다.
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

// /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i
// ^ 입력 시작
// [a-z] 첫 번째 문자는 문자입니다.
// [a-z]+ 다음 문자는 문자입니다.
// [0-9]{2,} 두 개 이상의 숫자로 끝남
// | 또는
// [a-z]+  다음에 하나 이상의 문자가 있습니다
// \d*  0개 이상의 숫자로 끝납니다.
// $ 입력 끝
// i  입력의 경우 무시

function validateUsername(username) {
  // 정규 표현식
  let regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

  // 사용자 이름 유효성 검사
  let isValid = regex.test(username);

  return isValid;
}

// 사용자 이름 예시
let usernames = [
  "hello123", // 유효 - 영문 소문자로 시작하고 숫자로 끝남
  "johndoe45", // 유효 - 영문 소문자로 시작하고 숫자로 끝남
  "sally99", // 유효 - 영문 소문자로 시작하고 숫자로 끝남
  "peter", // 유효 - 숫자가 없어도 유효함
  "123user", // 유효하지 않음 - 숫자로 시작하면 안 됨
  "robert10", // 유효 - 영문 소문자로 시작하고 숫자로 끝남
];

// 각 사용자 이름의 유효성 검사 및 결과 출력
usernames.forEach((username) => {
  let isValid = validateUsername(username);
  console.log(`${username}: ${isValid ? "유효함" : "유효하지 않음"}`);
});

//--------------------------------------------------------------------------------------------------------

//   \s를 사용하여 공백을 검색
let whiteSpace1 = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
console.log(whiteSpace1.match(spaceRegex));

//  \S는 공백이 아닌 항목을 검색
let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex));

// {n}은 패턴이 n번 반복되어야 함
// {n,}은 패턴이 최소 n번 이상 반복되어야 함
// {n,m}은 패턴이 최소 n번에서 최대 m번까지 반복되어야 함
//  /a{3}/은 'aaa'와 정확히 일치하고 /a{2,}/은 'aa', 'aaa', 'aaaa', ...와 일치한다.
//  /a{2,4}/는 'aa', 'aaa', 'aaaa'와 일치하지만 'a' 또는 'aaaaa'와는 일치하지 않는다.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; // a가 최소 3번 , 최대 5번까지 반복되어야 함
multipleA.test(A4);
multipleA.test(A2);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
hRegex.test(ohStr);
