
let serial = 0;
let total = 0;
const firstTotalArr = [];

document.getElementById('first-card').addEventListener('click', function function1() {
  serial += 1;

  const firstname = document.getElementById('first-name').innerText;
  const firstprice = document.getElementById('first-price').innerText;
  const firstquantity = document.getElementById('first-quantity').innerText;
  let firstTotal = parseInt(firstprice) * parseInt(firstquantity);
  firstTotalArr.push(firstTotal);
  total +=firstTotal;
 

  const tableContainer = document.getElementById('table-container');

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${firstname}</td>
    <td>${firstprice}</td>
    <td>${firstquantity}</td>
    <td>${firstTotal}</td>
  `;
  tableContainer.appendChild(tr);
  disabledButton("first-card");
  document.getElementById('total-product').innerText=serial;
  document.getElementById('card').innerText=serial;
  document.getElementById('card-2').innerText=serial;
  

});
document.getElementById('second-card').addEventListener('click', function() {
    serial += 1;
  
    const firstname = document.getElementById('card-title').innerText;
    console.log(firstname);
    const firstprice = document.getElementById('card-price').innerText;
    const firstquantity = document.getElementById('card-quantity').innerText;
    let firstTotal = parseInt(firstprice) * parseInt(firstquantity);
    firstTotalArr.push(firstTotal);
    total +=firstTotal;
    disabledButton("second-card");
  
    const tableContainer = document.getElementById('table-container');
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${firstname}</td>
      <td>${firstprice}</td>
      <td>${firstquantity}</td>
      <td>${firstTotal}</td>
    `;
    tableContainer.appendChild(tr);
    document.getElementById('total-product').innerText=serial;
    document.getElementById('card').innerText=serial;
    document.getElementById('card-2').innerText=serial;
  });
document.getElementById('third-card').addEventListener('click', function() {
    serial += 1;
  
    const firstname = document.getElementById('third-title').innerText;
    console.log(firstname);
    const firstprice = document.getElementById('third-price').innerText;
    const firstquantity = document.getElementById('third-quantity').innerText;
    let firstTotal = parseInt(firstprice) * parseInt(firstquantity);
    firstTotalArr.push(firstTotal);
    total +=firstTotal;
    disabledButton("third-card");
  
    const tableContainer = document.getElementById('table-container');
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${firstname}</td>
      <td>${firstprice}</td>
      <td>${firstquantity}</td>
      <td>${firstTotal}</td>
    `;
    tableContainer.appendChild(tr);
    document.getElementById('total-product').innerText=serial;
    document.getElementById('card').innerText=serial;
    document.getElementById('card-2').innerText=serial;
  });
document.getElementById('second-last').addEventListener('click', function() {
    serial += 1;
  
    const firstname = document.getElementById('four-title').innerText;
    console.log(firstname);
    const firstprice = document.getElementById('four-price').innerText;
    const firstquantity = document.getElementById('four-quantity').innerText;
    let firstTotal = parseInt(firstprice) * parseInt(firstquantity);
    firstTotalArr.push(firstTotal);
    total +=firstTotal;
    disabledButton("second-last");

  
    const tableContainer = document.getElementById('table-container');
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${firstname}</td>
      <td>${firstprice}</td>
      <td>${firstquantity}</td>
      <td>${firstTotal}</td>
    `;
    tableContainer.appendChild(tr);
    document.getElementById('total-product').innerText=serial;
    document.getElementById('card').innerText=serial;
    document.getElementById('card-2').innerText=serial;
  });
  
document.getElementById('last-card').addEventListener('click', function() {
    serial += 1;
  
    const firstname = document.getElementById('last-title').innerText;
    console.log(firstname);
    const firstprice = document.getElementById('first-input').value;
    const firstquantity = document.getElementById('second-input').value;
    
      let firstTotal = parseInt(firstprice) * parseInt(firstquantity);
      disabledButton("last-card");
  
    const tableContainer = document.getElementById('table-container');
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${firstname}</td>
      <td>${firstprice}</td>
      <td>${firstquantity}</td>
      <td>${firstTotal}</td>
    `;
    tableContainer.appendChild(tr);
    document.getElementById('total-product').innerText=serial;
    document.getElementById('card').innerText=serial;
    document.getElementById('card-2').innerText=serial;
  });


  function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  };
  
