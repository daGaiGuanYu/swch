const test1Glove = require('./test1-glove')
const test2Glove = require('./test2-glove')
const wear = require('../src/index')

let fn = wear({
  gloveList: [test1Glove, test2Glove],
  fn(){
    console.log('hello')
  }
})

fn()