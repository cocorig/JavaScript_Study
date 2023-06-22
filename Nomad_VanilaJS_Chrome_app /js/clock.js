const clock = document.getElementById("clock");




function Clock() { //매 초 마다 하고있는건 new Date object의 값들을 새로 받는것

    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
Clock()//즉시 호출String(해줘야 새로고침했을때 1초 기다리지않음.
setInterval(Clock,1000); //바로 실행