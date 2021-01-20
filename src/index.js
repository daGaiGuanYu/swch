// 如果 fn 是 async 函数，则这里会被认为是普通函数，并且返回一个 Promise 实例，并不会改变原来的特性

module.exports = function(...list){
  let food = list.pop()
  let bread
  while(bread = list.pop())
    food = make(bread, food)
  return food
}

function make(bread, meat){
  return function(){
    return bread.call(this, meat.bind(this), ...arguments)
  }
}