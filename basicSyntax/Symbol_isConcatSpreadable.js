/**
 根据ECMAScript 规范，这个符号作为一个属性表示“一个布尔值，如果是true，则意味着对象应
 该用Array.prototype.concat()打平其数组元素”。ES6 中的Array.prototype.concat()方法会
 根据接收到的对象类型选择如何将一个类数组对象拼接成数组实例。覆盖Symbol.isConcat-
 Spreadable 的值可以修改这个行为。
 数组对象默认情况下会被打平到已有的数组，false 或假值会导致整个对象被追加到数组末尾。类
 数组对象默认情况下会被追加到数组末尾，true 或真值会导致这个类数组对象被打平到数组实例。其
 他不是类数组对象的对象在Symbol.isConcatSpreadable 被设置为true 的情况下将被忽略。
 */

let initial = ['foo'];
let array = ['bar'];

console.log(array[Symbol.isConcatSpreadable]); // undefined
console.log(initial.concat(array)); // ['foo', 'bar'] 默认为undefined 则array这个数组会被打平追加到initial后面从而生成一个新的数组，此操作不会改变initial
console.log(initial);//[ 'foo' ]


array[Symbol.isConcatSpreadable] = false;//赋值flase 表示array这个数组对象被追加到数组末尾
console.log(initial.concat(array)); //[ 'foo', [ 'bar', [Symbol(Symbol.isConcatSpreadable)]: false ] ]

//定义一个数组 长度为3
let arrayLikeObject = { length: 3, 0: 'baz',1:'zhangsan',2:'lisi' };
console.log(arrayLikeObject.length);//1
for (let i = 0; i < arrayLikeObject.length; i++) {
    console.log(arrayLikeObject[i]);

}


console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined
console.log(initial.concat(arrayLikeObject)); // [ 'foo', { '0': 'baz', '1': 'zhangsan', '2': 'lisi', length: 3 } ]
// arrayLikeObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(arrayLikeObject)); // ['foo', 'baz']
// let otherObject = new Set().add('qux');
// console.log(otherObject[Symbol.isConcatSpreadable]); // undefined
// console.log(initial.concat(otherObject)); // ['foo', Set(1)]
// otherObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(otherObject)); // ['foo']


let person = {};
console.log(person);
person.name='张三';
console.log(person);
person['age'] = [];
console.log(person);
person.age.push(1);
person.age.push(2);
console.log(person);


