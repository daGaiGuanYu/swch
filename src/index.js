// 如果 fn 是 async 函数，则这里会被认为是普通函数，并且返回一个 Promise 实例，并不会改变原来的特性

module.exports = function(...list){
  let fn = list.pop()
  
  let glove
  while(glove = list.pop())
    fn = wear(fn, glove)
  
  return fn
}

function wear(fn, glove){
  return function(...args){
    return glove(fn, ...args)
  }
}
