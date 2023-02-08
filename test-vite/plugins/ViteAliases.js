// vite的插件必须返回给vite一个配置对象
const fs = require('fs')
const path = require('path')


export default ()=>{
  return{
    config(config,env){  //config目前的一个配置对象 production  env:mode
      //config 函数可以返回一个对象，这个对象是部分的viteconfig配置（其实就是我们想改的那一部分
      const result = fs.readdiSync(path.resolve(_dirname,'../src'))
      return{
        // envPrefix:'abc'
        //在这里返回一个resolve出去，将src目录下的所有文件夹进行别名控制
        resolve :{

        }
      }
    }
  }
} 