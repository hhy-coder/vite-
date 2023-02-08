modules.exports = (options) =>{
  return {
    //转换html的
    // 将我们插件的一个执行时机提前
    transformIndexHtml:{
      enforce:'pre', //帮助控制插件的执行时机
      transform:(html,ctx)=>{
        //ctx表示当前整个请求的一个执行期上下
        return html.replace(/< %= title %>/g,options.inject.data.titile)
      }
    }
  }
}