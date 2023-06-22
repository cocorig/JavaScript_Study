const Imgs  = [

    
    'img(1).jpeg',
    'img(2).jpeg',
    'img(3).jpeg',
    'img(4).jpeg',
    'img(5).jpeg',
  

]
const body = document.querySelector('body');
const img =  document.querySelector('img');
console.dir(img)
const srcIdx =  Math.floor(Math.random() * Imgs.length);
console.log(Imgs[srcIdx])//img(2).jpeg 경로가 무작위로 나옴 

const bgImg = document.createElement('img');  
bgImg.src =`./img/${Imgs[srcIdx]}`;
body.appendChild(bgImg);