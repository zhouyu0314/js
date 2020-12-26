function Foo() {}
let f = new Foo();
console.log(f instanceof Foo); // true 判断此实例是不是此类型的实例

//ES6写法
class Bar {}
let b = new Bar();
console.log(Bar[Symbol.hasInstance](b)); // true

class Baz extends Bar {
    static [Symbol.hasInstance]() {
        return false;
    }
}

let c = new Baz();
console.log(Bar[Symbol.hasInstance](c)); // true
console.log(c instanceof Bar); // true
console.log(Baz[Symbol.hasInstance](c)); // false,在ES6 中，instanceof 操作符会使用Symbol.hasInstance 函数来确定关系。因为重写了此方法，所以是false
console.log(c instanceof Baz); // false