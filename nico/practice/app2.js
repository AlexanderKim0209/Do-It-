// const title = document.getElementById("title");
// console.dir(title);

//  title.innerText = "got you!";

//  console.log(title.className);




// const Title = document.querySelector( ".hello h1" );

// Title.innerText = "hello";

// console.dir(Title);

// function handleTheButton(){
//     Title.style.color = "blue";
// }

// function handleMouseLeave(){
//     Title.innerText = "mouse is gone!";
// }

// function handleMouseEnter(){
//     Title.innerText = "mouse is here!";
// }

// function changeColor(){
//     document.body.style.backgroundColor = "tomato";
// }

// function 카피누르면(){
//     alert("copier!");
// }

// function 와이파이끔(){
//     alert("non wifi");
// }


// function 와이파이킴(){
//     alert("well wifi");
// }




// Title.addEventListener("click", handleTheButton);
// Title.addEventListener("mouseleave", handleMouseLeave);
// Title.addEventListener("mouseenter", handleMouseEnter);

// window.addEventListener("resize", changeColor);
// window.addEventListener("copy", 카피누르면);
// window.addEventListener("offline",와이파이끔);
// window.addEventListener("online", 와이파이킴);


const h1 = document.querySelector(".hello h1");

function handleTitleClick(){                   
    h1.classList.toggle("active");}               //>> 방법3 toggle로 1줄요약 가능




    // 방법2  const clickedClass = "active";     >>sexy-font가 보존됨. toggle로 줄일 수 있음.
    //  if (h1.classList.contains(clickedClass)){
    //      h1.classList.remove(clickedClass)
    //  }else{
    //      h1.classList.add(clickedClass)
    //  }
    // }




//   방법1  if(h1.className === clickedClass){   >> sexy-font클래스까지 지워버림
//         h1.className = "" ;
//        } else {
//         h1.className = clickedClass;
//        }
    
// }



// function handleTitleClick() {
//     const currentColor = Title.style.color;   
//     let newColor;                             
//     if (currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//    Title.style.color = newColor
// }



h1.addEventListener("click", handleTitleClick);