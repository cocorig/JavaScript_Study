const title = document.querySelector('.title');
const btn =  document.querySelector('.btn');
console.dir(title)
let toggle = true;
title.onmouseenter = ()=>{  //다 존재한하는 함수입!!
    title.innerText = 'Hello~~~';
   
}
title.onmouseleave = ()=>{
    title.innerText = 'bye~~~';
};

btn.onclick = ()=>{ 
    toggle ?  title.style.color = 'blue' : title.style.color ='red';
    toggle =!toggle;}

//우리가 하는건 javascript로 html element를 가져오고 가져온 element를 event listener애 추가해준것!

window.addEventListener('resize',()=>{ //window 창 사이즈바꼈을때 이벤트
    document.body.style.backgroundColor = 'tomato';
})
window.addEventListener('copy',()=>{ //copy동작을 했을때 
    console.log('복사됨!')
})

window.addEventListener('offline',()=>{
    alert('연결되지 않았습니다.')
})
window.addEventListener('online',()=>{
    alert('연결되었습니다.')
})