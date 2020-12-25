let a = 3;
let b  = 3.14;
let c = '4';
let d = '4.14';
let e = '';
console.log('*******************Number()***********************');
console.log(Number(c));//4
console.log(Number(d));//4.14
console.log(Number(e));//0

console.log('*******************parseInt() 向下取整***********************');
console.log(parseInt(b));//3
console.log(parseInt(d));//4
console.log(parseInt(e));//NaN
console.log(parseInt('123asd'));//123

console.log('*******************parseFloat()***********************');
console.log(parseFloat(c));//4
console.log(parseFloat(d));//4.14
console.log(parseFloat(e));//NaN
