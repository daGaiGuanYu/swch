const wear = require('../src/index')

function a(){ // 执行任务的函数
  console.log('做一些事情')
}

a()

console.log('----------------') // 分割线

function b(fn){ // 这是一个手套，fn 是执行任务的函数
  console.log('之前做一些事情')
  fn()
  console.log('之后做一些事情')
}

a = wear(b, a) // 给 a 戴手套

a()