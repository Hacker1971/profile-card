 const lodedata = () => {
    // fetch('https://jsonplaceholder.typicode.com/todos/20')
    // .then((res) =>res.json())
    // .then((data) => console.log(data); )
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => catchdtata(json))
  }
  const catchdtata = (json) =>{
    const black = document.getElementById('lode');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>name:${json.title}</p>
    <p>id:${json.id}</p>
    
    `;
    black.appendChild(div);

  }
  lodedata  ();

