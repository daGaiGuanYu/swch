const swch = require('../src/index')

function 牛肉(){
  console.log('放一片牛肉')
}

function 蔬菜(inner){
  console.log('放一片黄瓜')
  inner()
  console.log('放一片生菜')
}
function 面包(inner){
  console.log('放一片面包')
  inner()
  console.log('放另一片面包')
}

const 牛肉三明治 = swch(面包, 蔬菜, 牛肉)

牛肉三明治()