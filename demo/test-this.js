const wear = require('../src/index')

function f(name, tel){
  console.log(this.year, name, tel)
}

function glove(fn, ...args){
  console.log('前')
  fn.apply(this, args)
  console.log('后')
}

const a = {
  year: 20,
  f: wear([glove], f)
}
a.f('ming', 110)