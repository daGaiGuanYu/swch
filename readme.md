# Glove
由于 glove 在 npm 上已被注册，所有安装时：
```
  npm install wear-glove
```
其实这两个词更能描述这个仓库的用途

## 用途
+ aop
+ clone 仓库后，运行 ```npm run demo``` 查看效果

## 给手套传入参数
请使用工厂模式
``` js
function factory(args){
  return async function(fn, ...rawArgs){ // 这个函数才是真正的手套
    // 前置操作
    let result = await fn()
    // 后置操作
    
    return result
  }
}
```
