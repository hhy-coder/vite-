import {defineConfig} from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins:[
    checker({
    typescript:true
  })
 ],
 "build":{
  "minify":false,
  "rollupOptions":{
    "output":{
      "manualChunks":(id:string)=>{
        //ts认为你这个当前的环境不在es6以后 (不确定环境的话就是害怕没有includes方法)
         if(id.includes('node_modules')){
             return "vendor"
         }
      }
    }
  }
 }
})