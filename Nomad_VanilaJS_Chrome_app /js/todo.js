const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const toDoInput = todoForm.querySelector('input'); 

let todoArr = []; //항상 새로고침하면 todoArr이가 비어있어서 기존에있던값을 없애고,추가되는것 !!

const TODOS_KEY = 'todo';

/**삭제 버튼을 누르면 li태그를 삭제하는 함수 */
function deleteTodo(e){
   
    console.log(todoArr)
    //console.dir(e.target.parentElement.innerText);   //li태그
    const li = e.target.parentElement; //내가 선택한 id를 todoArr에서 걸러내고싶음
    li.remove();
    todoArr =  todoArr.filter((todo)=>
        todo.id !== parseInt(li.id) 
    )
    console.log(li.id)
    saveTodos();  //변경된 todoArr를 localStorage에 저장하기위해 함수를 불러옴
}


/**로컬 스토리지에 todoArr를 저장하는 함수 */
function saveTodos(e){

    localStorage.setItem(TODOS_KEY ,JSON.stringify(todoArr)) //나는 새로운 Todo들만 포함하고있는 array를 저장했던것!로컬스토리지에 값이 있다면 배열에 넣어주고 시작하자
}   


//1. li,span,button태그 생성,2. span에 todoValue넣어줌, 
/** 회면에 그려주는 함수 */
function paintTodoList(todoValue){ //객체를 받음 

    const li = document.createElement('li');
    const icon =  document.createElement('i');
    icon.className="fa-solid fa-trash";
    li.id =  todoValue.id;
    const span =  document.createElement('span');
    span.innerText = todoValue.text;
    const btn = document.createElement('button');
    btn.appendChild(icon);
    btn.addEventListener('click',deleteTodo); //btn을 클릭했을때 deleteTodo가 실행된다.
    li.appendChild(span);
    li.appendChild(btn); //appendChild는 맨 마지막!!
    todoList.appendChild(li);

}

/** user가 input에 작성한 값을 가져와서 변수에 저장하고, 초기화시켜주는 함수 */
function hendleToDoSubmit(e){
    e.preventDefault();
    const todoValue = toDoInput.value;  //비우기 전에 변수에 저장,toDoInput.value;비웠다고 todoValue가 비워지는건 아님! 헷갈리지 말자
    toDoInput.value = '';///******toDoInput.value이 값을 비워야해!!저장한 값을 비우면 xx,현재 input창에 있는 값을 비우자.
    const TodoObj = {
        text : todoValue,
        id : Date.now()
    }
    todoArr.push(TodoObj)
    paintTodoList(TodoObj)
    saveTodos();
}

console.log(todoArr); //내가 적은 todo의 리스트가 저장되있다 이걸 localStorage에 저장!하지만 localStorage는 문자열만 받음! 배열을 문자열로? 

//사용자가 입력을 하면 입력한걸 ul태그 li로 나열
todoForm.addEventListener('submit', hendleToDoSubmit);

const savedTodos =  localStorage.getItem(TODOS_KEY); //valus저장
console.log(savedTodos);

if(savedTodos){ //로컬스토리지애 값이 있다면 화면에 계속 표시하고 싶음 -> span태그에 넣어주자!

    const parsedTodos = JSON.parse(savedTodos);//저장된 문자열을 배열로 바꿔줌 
   // console.log(parsedTodos);
    parsedTodos.forEach((todo)=>{
        console.log(todo);
        paintTodoList(todo)
        todoArr.push(todo) //원래 있던 값들울 todoArr에 넣어서 저장.새로운 값을 추가해도 기존의 값이 존재해야하니까
        
    })
}