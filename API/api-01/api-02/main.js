const lodedata = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => countData(data))
      .catch(error => console.log(error)); // Add a catch block to handle errors
  };
  
  const countData = (data) => {
    const user = document.getElementById('lode');
    if (user) {
      const div = document.createElement('div');
      div.innerHTML = `
      <img src= " ${data.results[0].picture.medium}"></img>
        <h3>Name : ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h3>
        <h3>Gender : ${data.results[0].gender}</h3>
        <h3> Age : ${data.results[0].dob.age}</h3>
        <h3>phone : ${data.results[0].phone}</h3>
        <h3>email : ${data.results[0].email}</h3>
        
      `;
      user.appendChild(div);
       // Create a refresh button
    const button = document.createElement('button');
    button.innerText = 'Refresh';
    user.appendChild(button);

    // Add an event listener to the button to reload the data
    button.addEventListener('click', () => {
      user.removeChild(div); // Remove the existing data
      user.removeChild(button); // Remove the button
      lodedata(); // Reload the data
    });
    } else {
      console.log('Error: could not find user element');
    }
  };
  
  lodedata(); // Call the function to initiate the API request
  