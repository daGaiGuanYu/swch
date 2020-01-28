module.exports = function({ fn, gloveList, ...properties }){
  if(!gloveList)
    gloveList = []
  
  for(let i=gloveList.length-1; i>=0; i--)
    fn = wear(fn, gloveList[i])
  
  Object.assign(fn, properties)
  return fn
}

function wear(fn, glove){
  return function(...args){
    glove(fn, ...args)
  }
}
