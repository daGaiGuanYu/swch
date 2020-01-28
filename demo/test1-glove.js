module.exports = function(fn, ...args){
  console.log('before-test1')
  fn(args)
  console.log('after-test1')
}