const a = 5;            //대부분 const , 변수는 let, var는 절대 사용하지마
const b = 2;
let myName = "현수"

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(myName);

myName = "김현수"

console.log(myName);

const c = null;  //null, undefined, boolean 의 개념 
let somethong;

console.log(c);
console.log(somethong)



const toBuy = [ 'apple', 'carrot', 'pizza' ]; //array개념과 사용방법 2개 , 방법은 엄청 많음

console.log(toBuy[1]);

toBuy.push("mushroom")
console.log(toBuy[3]);


const player = {     //object개념
    name : 'nico'
    ,points : 10
    ,handsome : false
 
}


console.log(player);

player.points = player.points + 12;

console.log(player);

player.tall = 170;

console.log(player);




function plus(a,b){
    console.log(a+b)
};

plus(10,5);



const person = {
    name: 'Nacho'
    , power : function(right, left){
       console.log(right + "+" + left + "=" + right + left)
    }
}

person.power(10, 27);



const calculater = {
    plus : function (a, b){
       return  a + b ;
    }
}

const plusNumber = calculater.plus(2, 5);
console.log(plusNumber);



const age = prompt("how old are you?");

console.log(typeof age, parseInt(age));


//const age = parseInt ( prompt("how old are you?") );


if(isNaN(age) || age<0) {
    console.log('please write a number');
}else if(age<18){
    console.log("you can't drink");
}else if(age>=18 && age <= 50){
    console.log("you can drink anything!");
}else if(age > 50 && age <= 80){
    console.log("you should exercise");
}else if(age === 100){                // 마지막에 적으면 >80이랑 겹쳐서 ㄴㄴ
    console.log("your so wise!");
}else if(age > 80){
    console.log("you can do anything");
}


