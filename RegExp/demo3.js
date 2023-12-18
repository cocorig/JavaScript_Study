//문자 클래스를 사용하면 일치시키려는 문자 그룹을 대괄호([ 및 ]) 괄호 안에 배치하여 정의할 수 있다.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex)); // big
console.log(bagStr.match(bgRegex)); // bag
console.log(bugStr.match(bgRegex)); // bug
console.log(bogStr.match(bgRegex)); // null

//  모음을 모두 찾아라
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);

// 범위 정하기
// 예를 들어 소문자 a부터 e까지 일치시키려면 [a-e]을 사용
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2);
batStr.match(bgRegex2);
matStr.match(bgRegex2);
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result1 = quoteSample.match(alphabetRegex); // Change this line

// 숫자와 알파벳 문자 일치

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex);
///  /[0-5]/은 0와 5 사이의 모든 숫자와 일치

// 지정되지 않는 단일 문자 일치

// 지금까지 매칭하고 싶은 문자 집합을 만들었지만 매칭하고 싶지 않은 문자 집합을 만들 수도 있다. 이러한 유형의 문자 집합을 네거티브 문자 집합이라 한다.

// 부정된 문자 집합을 만들려면 괄호 뒤에 그리고 일치시키지 않을 문자 앞에 캐럿 문자(^)를 배치.

// 예를 들어 /[^aeiou]/gi은 모음이 아닌 모든 문자와 일치한다.=>  ., !, [, @, /

// 숫자나 모음이 아닌 모든 문자와 일치하는 단일 정규식
let quoteSample2 = "3 blind mice.";
let myRegex1 = /[^aeiou^0-9]/gi; // Change this line
let result2 = quoteSample2.match(myRegex1); // Change this line
console.log(result2);

// 한 번 이상 나타나는 문자 일치

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// 0회 이상 발생하는 문자 일치
// 0번 이상 나타나는 문자를 일치시키는 옵션 -> *
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooo"]
gPhrase.match(goRegex); // ["g"]
oPhrase.match(goRegex); // null

// 문제 설명
// 다음에 *가 오는 회귀식 문자는 검사한 문자열에서 발생할 필요가 없는 반면, 회귀식 문자 뒤에 +가 오는 문자는 아래와 같이 문자열에서 적어도 한 번 이상 발생해야 한다
let phrase = "ba humbug";

let regexPlus = /bah+/; // h뒤에 연속되지 않기때문에 false
let regexStar = /bah*/; // h가 0번 이상 나타나는 문자를 일치시키는 옵션이기때문에  ture

regexPlus.test(phrase); // returns false
regexStar.test(phrase); // returns true

//  예를 들어, 둘 다 동일한 문자가 연속적으로 얼마든지 발생할 수 있도록 한다
let phrase2 = "wooooow look at that!";

let regexPlus1 = /wo+w/;
let regexStar1 = /wo*w/;

regexPlus1.test(phrase2); // returns true
regexStar1.test(phrase2); // returns true

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
console.log(chewieQuote.match(chewieRegex)); // 'Aaaaaaaaaaaaaaaa'
