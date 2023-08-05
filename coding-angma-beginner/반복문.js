// for(let i = 0; i < 10; i++){
//   console.log(i)
// }

// i가 계속 0이기때문에 무힌반복됨
// let i = 0;
// while(i < 10){ //i가 10이보다 작으면 계속 반복
//   //코드
// }

// let j = 0;
// while(j < 10){ //i가 10이보다 작으면 계속 반복,false일때 빠져나감
//   console.log(j);
//   j++;
// }

// let i = 0;
// do{
//   console.log(i);
//   i++;
// }while(i < 10)

//break : 멈추고 빠져나옴
//contunue  : 멈추고 다음 반복으로 진행(점프)

// 무한반복 루프에 특정조건이 되었을 때 break해주는 게 중요
// while(true){
//   let ans = true;
//   if(!ans){
//     break; // 반복 끝
//   }
// }

//continue 짝수만
for(let i = 0; i < 10; i++){
  if(i % 2 ){   // 값이 0으로 반환되면 false이기 때문에 바로 콘솔로 넘어감
     // 나머지가 1인 경우 continue문을 만남 -> 반복문으로 다시 점프
    continue;  // 출력하고싶지 않고 바로 다음 스텝으로 넘어가고 싶을 때
  }
  //  때문에 짝수만 출력됨
  console.log(i);
}

//명확한 횟수는 for문 사용
//그게 아니라면 while문 사용