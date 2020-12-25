const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const person = [{name:'张三',age:20},{name:'李四',age:21},{name:'王五',age:22},{name:'赵六',age:23}];

/**
 * 使用in得到的是数组的下标
 */
for (const index in array) {
    console.log(index, array[index]);
    /*
0 A
1 B
2 C
3 D
4 E
5 F
6 G
 */
};
console.log('*******************for (let p in person)***********************');
for (const p in person){
    console.log(p);//0 1 2 3
}

console.log('********************array.forEach(v => console.log(v));**********************');



/**
 * 遍历每一个节点
 * A B C D E F G
 */
array.forEach(v => console.log(v));
console.log('*********************for (let arrayElement of array) *********************');
/**
 * 遍历每一个节点
 * A B C D E F G
 */
for (const arrayElement of array) {
    console.log(arrayElement);
}console.log('******************************************');