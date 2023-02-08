export default (options) =>{
  //做的最主要的事情就是拦截http请求
  //当我们使用fetch或者axios去请求
  //axios baseUrl 请求地址
  //当打给本地的开发服务器的时候  vite管
  return {
       configureServer(server){
        //服务器的相关配置
        //req:请求对象-》用户发过来的请求，请求头请求体 url cookie
        //res:响应对象,-res.header
        //next:是否交给下一个中间,调用next方法会将处理结果交给洗哦啊一个中间件
        server.middlewares.use((req,res,next)=>{
          if(req.url == '/api/users'){
            const mockStat = fs.statSync('mock')
            const isDirectory = mockStat.isDirector()
            if(isDirectory){
             let children = fs.readdirSync('mock')
            }
            res.end('helloword') //自动设置请求头 异步的
          }else{
             next()
          }
        })
       }
  }
}