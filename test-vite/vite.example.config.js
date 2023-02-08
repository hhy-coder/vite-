import {defineConfig} from 'vite'
import VitePluginMock from './plugins/VitePluginMock'
export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(_dirname,"./src"),  //设置别名，以后我们在其他组件中可以使用@来代替src这个目录
      "@assets":path.resolve(_dirname,'./src/assets') 
    }
  },
  optimizeDeps:{
    exclud:[] //将指定数组中的依赖不进行依赖预构建
  },
  envPrefix:'ENV',//配置vie注入客户端环境变量进行校验
css:{ //对css行为进行配置
  modules:{ //是对css模块化的默认行为进行覆盖
    localsConvention:'camelCaseOnly',
    scopeBehaviour:'global',
    generateScopedName:'[name]_[module]_[hash]',
    hashPrefix:'',
    globalModulePaths:' '
  },
  preprocessorOptions:{ //key+config key 代表预处理器的类名
    less:{ //整个的配置对象都会最终给到less的执行参数（全局参数）中去
      //在webpack中就是在 less-loader中配置
      math:'always',
      globalVars:{ //全局变量
       mainColor:'red'
      }
    },
  devSourceMap:'true' ,//开启css的sourceMap(文件索引)
  //vite的诞生一定会让postcss再火一次
  postcss:{
    plugins:postcssPresetEnv({
      //防止有时候postcss不编译正常路径  导致有时候编译不了
      importFrom:path.resolve(_dirname,"./variale.css"),//就好比你现在让postcss去知道 有一些全局变量他需要记下来

    })
  }
  },


},
build:{  //构建生产包的一些配置策略
  rollupOptions:{ //配置rollup的一些构建策略
    output:{ //控制输出
     assetFileNames:'[hash].[name].[ext]'
    }
  },
  assetsInlineLimit:4096000, //配置要不要转base64
  outDir:'testDist',//配置输出目录
  assetsDir:'static',//配置输出目录中的静态资源目录
  emptyOutDir:true, //  清除打包目录下的文件，构建的时候重新输出
} ,
//插件
plugins:[
  //生成别名配置，跟前面的resolve.alias 的作用有类似
  Vitealiases(),

  //自己写的改变html内容的插件
  CreateHtmlPlugin({
    inject:{
      data:{
        titile:'主页'
      }
    }
  }),
  //开启开发服务器
  // viteMockServe()
  //用我们自己写的
  VitePluginMock(),
  //cdn加速
  viteCDNPlugin({
    modules:[{
      name:'lodash',
      var:'_',
      path:"https://cdn.js********"  //因为在vite中不能像webapck、js一样直接在头部引入
    }]
  })
],
//在这里配置rollup
build:{
  rollupOptions:{
    external:["loadsh"]
  }
}

})

// vite在打包生产的时候用的是rollup