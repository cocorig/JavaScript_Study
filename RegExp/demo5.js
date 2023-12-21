let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/; // h로 시작하고 , a가 3번 이상 반복 , h로  끝나는 패턴
multipleA.test(A4); // true
multipleA.test(A2); // false
multipleA.test(A100); // true

// /ha{3}h/ -> 딱 3개문자와 일치

// 물음표를 사용하여 요소의 존재 가능성을 지정할 수 있다.
//  ?  :  이는 이전 요소 중 0개 또는 1개를 확인
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true

// u? 이게 없을 수도 있고 , 있을 수 도있음
// colour
// color

// ----------------- ----------------- -----------------

//  룩어헤드(lookahead)는 문자열에서 특정 패턴이 뒤따르는지 확인하는 정규 표현식의 일부분

// (positive lookahead)는 패턴이 존재함을 확인 (?=...)
// (negative lookahead)는 패턴이 존재하지 않음을 확인 (?!...)
// 예시 1
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // ["q"] - "q" 뒤에 "u"가 오는 패턴과 일치
let qRegex = /q(?!u)/; // ["q"] - "q" 뒤에 "u"가 오지 않는 패턴과 일치
console.log(quit.match(quRegex)); //
console.log(quit.match(qRegex));

// 예시 2
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/; // \w가 3에서 6자리 수 , 숫자를 제외한 문자가 하나 이상 있고 , 숫자가 있음
console.log(checkPass.test(password)); // true

// (?=\w{3,6}): 3-6개의 영문자 또는 숫자로 이루어져 있음을 확인

// (?=\D*\d):  숫자가 적어도 하나 이상있고 , 숫자 앞에는 문자가 올수있음

// 예시 3
let text = "안녕하세요! Hello!";

// Positive Lookahead: '!'가 'Hello' 다음에 나옴을 확인
let positiveLookahead = /Hello(?=!)/;

//  Negative Lookahead: '!'가 '안녕하세요' 다음에 오지 않음을 확인
let negativeLookahead = /안녕하세요(?!!)/;

// Positive Lookahead 패턴 테스트
let resultPositive = positiveLookahead.test(text);
console.log(resultPositive); // Output: true (Hello 다음에 !가 존재함)

//  Negative Lookahead 패턴 테스트
let resultNegative = negativeLookahead.test(text);
console.log(resultNegative); // Output: false

// 패턴의 존재 또는 부재를 확인하는데 사용
// lookahead특정 양의 문자로 구성된 문자열을 찾는 데만 사용
// pwRegex의 lookaheads를 사용하여 길이가 5자를 초과하고 연속된 2자리의 비밀번호를 일치시킵니다.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
// (?=\w{6}): 이 부분은 문자열에서 6개의 영숫자(\w)로 이루어진 패턴이 있음을 확인
// (?=\w*\d{2}): 이 부분은 문자열에서 숫자가 2개(\d{2}) 이상 존재하는 패턴이 있음을 확인

// 존재 여부를 확인하는데 사용
// Positive Lookahead : 패턴이 존재함을 확인하는데 사용
// Negative Lookahead : 특정 패턴이 존재하지 않아야 함을 확인하는데 사용, 만약 그 패턴이 존재하면 false ,/q(?!u)/는 'q' 다음에 'u'가 오면 false
// 이메일 주소를 검증하는 정규식에서는 이메일 도메인 뒤에 .com이 올 것을 확인하는 긍정형 룩어헤드를 사용할 수 있다.
// 도메인 부분이 '.com'으로 끝나는지 확인하는 긍정형 룩어헤드
let emailRegex = /(?=.*\.com$)/;

let email1 = "example@test.com";
let email2 = "another@example.net";

console.log(emailRegex.test(email1)); // Output: true
console.log(emailRegex.test(email2)); // Output: false

// 숫자로 시작하지만 '5'로 시작하면 안 되는 부정형 룩어헤드
let negativeStartsWith5 = /^(?!5)\d/;

let number1 = "123";
let number2 = "523";
let number3 = "678";

console.log(negativeStartsWith5.test(number1)); // Output: true
console.log(negativeStartsWith5.test(number2)); // Output: false
console.log(negativeStartsWith5.test(number3)); // Output: true
