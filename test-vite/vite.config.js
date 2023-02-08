import {defineConfig} from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 策略模式写法
const envResolver = {
  'build':()=>Object.assign({}, viteBaseConfig,viteDevConfig  ),
  'serve':()=>Object.assign({},viteBaseConfig,viteProdConfig )
}

export default defineConfig(({command,mode}) => {
// build还是serve主要取决于我们敲的命令事开启 开发环境 还是 生产环境

// if(command==='build'){
// // 代表生产环境的配置
// }else{
// // 代表开发环境的配置
// }
//当前env文件坐在的目录
const env = loadEnv(mode,process.cwd(),'')
return envResolver[command]()
})