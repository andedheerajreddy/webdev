var canvas=document.getElementById('snake');
var ctx= canvas.getContext('2d');
canvas.width=300;
canvas.height=300;
var scale = 10;
var xpos=0,ypos=0;
ctx.fillStyle="black";
ctx.fillRect(0,0,scale,scale);
var fruitx=Math.floor(Math.random()*30);
var fruity=Math.floor(Math.random()*30);
ctx.fillStyle="violet";
ctx.fillRect(fruitx*scale,fruity*scale,scale,scale);
ctx.fillStyle="black";
var pos=[];
var count=1;
pos.push( { x:0,y:0 });
var str=""+0+" "+0;
var boo=[];
boo[str]="true";


var x=scale,y=0;
var inte=setInterval(snake, 200);

function snake(){
    //every time for 1/4 second clearing and updatind the snake position
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(xpos==fruitx*scale && ypos==fruity*scale){ fruitx=Math.floor(Math.random()*30);fruity=Math.floor(Math.random()*30);count++;}
    ctx.fillStyle="violet";
    ctx.fillRect(fruitx*scale,fruity*scale,scale,scale);
    
    if(pos.length==count){
                // mySet.delete(pos[0]);
                 str=""+pos[0].x+" "+pos[0].y;
                 boo[str]=false;
        for(var i=1;i<count;i++){
            pos[i-1].x=pos[i].x;
            pos[i-1].y=pos[i].y;
        }
        pos[count-1].x=xpos;
        pos[count-1].y=ypos;
        str=""+pos[count-1].x+" "+pos[count-1].y;
        if(boo[str]=="true"){
            pos.splice(0, pos.length);
            boo.splice(0,boo.length);
            pos.push( { x:0,y:0 });
            var sco="SCORE : "+count;
            xpos=0;ypos=0;count=1;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            clearInterval(inte);
            ctx.fillStyle="black";
            ctx.font="20px arial";
            ctx.fillText("GAME OVER!!!",60,100);
            ctx.fillText(sco,70,150);
            setTimeout(()=>{
                
                inte= setInterval(snake,200);
          
            },5000);
         
          
      }
        boo[str]="true";
    }
    else{
        pos[count-1]={
            x:xpos,
            y:ypos
        };
        str=""+pos[count-1].x+" "+pos[count-1].y;
        if(boo[str]=="true"){
            pos.splice(0, pos.length);
            boo.splice(0,boo.length);
            pos.push( { x:0,y:0 });
            var sco="SCORE : "+count;
            xpos=0;ypos=0;count=1;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            clearInterval(inte);
            ctx.fillStyle="black";
            ctx.font="20px arial";
            ctx.fillText("GAME OVER!!!",60,100);
            ctx.fillText(sco,70,150);
            setTimeout(()=>{
                
                inte= setInterval(snake,200);
          
            },5000);
       }
        boo[str]="true";
        // mySet.add(pos[count-1]);
    }
    let set= new Set();
    set.add(pos);
    ctx.fillStyle="black";
    for(var i=0;i<count;i++)
    ctx.fillRect(pos[i].x,pos[i].y,scale,scale);
    
    // console.log(pos[count-1].x+"   "+pos[count-1].y);
    // if(mySet.size!=count)
    // alert("GAME OVER"+mySet.size);
    
   
    //for movement
xpos=(300+xpos+x)%300;
ypos=(ypos+300+y)%300;
}

document.addEventListener('keydown',function(event){
    //updating theposition whenever a key is pressed...
    if(event.key=="ArrowDown"&&x!=0)
    {y=scale;x=0;}
    else if(event.key=="ArrowUp"&&x!=0)
    {y=-scale;x=0;}
    else if(event.key=="ArrowLeft"&&y!=0)
    {x=-scale;y=0;}
    else if(event.key=="ArrowRight"&&y!=0)
    {x=scale;y=0;}
 })
