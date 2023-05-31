const target =document.querySelector('.target');
const tag = document.querySelector('.tag');
const horizontal = document.querySelector('.horizontal');
const vertical =document.querySelector('.vertical');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width /2;
const targetHalfHeigth = targetRect.height /2;

console.log(targetRect);

document.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    tag.innerHTML = (`${x}px,${y}px`);
    horizontal.style.transform=`translateY(${y}px)`;
    vertical.style.transform=`translateX(${x}px)`;
    target.style.transform=`translate(${x-targetHalfWidth}px,${y-targetHalfHeigth}px)`;
    tag.style.transform=`translate(${x}px,${y}px)`;

    // horizontal.style.top =`${y}px`;///top는 y좌표있는걸 사용 
    // vertical.style.left =`${x}px`;//left는 x좌표있는걸 사용
    // target.style.left =x + 'px';
    // target.style.top =y + 'px';
    // tag.style.left =x + 'px';
    // tag.style.top =y + 'px';
});

