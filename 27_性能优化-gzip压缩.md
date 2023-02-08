# [构建优化] gzip压缩

文件资源太大了 
js ---> 2000kb http传输

将所有的静态文件进行压缩，已达到减少体积的目的

服务端 -》读文件-》压缩文件
客户端收到压缩包 --》解压缩

chunk -》块

从入口文件到他的一系列依赖最终打包成js文件叫做块

块最终都会映射为js文件，但是快不是js文件

在前端配置vite plugin
```js
plugins:[
  viteCompression()
]

```
然后给后端或者运维说 我们前端配置了压缩方式 gzip
 请求index.html index.js的时候就不要压缩

 服务端读取gzip文件（.gz) 设置一个相应头 content-encoding  -->gzip代表浏览器该文件是使用gzip压缩过的

 浏览器收到相应结果 发现响应头里有gzip对应字段 解压（浏览器承担一定的解压时间

 体积不是很大的时候不要用gzip压缩