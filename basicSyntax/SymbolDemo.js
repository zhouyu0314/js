let sym = Symbol();
console.log(typeof sym); // symbol
console.log(sym); // symbol()

/**
 * 调用Symbol()函数时，也可以传入一个字符串参数作为对符号的描述（description），将来可以通
 * 过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关
 */
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();

let fooSymbol = Symbol('foo');
console.log(fooSymbol);//Symbol(foo)

let otherFooSymbol = Symbol('foo');
console.log(otherFooSymbol);//Symbol(foo)

console.log(genericSymbol == otherGenericSymbol); // false
console.log(fooSymbol == otherFooSymbol); // false

/**
 * 使用全局符号注册表
 * Symbol.for()对每个字符串键都执行幂等操作。第一次使用某个字符串调用时，它会检查全局运
 * 行时注册表，发现不存在对应的符号，于是就会生成一个新符号实例并添加到注册表中。后续使用相同
 * 字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例。
 */
let fooGlobalSymbol = Symbol.for('foo');// 创建新符号
let otherFooGlobalSymbol = Symbol.for('foo');// 重用已有符号
console.log(typeof fooGlobalSymbol); // symbol
console.log(fooGlobalSymbol == otherFooGlobalSymbol); // true
//即使采用相同的符号描述，在全局注册表中定义的符号跟使用Symbol()定义的符号也并不等同：
console.log(fooSymbol == fooGlobalSymbol); // false
//查询全局注册表中是否有此符号的实例
