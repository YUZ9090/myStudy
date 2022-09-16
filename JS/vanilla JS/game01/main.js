var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-300;
canvas.height = window.innerHeight-300;

//var img1 = new Image();
//img1.src = 'img/bird.gif';

var img1 = document.getElementById("bird");

//var myGif = GIF();
//myGif.load("bird.gif");

var dino = {
    //공룡등장 좌표
    x :30,
    y :200,
    width:80,
    height:60,
    draw(){
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1,this.x-10,this.y-15,100,100);
        //ctx.drawImage(myGif.image,this.x,this.y);
    }

}

var img2 = new Image();
img2.src = 'img/thunder.png'

class Cactus {
    constructor(){
        this.width=100 + getRandomInt(-50,4);
        this.height=100 + getRandomInt(-50,4);
        this.x=800;
        this.y=200 + getRandomInt(-300,300);
    }

    draw(){
        //ctx.fillStyle ='red';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2,this.x-20,this.y-20,this.width+50, this.height+50);
    }
}

var img3 = new Image();
img3.src = 'img/feildheart.png'

class Heart {
    constructor(){
        this.width=50
        this.height=50 
        this.x=800;
        this.y=50 + getRandomInt(-300,300);
    }

    draw(){
        //ctx.fillStyle ='red';
        //ctx.fillRect(this.x, this.y,this.width, this.height);
        ctx.drawImage(img3,this.x,this.y,this.width, this.height);
    }
}



var img4 = new Image();
img4.src = 'img/diamond.png'

class Diamond {
    constructor(){
        this.width=50
        this.height=50 
        this.x=800;
        this.y=50 + getRandomInt(-300,300);
    }

    draw(){
        //ctx.fillStyle ='red';
        //ctx.fillRect(this.x, this.y,this.width, this.height);
        ctx.drawImage(img4,this.x,this.y,this.width, this.height);
    }
}

let life = 5;
let score = 0;
let gameState = 0; // 0: end, 1: start

var timer = 0 ;
var cactusarr = [];
var heartArr = [];
var diaArr = [];
var jumptimer = 0;
var ani;



//애니메이션
function animation(){
    ani = requestAnimationFrame(animation);
    timer++;
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    
    //20프레임마다 점수 증가
    if(timer % 20 === 0){
        score+=1;
    document.querySelector('#score').innerHTML = score;
    }
    
    
    //120프레임마다 장애물 생성하여 어레이에 추가
    if(timer % (120+getRandomInt(-100, 100)) === 0){
        var cactus = new Cactus();
        cactusarr.push(cactus);
    }

    // 하트 생성
    if(timer % (500+getRandomInt(-100, 100)) === 0){
        var heart = new Heart();
        heartArr.push(heart);
    }

    //다이아몬드 생성
    if(timer % (150+getRandomInt(-100, 100)) === 0){
        var diamond = new Diamond();
        diaArr.push(diamond);
    }
    
    //장애물 처리
    cactusarr.forEach((a,i,o)=>{
        //x 좌표가 0 미만이되면 제거
        if(a.x<0){
            o.splice(i,1);
            //score+=10;
            //document.querySelector('#score').innerHTML = score;
        }else if(crash(dino,a)<0){
            //충돌여부
            o.splice(i,1);
        }

        a.x-=4;
        a.draw();
    })

    //하트 먹기 처리
    heartArr.forEach((a,i,o)=>{
        //x 좌표가 0 미만이되면 제거
        if(a.x<0){
            o.splice(i,1);
        }else if(getheart(dino,a)<0){
            //충돌여부
            o.splice(i,1);
        }

        a.x-=4;
        a.draw();
    })

    //다이아몬드 먹기처리
    diaArr.forEach((a,i,o)=>{
        //x 좌표가 0 미만이되면 제거
        if(a.x<0){
            o.splice(i,1);
        }else if(getdiamond(dino,a)<0){
            //충돌여부
            o.splice(i,1);
        }

        a.x-=4;
        a.draw();
    })

    //플레이어 점프기능
    if(jump == true){
        if(dino.y>20){  
            dino.y-=4;
            jumptimer++;
        }
    }
    if (jump == false){
        if(dino.y<500){        
            dino.y+=3;
        }
    }
    /*if(jumptimer>50){
        jump =false;
        jumptimer=0;
    }*/
    
    //drawBottomLine();
    dino.draw();
}
//animation();





//충돌체크
function crash(dino, cactus){
    var xdiff = cactus.x- (dino.x+dino.width);
    var ydiff;

    if(cactus.y < (dino.y+dino.height)&& (cactus.y+cactus.height)> dino.y){
        ydiff=-1;
    }else{
        ydiff=1;
    }
    

    if(xdiff<0 && ydiff<0){
        //충돌시
        life--;
        document.querySelector('#life').innerHTML = life;

        if(life==0){
            alert("게임오버");
            gameState=0;
            cancelAnimationFrame(ani);
            location.reload();
        }
        
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        //cancelAnimationFrame(ani);
        return -1;

    }else{
        return 1;
    }
}

//목숨획득체크
function getheart(dino, heart){
    var xdiff = heart.x- (dino.x+dino.width);
    var ydiff;

    if(heart.y < (dino.y+dino.height)&& (heart.y+heart.height)> dino.y){
        ydiff=-1;
    }else{
        ydiff=1;
    }
    

    if(xdiff<0 && ydiff<0){
        //충돌시
        life++;
        if(life>5){
            life=5;
        }
        document.querySelector('#life').innerHTML = life;
        return -1;

    }else{
        return 1;
    }
}


//점수획득체크
function getdiamond(dino, heart){
    var xdiff = heart.x- (dino.x+dino.width);
    var ydiff;

    if(heart.y < (dino.y+dino.height)&& (heart.y+heart.height)> dino.y){
        ydiff=-1;
    }else{
        ydiff=1;
    }
    

    if(xdiff<0 && ydiff<0){
        //충돌시
        score+=100;
        document.querySelector('#score').innerHTML = score;
        return -1;

    }else{
        return 1;
    }
}




//스페이스 입력시 점프상태로 전환
var jump = false;
document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        if(gameState == 0){
            //게임시작전
            gameState = 1; // 게임실행
            animation();
            document.getElementById('cover').style.display = 'none';
        }else if(gameState==1){
            //게임중
            jump = true;
        }
    }
})
document.addEventListener('keyup',function(e){
    if(e.code === 'Space'){
        jump = false;
    }
})

//바닥선 그리기
function drawBottomLine(){
    ctx.beginPath();
    ctx.moveTo(0, 530);
    ctx.lineTo(800, 530);
    ctx.stroke();
}
function drawTopLine(){
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(600, 250);
    ctx.stroke();
}

//랜덤 정수 뽑기
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}