const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //리스트형태로 저장

function saveToDos(){ //리스트를 로컬에 저장 (새로 고침후 리셋을 없엠)
    localStorage.setItem(TODOS_KEY,  JSON.stringify(toDos)); 
}

function deleteToDo(event) { //x버튼을 누른 리스트는 리스트를 생성할때 제외
    const li = event.target.parentElement;
    //typeof(li.id); >> li의 타입이 stirng이어서 parseInt로 씌워야함
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

function paintToDo(newTodo){  //작성한 리스트를 li의 자식으로 저장, x버튼 생성
    const li = document.createElement("li");
    li.id = newTodo.id;  //id는 li에부여함
    const span = document.createElement("span");
    span.innerText = newTodo.text;  //text는 span에 부여
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();  //100번을 새로고침하면 100번 사진이 바뀜 => 불편
    const newTodo = toDoInput.value; //ul에 나타내기위해 저장시텨야함
    //console.log(toDoInput.value)  => abc
    toDoInput.value = ""; //enter를 누르면 칸을 비워냄
   // console.log(newTodo, toDoInput.value);  => abc

   const newTodoObj = {  //object를 만들어서 각각의 리스트에 무작위(Date.now)id부여
       text: newTodo,
       id: Date.now(),
   };
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
   saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);
 const savedToDos = localStorage.getItem(TODOS_KEY);

 

//  function SayHello(item) {
//      console.log("hello", item)
//  };

  if(savedToDos != null){
      const parseToDos = JSON.parse(savedToDos);
      
    parseToDos.forEach((item)=> console.log("hello", item));
    parseToDos.forEach(paintToDo);
         
 }