let arr = [];

const num1 = [10,20,30];
const num2  = [40,50,60];


arr.push(...num1);//数组的结构 push的参数是一个可变参数 相当于push(10,20,30)
console.log(arr);
arr.push(...num2);
console.log(arr);