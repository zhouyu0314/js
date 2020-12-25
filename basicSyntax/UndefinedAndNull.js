let person;//对于没有赋值的变量
console.log(person);//undefined

if (person) {//undefined是个假值
    console.log('A');
}else{
    console.log('B'); //B
}
//************************************************
//在定义将来要保存对象值的变量时，建议使用null 来初始化

let student = null;
console.log(student);//null
console.log(typeof student);//object

if (student) {//null也是个假值
    console.log('A');
}else{
    console.log('B');//B
}