const wear = require('../src/index')

function a(num){ // 执行任务的函数
  console.log('num 是: ' + num)
  return num > 0
}

console.log(a(1))

console.log('----------------') // 分割线

function b(fn, num){ // 这是一个手套，fn 是执行任务的函数
  console.log('之前做一些事情')
  let result = fn(num-1)
  console.log(result)
  console.log('之后做一些事情')
  return true
}

a = wear(a, b) // 给 a 戴手套

console.log(a(1))