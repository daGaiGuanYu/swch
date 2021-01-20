const swch = require('../src/index')

function 牛肉(){
  return new Promise( res => {
    console.log('开始煎牛肉，要煎 6 秒')
    setTimeout( () => {
      console.log('煎好了，放一片牛肉')
      res()
    }, 6000)
  })
}

async function 蔬菜(inner){
  await 放生菜()
  await inner()
  await 放黄瓜()

  function 放生菜(){
    return new Promise(res => {
      console.log('放生菜，生菜要烫 3 秒')
      setTimeout(() => {
        console.log('放生菜')
        res()
      }, 3000)
    })
  }
  function 放黄瓜(){
    return new Promise(res => {
      console.log('放黄瓜，为了食品安全，我们高温杀菌，烫 1 秒')
      setTimeout(() => {
        console.log('放黄瓜')
        res()
      }, 1000)
    })
  }
}
async function 面包(inner){
  console.log('放一片面包')
  await inner()
  console.log('放另一片面包')
}

const 牛肉三明治 = swch(面包, 蔬菜, 牛肉)

牛肉三明治()