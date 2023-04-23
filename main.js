canvas=document.getElementById("sonic");
ctx=canvas.getContext("2d");
backgroundImage="kidnapped.webp";
supersonic="4752.png";
sonic_width=200;
sonic_height=200;
sonic_x=100;
sonic_y=400;
supershadow="";
shadow_width=200;
shadow_height=200;
shadow_x=800;
shadow_y=100;
function add(){
    backgroundImage_tag=new Image();
    backgroundImage_tag.onload=uploadbackground;
backgroundImage_tag.src=backgroundImage;
sonic_tag=new Image();
sonic_tag.onload=uploadsonic;
sonic_tag.src=supersonic;
shadow_tag=new Image();
shadow_tag.onload=uploadshadow;
shadow_tag.src=supershadow;

}
function uploadbackground(){
    ctx.drawImage(backgroundImage_tag,0,0,canvas.width,canvas.height);
}
function uploadsonic(){
    ctx.drawImage(sonic_tag,sonic_x,sonic_y,sonic_width,sonic_height);
}
function uploadshadow(){
    ctx.drawImage(shadow_tag,shadow_x,shadow_y,shadow_width,shadow_height);
}
window.addEventListener("keydown",key_down);
function key_down(e){
    keycontrol=e.keyCode;
    console.log(keycontrol);
    if(keycontrol=='37'){
        left();
        console.log("left");
    }
    if(keycontrol=='38'){
        up();
        console.log("up");
    }
    if(keycontrol=='39'){
        right();
        console.log("right");
    }
    if(keycontrol=='40'){
        down();
        console.log("down");}


        if(keycontrol=='65'){
            left1();
            console.log("left");}  
            
            if(keycontrol=='87'){
up1();
console.log("up");
            
}
if(keycontrol=='68'){
    right1();
    console.log("right");}
    
    if(keycontrol=='83'){
        down1();
        console.log("down");}
        function up(){
            if(sonic_y>=0){
                sonic_y=sonic_y-10;
                console.log("when up arrow is pressed x=  "+sonic_x+",y="+sonic_y);
                uploadbackground();
                uploadsonic();  
            }
}

function up1(){
    if(shadow_y>=0){
        shadow_y=shadow_y-10;
        console.log("when up arrow is pressed x=  "+shadow_x+",y="+shadow_y);
        uploadbackground();
        uploadshadow();  
    }
}
function down(){
    if( sonic_y<=500){
        sonic_y=sonic_y+10;
        console.log
        ("when down arrow is pressed x=  "+sonic_x+",y="+sonic_y);
        uploadbackground();
        uploadsonic();  
    }
}
function down1(){
    if( shadow_y<=500){
        shadow_y=shadow_y+10;
        console.log
        ("when down arrow is pressed x=  "+shadow_x+",y="+shadow_y);
        uploadbackground();
        uploadshadow();  
    }
}

function left(){
    if( sonic_x>=0){
        sonic_x=sonic_x-10;
        console.log
        ("when left arrow is pressed x=  "+sonic_x+",y="+sonic_y);
        uploadbackground();
        uploadsonic(); 
    }
}
function left1(){
    if( shadow_x>=0){
        shadow_x=shadow_x-10;
        console.log
        ("when left arrow is pressed x=  "+shadow_x+",y="+shadow_y);
        uploadbackground();
        uploadshadow();
    }
}  
function right(){
    if( sonic_x<=1800){
        sonic_x=sonic_x+10;
        console.log
        ("when right arrow is pressed x=  "+sonic_x+",y="+sonic_y);
        uploadbackground();
        uploadsonic(); }
    }
}
function right1(){
    if( shadow_x<=1800){
        shadow_x=shadow_x+10;
        console.log
        ("when right arrow is pressed x=  "+sonic_x+",y="+sonic_y);
        uploadbackground();
        uploadshadow(); }