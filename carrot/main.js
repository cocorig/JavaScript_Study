'use strict';
const imgsize = 80;
const carrot_count = 5;
const bug_count = 5;
const game_duration_sec = 5;


const gamebtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const field = document.querySelector('.game__field');
const fieldRect =field.getBoundingClientRect();

let started = false;
let score =0;
let timer = undefined;

gamebtn.addEventListener('click',()=>{
    if(started){//게임이 시작이 되었다면 중지
        stopGame();
    }else{
        startGame();//게임이 시작이 되지 않았다면 시작
    }
    started = !started;//바꿔줘야 

});
function startGame(){
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}
function stopGame(){

}
function showStopButton(){
    const icon = gamebtn.querySelector('.fa-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    
}
function showTimerAndScore(){
    gameTimer.style.visibility ='visible'; 
    gameScore.style.visibility ='visible';    
}   


function startGameTimer(){
    let remainingTimeSec =game_duration_sec;//5초 동안 인터벌을 계속 유지해줘야함
    updateTimerText(remainingTimeSec);// 업데이트 할수있게
    timer = setInterval(()=>{
        if(remainingTimeSec <=0){
            clearInterval(timer);
            return;
        }
        updateTimerText(--remainingTimeSec);
    },1000);
    
}
function initGame(){
    field.innerHTML = '';//초기화
    gameScore.innerText = carrot_count;//카운트 숫자를 당근 숫자로 
    //벌레와 당근을 생성한뒤 field에 추가해줌
    addItem('carrot',carrot_count,'img/carrot.png');//addItem함수를 호출해줌
    addItem('bug',bug_count,'img/bug.png');
    
    
    
}
function addItem(className, count, imgPath){

    const x1 = 0;
    const y1 = 0;
    const x2 =fieldRect.width - imgsize;
    const y2 = fieldRect.height - imgsize;//이 범위 안에서 랜덤한 숫자를 만들면됨
    for(let i=0; i<count; i++){
        const item = document.createElement('img');
        item.setAttribute('class',className);//carrot,bug로 호출했으니까 클래스이름은 둘중 하나
        item.setAttribute('src',imgPath);
        item.style.position = 'absolute';//우리가 지정하는 포지션 left와 top에 맞게 아이템이 배치되도록
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left =`${x}px`;
        item.style.top =`${y}px`;
        field.appendChild(item);

    }

    
}
function randomNumber(min , max){
return Math.random()* (max - min)+min;
}



