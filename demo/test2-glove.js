module.exports = function(fn, ...args){
  console.log('before-test2')
  fn(args)
  console.log('after-test2')
}