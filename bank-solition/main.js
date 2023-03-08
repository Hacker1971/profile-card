document.getElementById('btn-deposit').addEventListener('click', () =>{
    const depositField = document.getElementById('deposit-field').value;
    const depositValue = document.getElementById('deposit');
    depositValue.innerText = Number(depositField);
});

