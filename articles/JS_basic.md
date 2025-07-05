# JavaScript 基础知识速查

## 1. 变量声明

```js
var a = 1;      // ES5，函数作用域
let b = 2;      // ES6，块级作用域
const c = 3;    // 常量，块级作用域
```

## 2. 数据类型

- Number（数字）
- String（字符串）
- Boolean（布尔）
- Null（空）
- Undefined（未定义）
- Object（对象）
- Symbol（符号，ES6）

```js
let n = 123;
let s = 'hello';
let flag = true;
let arr = [1, 2, 3];
let obj = { name: 'Tom', age: 18 };
```

## 3. 流程控制

```js
if (a > 0) {
  // 条件分支
} else {
  // ...
}

for (let i = 0; i < 5; i++) {
  // 循环
}

while (flag) {
  // ...
}
```

## 4. 函数

```js
function add(x, y) {
  return x + y;
}

// 箭头函数（ES6）
const sub = (x, y) => x - y;
```

## 5. 对象与数组

```js
let person = { name: 'Alice', age: 20 };
console.log(person.name);

let arr = [1, 2, 3];
arr.push(4);
console.log(arr[0]);
```

## 6. 常用内置方法

```js
// 字符串
let str = 'hello world';
console.log(str.toUpperCase());

// 数组
let nums = [1, 2, 3];
nums.map(x => x * 2); // [2, 4, 6]
nums.filter(x => x > 1); // [2, 3]

// 对象遍历
for (let key in person) {
  console.log(key, person[key]);
}
```

## 7. 模块与导入导出（Node.js）

```js
// 导出
module.exports = add;
// 导入
const add = require('./add');
```

## 8. 异步与回调

```js
// 回调
setTimeout(() => {
  console.log('1秒后输出');
}, 1000);

// Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(1000).then(() => console.log('1秒后输出'));

// async/await
async function test() {
  await delay(1000);
  console.log('1秒后输出');
}
test();
```

## 9. 错误处理

```js
try {
  throw new Error('出错了');
} catch (e) {
  console.log(e.message);
}
```

---

> 这是 JS 基础知识速查，建议结合实际代码多练习、调试，加深理解！
