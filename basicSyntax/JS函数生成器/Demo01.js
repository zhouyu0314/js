/**
 * 1、函数生成器特点是函数名前面有一个‘*’

 　　2、通过调用函数生成一个控制器

 　　3、调用next()方法开始执行函数

 　　4、遇到yield函数将暂停

 　　5、再次调用next()继续执行函数
 * @returns {IterableIterator<*>}
 */
function* fn() {
    console.log('first');
    console.log(1);
    //暂停！
    yield;
    //调用next方法继续执行
    console.log(2);
}

//fn().next();//1
//fn().next();//1

let m = fn();//通过调用函数生成一个控制器
m.next();//first    1
m.next();//2

/**
 * 除了暂停和继续执行外，生成器同时支持传值。
 */
console.log('*******************fn1***********************');
function* fn1() {
    var a = yield 'hello';
    yield;
    console.log(a);
}
let iter = fn1();//通过调用函数生成一个控制器
let res = iter.next();//执行到第一个yield
console.log(res.value); //hello
//如果不给yield 赋值 输出的a就是undefined 如果给赋值 那么最后打印的就是该值
iter.next();

iter.next(); //undefined

