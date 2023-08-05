//케이스가 다양할 경우 쓰임
// switch(평가){
//   case A :
//     // A일때 코ㅡ드
//   case B :
//     // B일때 코드
//     //.....
// }

// // for
// if(평가 == A){
//   // A일때 코드
// }else if(평가 == B){
//   //B일때 코드
// }
const 과일  = '멜론'
//break문이 없을 때 : 멜론이 만족하면 그 뒤에 값까지 다 출력된다 , 멜론, 수박 , 바나나 출력
switch(과일){
  case '사과' :
    console.log('사과');
  case '멜론':
    console.log('멜론');
  case '수박' : 
    console.log('수박');
  case '바나나':
    console.log('바나나');
}

//break문이 있을 때 : 멜론만 출력
switch(과일){
  case '사과' :
    console.log('사과');
  break;
  case '멜론':
    console.log('멜론');
  break;
  case '수박' :
    console.log('수박');
  break;
  case '바나나':
    console.log('바나나');
  break;
  // else  대신 default
  default :
  console.log('그런 과일은 없습니다')
}

//출력 값이 같을 경우 
switch(과일){
  case '사과' :
    console.log('100원 입니다');
  break;
  case '바나나':
    console.log('400원 입니다');
  break;
  case '멜론': // 이렇게 합쳐 줄 수 있다.
  case '수박' :
    console.log('200원 입니다');
  // else  대신 default
  break;
  default :
  console.log('그런 과일은 없습니다')
}