const swch = require('../src/index')

function 肉(){
  console.log('放一片' + this.meat)
}

function 蔬菜(inner){
  for(let vege of this.vegeList)
    console.log('放一片' + vege)
  inner()
}
function 面包(inner){
  console.log('放一片' + this.bread.bottom)
  inner()
  console.log('放一片' + this.bread.up)
}

const 三明治 = {
  meat: '牛肉',
  vegeList: ['生菜', '黄瓜'],
  bread: {
    bottom: '全麦面包',
    up: '老陈庄烤馍'
  },
  make: swch(面包, 蔬菜, 肉)
}

三明治.make()