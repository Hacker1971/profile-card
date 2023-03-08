function btn_white(){
    document.body.style.background = 'white';
    document.body.style.color = 'black';

}

function click_1(){
    document.body.style.backgroundColor= 'black';
    document.body.style.color = 'white';
}

const makeBlueButton = document.getElementById('btn-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.background= 'blue';
    document.body.style.color = 'white';

}

const makeTomato = document.getElementById('btn-tomato');
       makeTomato.onclick = function (){
        document.body.style.background ='tomato';
        
       }
 
       const makePink= document.getElementById('btn-pink');
       makePink.addEventListener('click',function(){
        document.body.style.background= 'pink';
        document.body.style.color = 'red';
        
       })