let a = 'hello';
let b = true;
let c = null;
let d ;

console.log(a.toString());//'hello'
console.log(b.toString());//'true'
//console.log(c.toString());//报错 TypeError: Cannot read property 'toString' of null
//console.log(d.toString());//报错 TypeError: Cannot read property 'toString' of undefined


//对于null和undefined不可以调用其方法
console.log(String(a));//'hello'
console.log(String(b));//'true'
console.log(String(c));//'null'
console.log(String(d));//'undefined'

//模板字面量
console.log(`a的值是 ${a}`);//a的值是 hello

