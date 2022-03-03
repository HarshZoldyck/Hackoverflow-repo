var boxes=document.getElementsByClassName('box');
console.log(boxes);
var rgb=document.querySelector('#rgbValue');
var colors =generateRandomColor(6);
var pickedcolor=colors[Math.floor(Math.random()*6)];
rgb.textContent=pickedcolor;
var playbtn=document.querySelector('#btn1');
var easybtn=document.querySelector('#btn2');
var hardbtn=document.querySelector('#btn3');
var boxcount=6;
var statustxt=document.querySelector('.play');
  statustxt.textContent='Lets Play Baby';

 //adding buttons function
 easybtn.addEventListener('click',function(){
    document.querySelector('h1').style.background='palevioletred';
    document.querySelector('h2').style.background='palevioletred';
    document.querySelector('#guess').style.background='palevioletred';
      
        statustxt.textContent='Lets Play Baby';boxcount=3;
        this.style.backgroundColor='palevioletred';
        this.style.color='white';
        hardbtn.style.backgroundColor='white';
        hardbtn.style.color='palevioletred';
        colors=generateRandomColor(boxcount);
        pickedcolor=colors[Math.floor(Math.random()*3)];
        rgb.textContent=pickedcolor;

        for(var i=0;i<boxes.length;i++)
        {
            if(colors[i])
            {
                   boxes[i].style.backgroundColor=colors[i];
            }
            else{
                boxes[i].style.display='none';
            }
        }

 });
 //hard btn
 hardbtn.addEventListener('click',function(){
    document.querySelector('h1').style.background='palevioletred';
    document.querySelector('h2').style.background='palevioletred';
    document.querySelector('#guess').style.background='palevioletred';
    statustxt.textContent='Lets Play Baby';boxcount=6;
    this.style.backgroundColor='palevioletred';
    this.style.color='white';
    easybtn.style.backgroundColor='white';
    easybtn.style.color='palevioletred';
    colors=generateRandomColor(boxcount);
    pickedcolor=colors[Math.floor(Math.random()*6)];
    rgb.textContent=pickedcolor;

    for(var i=0;i<boxes.length;i++)
    {
        if(colors[i])
        {
               boxes[i].style.backgroundColor=colors[i];
        }
    
          boxes[i].style.display='block';
        
    }

});
//new color
playbtn.addEventListener('click',function(){
    document.querySelector('h1').style.background='palevioletred';
    document.querySelector('h2').style.background='palevioletred';
    document.querySelector('#guess').style.background='palevioletred';
    statustxt.textContent='Lets Play Baby';
  
    colors=generateRandomColor(boxcount);
    pickedcolor=colors[Math.floor(Math.random()*3)];
    rgb.textContent=pickedcolor;

    for(var i=0;i<boxes.length;i++)
    {
         boxes[i].style.background=colors[i];
       
        }
    

});
//boxes
for(var i=0;i<colors.length;i++)
{
    boxes[i].style.background=colors[i];
    boxes[i].addEventListener('click',function(){
       var selectedcolor=this.style.background;
       if(selectedcolor==pickedcolor)
       {
           Victory();
       } else{
           lost(this);
       }   
    });
}
function Victory()
{
    for(var i=0;i<colors.length;i++)
    {
        boxes[i].style.background=pickedcolor;

    }
    statustxt.textContent='Victory';
    document.querySelector('h1').style.backgroundColor=pickedcolor;
    document.querySelector('h2').style.backgroundColor=pickedcolor;
    document.querySelector('#guess').style.backgroundColor=pickedcolor;
}
function lost(e)
{
    e.style.background='aqua';
    statustxt.textContent="Pick again?";

}

function generateRandomColor(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {arr.push(randomcolor());}
    return arr;
}
function randomcolor(){
    var a=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var c=Math.floor(Math.random()*256);
    return  ("rgb(" + a + ", " + b + ", " + c + ")");
}
