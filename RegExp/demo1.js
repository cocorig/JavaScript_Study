// 1) .alternation 또는 OR 연산자(|)를 사용하여 여러 패턴을 검색
let petString = "Alice has a pet fish.";
let petRegex = /dog|cat|bird|fish/; // Change this line
// let result1 = petRegex.test(petString);

// 2) 대소문자를 무시하는 플래그인 i 플래그
// ignorecase/i , 이 정규 표현식은 ignorecase, igNoreCase 및 IgnoreCase 문자열과 일치
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
//let result = fccRegex.test(myString);

//3) .match() 메소드를 사용하여 찾은 실제 일치 항목을 추출

// 문제
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

// 여기서 첫 번째 match는 ["Hello"]를 반환하고 두 번째는 ["expressions"]을 반환합니다.

// .match 구문은 "반대" 구문입니다. .test 지금까지 사용한 방법:

// 'string'.match(/regex/);
// /regex/.test('string');
// 문자열을 추출하려면 .match() 메소드를 적용하세요

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
//let result = extractStr.match(codingRegex); // Change this line

// 4) 전역 검색 플래그 + 대소문자 무시 플래그
//정규식을 사용하여 starRegex 문자열에서 를 모두 찾아 추출
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
//let result = twinkleStar.match(starRegex); // Change this line

// [ 'Twinkle', 'twinkle' ] gi랑 같이 쓸 수 있음

// 5) .  dot 및 period
// 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두)단, 줄바꿈 X
// hug, huh, hut 및 hum을 일치시키려면 정규 표현식을 사용하면 /hu./ 네 단어를 모두 일치시킬 수 있습니다.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
// 이 두 가지 test 호출은 모두 true를 반환합니다.

// 정규식을 완성 unRegex 문자열과 일치하도록 run, sun, fun, pun, nun 및 bun. 정규식은 와일드카드 문자를 사용해야 합니다

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

console.log(result);

// 사람 이름
// 전화번호
// 이메일

// 전화번호만 찾는 정규식 : 0\d{1,2}[ -]?\d{3,4}[ -]?\d{3,4}

// \d는 숫자를 대표하는 정규표현식입니다. 이때 d는 digit을 뜻함. 모든 숫자를 나타낼 수 있음.

// \w는 글자를 대표하는 정규표현식

// a, b, c, 가, 나, 다, 1, 2와 같은 문자와 숫자를 포함
// 특수문자는 포함하지 않지만, _(언더스코어)는 포함

// \d는 숫자를 한글자만 찾음
// \d+는 "하나 혹은 그 이상 연결된 숫자"를 의미 ,-> 연결된 모든 숫자를 찾음

// *은 "0개 이상"이라는 뜻
// 정규표현식으로 010, 123, 456 중 자연수를 찾으려면 ?
// 0으로 시작하지 않으니 자연수의 첫자리는 반드시 1 ~ 9 중에 하나이어야 한다.
// 그다음 자리부터는 0~9 사이의 숫자가 나올 수도 있고, 나오지 않을 수도 있다.

// [1-9]\d* -> 1부터 9까지의 자연수로 시작하는 중 모든 숫자를 찾아라

// ?는 '있거나 없거나'라는 뜻 -> 따라서 -?는 "-가 있거나 없다"를 의미

// 021234567
// 02-123-4567
// \d+-?\d+-?\d+

// 021234567
// 02-123-4567
// 010 2454 3457 -> 공백이 들어간 전화번호 추가

// 모든 전화번호를 찾으려면?
// "-가 있거나 없다"는 조건이 아니라
// "- 또는 공백이 있거나 없다"는 조건을 써야 한다.
// - 또는 (공백)이 있거나 없다는 조건은 [- ]?으로 표현
/// \d+[- ]?\d+[- ]?\d+

// "0030589-5-95826"과 같이 연결된 숫자가 너무 많은 문자열도 전화번호라고 인식하면?

//{숫자}는 "숫자"번을 반복한다"는 뜻 -> \d{2}는 "숫자가 연속 두 번 나온다"는 뜻

//  \d{2}[- ]?\d{3}[- ]?\d{4}

// {숫자1, 숫자2}는 "숫자1부터 숫자2까지 반복한다"는 뜻
//  예를 들어, \w{2,3}는 "문자가 2 ~ 3번 나온다"는 뜻

// 	     자리 수
// 처음	2 ~ 3자리
// 가운데	3 ~ 4자리
// 마지막	4자리

// 따라서 전화번호는 \d{2,3}[- ]?\d{3,4}[- ]?\d{4}와 같이 표현할 수 있다.
