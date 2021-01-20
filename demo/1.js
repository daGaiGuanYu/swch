const swch = require('../src/index')

function 牛肉(){
  console.log('放一片牛肉')
}
function 煎蛋(){
  console.log('放一个煎蛋')
}

function 面包(inner){
  console.log('放一片面包')
  inner()
  console.log('放另一片面包')
}

const 牛肉三明治 = swch(面包, 牛肉)
const 煎蛋三明治 = swch(面包, 煎蛋)

console.log('做一个牛肉三明治:')
牛肉三明治()

console.log('\n做一个煎蛋三明治:')
煎蛋三明治()

console.log('\n再做一个煎蛋三明治:')
煎蛋三明治()