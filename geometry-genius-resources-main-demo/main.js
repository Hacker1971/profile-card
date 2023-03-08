let serial = 0;
//card-01
document.getElementById('tri-btn').addEventListener('click',function(){
    serial += 1;

   const triangle= document.getElementById('Triangle').innerText;
   const base = getvalueformint('base');
   const height = getvalueformint('height');
   const subresult =  0.5 * base * height;
   const result =subresult.toFixed(2);


  //  if(base<0 || height <0){
  //   alert("Error: Base and height must be positive numbers.");
  //   return;
  //  }
  

 displayData(triangle,result);

});
// card-02
document.getElementById('rect-btn').addEventListener('click',function(){
    serial += 1;

   const Rectangle= document.getElementById('Rectangle').innerText;
   const width = getvalueformint('width');
   const i = getvalueformint('i');
   const subresult = width * i;
   const result = subresult.toFixed(2);
   
   

 displayData(Rectangle,result);
});
//card-03
document.getElementById('para-btn').addEventListener('click',function(){
    serial += 1;

   const parallelogram= document.getElementById('parallelogram').innerText;
   const base = parseInt(document.getElementById('b-10').innerText);
   const  height = parseInt(document.getElementById('h-12').innerText);
   
   const result = base* height;

 displayData(parallelogram,result);
});
//card-04
document.getElementById('rhom-btn').addEventListener('click',function(){
    serial += 1;

   const Rhombus= document.getElementById('Rhombus').innerText;
   const 	Diagonal = parseInt(document.getElementById('d-16').innerText);
   const  	Diagonaltoo = parseInt(document.getElementById('d-8').innerText);
   
   const result = 0.5*  Diagonal * Diagonaltoo ;

 displayData(Rhombus,result);
});
//card-05
document.getElementById('pent-btn').addEventListener('click',function(){
    serial += 1;

   const Pentagon= document.getElementById('Pentagon').innerText;
   const 	pentagons = parseInt(document.getElementById('p-6').innerText);
   const  	base = parseInt(document.getElementById('b-10').innerText);
   
   const result = 0.5*  pentagons * base ;

 displayData(Pentagon,result);
});
//card-06
document.getElementById('ellip-btn').addEventListener('click',function(){
    serial += 1;

   const Ellipse= document.getElementById('Ellipse').innerText;
   const 	a = parseInt(document.getElementById('a-10').innerText);
   const  	b = parseInt(document.getElementById('b-4').innerText);
   
   const subresult = 3.1406*  a * b ;
   const result=subresult.toFixed(2);

 displayData(Ellipse,result);
});




// common function to display data
function displayData(name, result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td>${result}</td>
      <td>
      <button class=" bg-sky-400 rounded-xl text-white">Covert to m <sup>2</sup> </button>
      </td>
      
    `;
    container.appendChild(tr);
    document.getElementById("total-product").innerText = serial;
  }




// rooot function
function getvalueformint(id){
    const elementId = document.getElementById(id);
    const elementvalue = elementId.value;

    const value = strTonum(elementvalue);
     return value;


};
function strTonum(str){
    const num = parseFloat(str);

    return num;
};

//alert
function getvalueformint(id){
    const elementId = document.getElementById(id);
    const elementvalue = elementId.value.trim();
    
    if (elementvalue === '') {
        alert("Error: Input value cannot be empty.");
        return 0;
    }

    const value = strTonum(elementvalue);
    if (isNaN(value)) {
        alert("Error: Input value must be a number.");
        return 0;
    }
    return value;
}
