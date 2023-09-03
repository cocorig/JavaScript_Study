
// 호출스택 -> 함수가 호출될 때마다 스택이 쌓임
// 기본적으로  위에서 아래로 , 왼쪽으로 오른쪽으로 실행됨

const x = 'x'


//  선언
function c(){ 
  const y = 'y';
  console.log('c');

  function b(){
    const z = 'z';
    console.log('b');
    c();
  }
} //닫기 부분에 도착하면 그때 스택에서 빠져나감

function a(){// 여기서 b함수에 접근하려면 -> a 함수 안에 b함수 선언문 확인

  console.log('a');

  b(); //선언x ,  호출 
  console.log(x); // let, const는 변수의 선언보다 변수에 접근을하면 TDZ
  const x = 'x';
}

// 호출 스택은 호출일 때만 쌓임
// 하나늬 스탹에 호출할 때마다 넣고, 함수가 끝날때마다 뺌
console.log(a());
// a -> anonymous  
// b -> c -> anonymous에서 찾아 a 선언문 -> a 접근 가능
// c -> anonymous
// anonymous에선 c,a함수만 존재
console.log(c());
// c


console.log(z); //error
const z = () => {};

// lexcial scope(코드를 쓰는 순간 정해짐)가 여러개 이어져 있는 것이 scope chain
// 스코프 체인 : 특정함수에서 어떤 값에 접근 가능한지 불가능한지 알려줌,선언에만 해당, 호출 상관 x
// 스코프 체인 분석방법 : 함수의 선언들만 봄 

// 어떤 함수에서 어떤 변수나 선언이 접근이 가능한지 보려면 선언 부분으로 타고 올라가서 스코프 체인을 만든 다음 각각 있나 없나 확인 

// ------------
// anonymous -> x , c함수, a함수

// var은 변수 선언만 호이스팅, 값은 x , 함수 선언문은 함수 자체를 호이스팅
// 왠만하면 호이스팅이 발생하는 코드 쓰지말기



function z(){
  console.log(f);
}

const f = 'gg'; //이 경우 변수 선언보다 출력이 위에 있는데 에러가 나지 않는 이유?
//  TDZ 관련해서는 함수 내부에 영향을 받지않고 TDZ에 f가 걸리지 않음
z(); // gg