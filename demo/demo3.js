const wear = require('../src/index')

function a(){ // 执行任务的函数
  console.log('做一些事情')
}

a()

console.log('----------------') // 分割线

function b(fn){
  console.log('b前')
  fn()
  console.log('b后')
}

function c(fn){
  console.log('c前')
  fn()
  console.log('c后')
}

a = wear(b, c, b, a) // 给 a 戴手套

a()