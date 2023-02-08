const Koa = require('koa') // node不能用esmodule 必须使用commonjs
const fs = require('fs')
const app = new Koa() 
// 当我们安装node以后 node文件路径
//不同的宿主环境会给js赋予不同的能力

// node最频繁的事情就是在处理请求和操作文件

// 当请求来临以后直接进入到use注册的回调函数中
app.use(async (ctx)=>{ //context 上下文 request -->请求信息 响应信息
  console.log("ctx",ctx.request.ctx.response);
  if(ctx.request.url === '/'){
    // 这意味着其他人在找我们要跟路径的东西，比如baidu.com
    const indexContent = await fs.promise.readfile(path.resolve(_dirname,"./index.html"))
    ctx.response.body = indexContent;//作为响应体发给对应请求的人
    // 你响应体是填充好了 那你以什么形式发给他呢  你希望对方拿到你的东西的时候以什么方式去解析
    // json 
    ctx.response.set('content-Type',"text/html")

  }
  if(ctx.request.url === '/main.js'){
    // 这意味着其他人在找我们要跟路径的东西，比如baidu.com
    const mainJSContent = await fs.promise.readfile(path.resolve(_dirname,"./main.js"))
    ctx.response.body = mainJSContent;//作为响应体发给对应请求的人
    // 你响应体是填充好了 那你以什么形式发给他呢  你希望对方拿到你的东西的时候以什么方式去解析
    // json 
    ctx.response.set('content-Type',"text/javascript")
    
  }
  // 比如后台给我们一个获取用户信息的接口
  if(ctx.request.url === '/api/getUserInfo'){

  }
})

app.listen(5173,()=>{
  console.log('vite dec server');
})