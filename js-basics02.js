let names = []
//console.log(names);
names = ['Thein','Kavin','Prem','Rea','Meck'];
//console.log(names);
//console.log(names[0])
//console.log(names.indexOf('Meck'));

let student = {
    name: 'Kavin',
    age: 11,
    address: '11456 Oakhampton Way',
    hobbies: ['reading','drums','games','travel']
}

let arr1=[1,2,8,5,2,1]
console.log(arr1);
let arr2 = [];
arr2[0]=1
arr2[1]=arr1[1]+arr1[0];
arr2[2]=arr1[2]+arr1[1];
arr2[3]=arr1[3]+arr1[2];
arr2[4]=arr1[4]+arr1[3];
arr2[5]=arr1[5]+arr1[4];
arr2[6]=1;
console.log(arr2);
arr1=arr2
console.log('Arr1: '+arr1);
console.log(student.address);