const wear = require('../src/index')

function fn(){ // 执行任务的函数
  console.log('做一些事情')
}
fn()

console.log('----------------') // 分割线

function glove(fn){ // 这是一个手套，fn 是执行任务的函数
  console.log('之前做一些事情')
  fn()
  console.log('之后做一些事情')
}

fn = wear([glove], fn) // 给 fn 戴手套
fn()