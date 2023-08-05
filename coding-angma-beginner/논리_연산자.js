 //  || (OR) , 여래개 중 하나라도 true면 true , 이거나~~
 // OR는 첫번째 true를 발견하는 즉시 평가를 멈춤
 //  && (AND), 모든 값이 true면 true , 이고!!
 // 첫번쪠 false를 발견하는 즉시 평가를 멈춤 
 // ! (NOT )  , true면 false반환 , false면 true반환 !a

//평가

// 운전 면허(전체 군인의 80%)가 있고, 시력(전체 군인의 60%)이 좋은 여군(전체 군인의 7%)
// (여군인데) 시력이 좋고 운전면허가 있는 사람 순으로 코딩하는게 좋다
// (여군인데) 여기서 93%를 걸러낼수 있기 때문 (성능 최적화 도움)

//OR
//이름이 TOM 이거나, 성인이면 통과
const name = 'TOM';
const age = 19;

//앞에가 false여도 뒤에를 확인해야함 , 때문에 퍼센트가 낮은 조건을 앞에 쓰자
if(name ==='HOYA' || age > 19){
  console.log('햡격');
}else{
  console.log('불합격')
}

//NOT
//false일때
if(!age){
  console.log('돌아가')
}

//우선순위 AND > OR
// 남자이고 , 이름이 Mike 이거나 성인이면 통과
const gender =  'F';
const name1 = 'Jane';
const isAdult = true;

//if((gender === 'M' && name1 === 'Mike') || isAdult) -> 이렇게 계산 됨
if(gender === 'M' && name1 === 'Mike' || isAdult){ // 통과로 간주
  console.log('통과')
}else{
  console.log('돌아가')
}
// 돌아가 출력
if(gender === 'M' && (name1 === 'Mike' || isAdult)){ 
  console.log('통과')
}else{
  console.log('돌아가')
}
