//functions

let x = 10 + 30

function addNumbers(a,b){
    return a+b
}

function areaOfTriangle(b,h){
    var area = 1/2 * b * h;
    console.log('Area of the triangle with base '+b+ ' and height '+h+' is ' +area);
}

function fibbanocci(fib){
    console.log('Fibbanocci series')
    var i=0, j=1, temp;
    console.log(i);
    console.log(j);
    for(var count=0; count<fib-2; count++){
        temp = i+j;
        console.log(temp);
        i=j;
        j=temp;
    }
}

function palindrome(p){
    var l = p.length;
    var pReverse = '';
    for(var i=l-1; i>=0; i--){
        pReverse = pReverse+p.charAt(i);
    }
    console.log(pReverse);
    if(p==pReverse){
        console.log('The Srting is a palindrome');
    }
    else{
        console.log('The string is not a palindrome');
    }
}

function isOdd(a){
    var r = a%2;
    if (r == 0){
        console.log(a+' is even')
    }
    else{
        console.log(a+' is odd')
    }
}

function pascal(totalRows){
    var row;
    let col=[];
    let prevCol = []; 
    for(row=1; row<=totalRows; row++){
        for(i=0; i<row; i++){
            if(i==0 || i==row-1){
                col[i]=1;
            }
            else{
                col[i]=prevCol[i]+prevCol[i-1];
            }
        }
        console.log('Row'+i+': '+col);
        prevCol=col;
        col = [];
    }
}

//console.log(addNumbers(15,20))

//fibbanocci(10);

areaOfTriangle(10,15);

palindrome('rottor')

isOdd(24)

pascal(7);