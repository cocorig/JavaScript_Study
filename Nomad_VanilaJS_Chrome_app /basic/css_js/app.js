const h1 = document.querySelector('.title:first-child h1');
console.log(h1);
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  
  h1.classList.toggle('clicked');
  // const clickedClass = 'clicked';
  // if( h1.classList.contains(clickedClass)){ //contains( 'clicked' ) h1의 class속성이 존재하는지 확인

  //       h1.classList.remove(clickedClass); //clicked이 있다면 클래스 값을 제거한다.
  // }else{
  //       h1.classList.add(clickedClass);  //clicked이 없다면 클래스 값을 추가한다.
  // } 


    });

