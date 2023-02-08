# 手写vite-plugin-mock

- config  配置文件
- configureSever  配置服务端处理
- transformIndexHtml 配置转换html

拿node来说：
一个请求到来以后-》node将请求交给n个中间件处理（判断是否为静态资源，index.html,会直接将静态资源返回