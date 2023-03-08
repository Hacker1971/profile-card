function factioal(i){
    if (i==1){
        return 1;
    }
    return i * factioal(i-1);
}
let rezul = factioal(5);
console.log(rezul);