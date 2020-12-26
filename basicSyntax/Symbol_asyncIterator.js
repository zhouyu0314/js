/**
 * Symbol.asyncIterator 符号指定了一个对象的默认异步迭代器。如果一个对象设置了这个属性，
 * 它就是异步可迭代对象，可用于for await...of循环。
 */

class Foo {
    async* [Symbol.asyncIterator]() {
    }
}

let f = new Foo();
console.log(f[Symbol.asyncIterator]());//Object [AsyncGenerator] {}


class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }

    async* [Symbol.asyncIterator]() {
        while (this.asyncIdx < this.max) {
            yield new Promise((resolve) => resolve(this.asyncIdx++));
        }
    }
}

async function asyncCount() {
    let emitter = new Emitter(5);
    for await(const x of emitter) {
        console.log(x);
    }
}

asyncCount();

// 0
// 1
// 2
// 3
// 4