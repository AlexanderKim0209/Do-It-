const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

function onLoginBtnClick(tomato){
  tomato.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  greeting.innerText = 'Hello ' + username
  greeting.classList.remove(HIDDEN_CLASSNAME)
  paintGreetings(username) 
 }

 function paintGreetings(username) {
  greeting.innerText = 'Hello ' + username; //h1에 택스트 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); 
 }
      
   //    if(username === "") {
//        alert("please write your name!")
//    }else if(username.length > 15) {
//         alert("your name is too long!");
//    }}

    // console.log("hello",loginInput.value)

    function handleLinkClick(event){
        event.preventDefault();
    //   alert("closed!!");
      console.log(event);
    }

const savedUsername = localStorage.getItem(USERNAME_KEY);


 if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); 
  loginForm.addEventListener("submit", onLoginBtnClick);  
 }else{
  paintGreetings(savedUsername);  
 }
//link.addEventListener("click", handleLinkClick);