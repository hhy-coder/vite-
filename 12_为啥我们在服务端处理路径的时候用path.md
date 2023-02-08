 一定会去读文件
 我们如果写的是相对路径，那么也会尝试去拼接成绝对路径
 commonjs 规范 注入几个变量 _dirname

 ```js
 const fs = require('fs') // 处理文件的模块 （读文件，修改文件等一系列操作
 const result = fs.readFileSync('./variable.css') //我们希望基于当前文件去进行一个绝对路径的生成
 ```

 1. node端去读取文件或者操作文件的时候，如果发现你用的是相对路径，则会去使用process.cwd()来进行对应的拼接
 2. process.cwd:获取当前的node执行目录
 3. _dirname:始终返回的是
