function strLength(str){
    let length = str.length;
    return length;
}
console.log('Ex 1: Length of a string '+strLength('Scripting'));

function compNumbers(a,b){
    console.log('Ex 2: Comparing 2 numbers');
    if (a>b){
        console.log(a +' is greater than '+b);
    }
    else{
        console.log(b +' is greater than '+a);
    }
}
compNumbers(31,70);

function numBetween(a){
    console.log('Ex 3: Finding if the number is between 5000 and 9999');
    if(a<9999 && a>5000)
    return true;
    else
    return false;
}
console.log(numBetween(6000));

function cubeRoot(num){
    console.log('Ex 4: Finding cube root of a number');
    let x = Math.cbrt(num);
    console.log('Cube root of '+num + ' is '+ x);
}
cubeRoot(64);

function inchesToFeet(len){
    console.log('Ex 5: converting inches to feet');
    return len/12;
}
console.log(inchesToFeet(120));

function celsiusToFahrenheit(temp){
    let f = temp*1.8+32;
    console.log('Ex 6: converting degrees to fahrenheit');
    console.log(temp+' degree celsius = '+f+ ' degree fahrenheit');
}
celsiusToFahrenheit(25);

