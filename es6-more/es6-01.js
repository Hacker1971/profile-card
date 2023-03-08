const performOperation= (num1, num2, operation) => {
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      case 'modulus':
        result = num1 % num2;
        break;
      default:
        console.log('invalid operation');
        return;
    }
    console.log(result);
  };
  performOperation(10, 5, 'add');       // 15
  performOperation(10, 5, 'subtract');  // 5
  performOperation(10, 5, 'multiply');  // 50
  performOperation(10, 5, 'divide');    // 2
  performOperation(10, 5, 'modulus');   // 0
  performOperation(10, 5, 'foobar');  