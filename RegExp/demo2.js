// 알파벳 중에 소문자 모음(a,e,i,o,u)만 고르고 싶을 땐 -> 대괄호 [] 안에 글자를 넣으면 해당 글자를 모두 선택할 수 있다.

// 소문자 알파벳만 고르고 싶을 땐 [a-z]를 입력

// 연속된 영어 소문자를 찾으려면 ?
//  소문자를 뜻하는 [a-z]와  반복을 뜻하는 +를 붙여 -> [a-z]+

// 한글 단어를 찾으려면? [가-히]
// 연속된 한글 단어 ? [가-히]+
//단, 이 방식으로는 ㄱㄴㄷ이나 ㅏㅑㅓㅕ같은 낱글자는 찾을 수 없다.

// 기타 대표문자

// \s 공백 문자(스페이스, 탭, 뉴라인)
// \S 공백 문자를 제외한 문자
// \D 숫자를 제외한 문자
// \W 글자 대표 문자를 제외한 글자들(특수문자, 공백 등)

// new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

// . : 임의의 문자를 나타냄 , 새 줄 문자(\n)를 제외한 모든 단일 문자와 일치,
// 예를 들어, a.b 라는 패턴은 a 다음에 어떤 문자든(예: aeb, acb, a1b 등) .b로 끝나는 문자열과 일치
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g; // Change this line
let result = text.match(myRegex);
console.log(result);

// ^ 기호는 정규 표현식에서 문자열의 시작을 나타내는 메타 문자
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; // 문자열 "Ricky"로 시작하는지 확인
console.log(firstRegex.test(firstString)); // true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false

/// $ : 정규식 끝에 달러 기호 문자를 사용하여 문자열 끝을 검색할 수 있음
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // false

// \w : 다양한 따옴표와 문자열에 포함된 영숫자 문자 수를 계산하려면 단축 문자 클래스 (영문 대소문자, 숫자 , 밑줄)
// [A-Za-z0-9_] -> \w
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); //true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
console.log(quoteSample.match(alphabetRegexV2).length);
