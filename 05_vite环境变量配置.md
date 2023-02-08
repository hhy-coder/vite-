# vite环境变量配置

> 环境变量：会根据当前的代码环境产生值放入变化的变化就叫做环境变量
# 涉及到vite.config.js中的一些配置
- root
- envDir:用来配置当前环境变量的文件地址
- vite给我们提供了一些补偿措施：我们可以调用vite的loadEnv来手动确定env文件
process.cwd方法：返回当前node进程的工作目录

.env:所有环境变量都需要用到的环境变量
.env.development:开发环境需要用到的环境变量（默认情况下vite将我们的开发环境取名为development）
.env.production:生产环境需要用到的环境变量（默认情况下vite将我们的开发环境取名为production）

- yarn dev --mode development 会将mode设置为development传递进来

当我们调用loadenv的时候，会做如下几件事：
1. 直接找到.env文件解析 并解析其中的环境变量 并放进一个对象里
2. 将传进来的mode 这个变量的值进行拼接 ```.env.development```,并根据我们提供的目录去取对应的配置文件并进行解析，并放进一个对象中
3. 


代码环境：
1. 开发环境
2. 测试环境
3. 预发布环境
4. 灰度环境
5. 生产环境

举例：百度地图sdk
APP_KEY: 测试环境和生产还有开发环境是不一样的key

在vite中的环境变量处理：
dotenv这个第三方库，
dotenv会自动读取.env文件,并解析这个文件中的对应环境变量 并将其注入到process对象下

补充一个小知识：
1. 为什么vite.config.js 可以书写成esmoudle的形式,这是因为vite他在读取vite.config.js的时候会率先node去解析文件语法,如果发现你是esmoudle规范会直接替换成commonjs规范