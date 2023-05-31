const addBtn = document.querySelector('.footer__btn');
const input = document.querySelector('.footer__input');
const items =document.querySelector('.items');


function onAdd(){//버튼을 클릭했을때
    //1.입력한 데이터를 받아옴
    const text = input.value;
    //입력한 값이 없을때 그냥 함수 빠져나감
    if(text ===''){
        input.focus();
        return;
    }
    //2.새로운 아이템을 만든다(텍스트 + 삭제 버튼)
    const item = createItem(text);//파라미터 보냄
    //3.items 컨테이너안에 추가
    items.appendChild(item);
    //4.새로추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center'});
    //5.input 초기화//포커스들어오게
    input.value='';
    input.focus();

}

let id = 0;//원래는 UUID로 해야함
function createItem(text){//파라미터 받아옴
    const itemRow =document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.setAttribute('data-id',id);
    itemRow.innerHTML =`
        <div class = "item" >
            <span class ="item__name">${text}</span>
            <button class="item__delate">
                <i class="fa-solid fa-trash-can"data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>`;
    id++;
    return itemRow;
    

    // const item = document.createElement('div');
    // item.setAttribute('class','item');

    // const name = document.createElement('span');
    // name.setAttribute('class','item__name');
    // name.innerHTML = text;

    // const delateBtn = document.createElement('button');
    // delateBtn.setAttribute('class','item__delate');
    // delateBtn.innerHTML =' <i class="fa-solid fa-trash-can"></i>';
    // delateBtn.addEventListener('click',()=>{
    //     items.removeChild(itemRow);
    // });

    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class','item__divider');

    // item.appendChild(name);
    // item.appendChild(delateBtn);
    
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);
    

}
addBtn.addEventListener('click',()=>{
    onAdd();
});

input.addEventListener('keypress',(e)=>{

    if(e.key ==='Enter'){
        onAdd();
        }
    
    
});

items.addEventListener('click',event=>{//이벤트 위임:부모 컨테이너에 원하는 target이 클릭되었을때 발생할수있도록
    const id=event.target.dataset.id;
    if(id){//data-id이 있다면
        const toBeDelated = document.querySelector(`.item__row[data-id="${id}"]`);//data-id가 똑같을때 삭제
        toBeDelated.remove();//id를 찾는 더음애 지워줌
    }
});

