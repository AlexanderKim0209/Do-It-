
//1.네모를 그린다(캔버스 태그이용, 캐릭터그리기(캐릭터의 높이와 폭, 정보))

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;    //컨버스를 세팅할때 필수

var dino = {
    x : 10,
    y : 200,
    width  : 50,
    height : 50,
    draw(){ 
        ctx.fillStyle ='green';
        ctx.fillRect(this.x ,this.y , this.width,this.height);
        
    }
}

var img1 = new Image();
img1.scr = 'cactus.png'

// dino.x += 1;
// dino.draw()




//장애물
class Cactus {
    constructor(){

        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle ='red';
        //ctx.fillRect(this.x ,this.y , this.width,this.height);
        ctx.drawImage(img1, this.x, this.y)
    }
}

var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;


//2. 1초에 60번 실행하는 애니매이션(requestAnimationFrame)
function 프레임마다실행할거(){
    animation = requestAnimationFrame(프레임마다실행할거);
    
    timer++;
    
    ctx.clearRect(0,0, canvas.width, canvas.height); //캠버스가 클리어됨

    // dino.x++;vb



    //120프래임마다 장애물 소환, array에 보관
    if(timer % 200 === 0){
         var cactus = new Cactus();
         cactus여러개.push(cactus);
        

    }


    //반복문으로 array에 있던거를 꺼내서 1초에 60번 x좌표를 1씩 뻄

    cactus여러개.forEach((a, i, o)=>{
        //x좌표가 00 미만이면 제거
        if(a.x < 0){
            o.splice(i,1)
        }
       
        충돌하냐(dino, a);

        a.x--;
        a.draw();
    })

    if(점프중 == true){  //점프중일떄 위로 올라감
      dino.y --;
      점프timer ++;   //점프시 프래임마다 +1됨
    }
    if (점프중 == false){
        if(dino.y < 200) {                 //점프중이 아닐때 밑으로 내려감
        dino.y++;
        }
    }
    

    if (점프timer > 100){  //100프래임 지나면 점프 그만
        점프중 = false;
        점프timer = 0;
    
    }

    dino.draw()

   
}
프레임마다실행할거();


//충돌확인

function 충돌하냐(dino, cactus){
  var x축차이 = cactus.x -(dino.x + dino.width);
  var y축차이 = cactus.y -(dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0 ){                     //장애불과 충돌시 게임정지
    ctx.clearRect(0,0, canvas.width, canvas.height);  
    cancelAnimationFrame(animation)
  }
}

// ctx.fillStyle ='green';
// ctx.fillRect(10,10,100);

var 점프중 = false
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
     점프중 = true;
    }
})