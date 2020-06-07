// 如果 fn 是 async 函数，则这里会被认为是普通函数，并且返回一个 Promise 实例，并不会改变原来的特性

module.exports = function(list, fn){
  let glove
  while(glove = list.pop())
    fn = wear(glove, fn)
  return fn
}

function wear(glove, fn){
  return new Proxy(fn, {
    apply(target, that, args){
      return glove.call(that, target, ...args)
    }
  })
}