const wear = require('../src/index')

function fn(){ // 执行任务的函数
  console.log('做一些事情')
}
fn()

console.log('----------------') // 分割线

function glove1(fn){
  console.log('1前')
  fn()
  console.log('1后')
}

function glove2(fn){
  console.log('2前')
  fn()
  console.log('2后')
}

fn = wear([glove1, glove2, glove1], fn) // 给 a 戴手套
fn()