function clickME(){
    const textState=  document.getElementById('text-chance');
    // console.log("textState");

    textState.innerText = 'This is chance text';

}

document.getElementById('Event').addEventListener('click',function(){
    const text_change = document.getElementById('text-chance');
    text_change.innerText= 'This is innertext and'
});