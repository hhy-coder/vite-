# vite性能优化

性能优化：
 - 开发时的构建速度优化：yarn dev /yarn start 运行后到呈现出来项目要多长时间
 - webpack在这方面下的功夫：cache-loader cache loader结果（如果两次构建源代码没有产生变化,则直接使用缓存，不调用loader, thread-loader,开启多线程去构建....

 - 页面性能指标:
 - 首屏渲染时：fcp (页面第一个元素的渲染时长 )
   - 懒加载：需要我们写代码实现的
   - http优化：强缓存、协商缓存
 - 页面中最大的元素的一个时长：lcp

- js逻辑：
  - 我们要注意副作用的清除：组件是会频繁的挂载和卸载  :如果在组件中有一个计时器（setTimeout)如果我们在卸载的时候不去清除这个计时器，下次我们再挂载的时候等于开了两个线程
  - 在写法上的注意事项：requstAnimation,requestIdleCallback  对浏览器的渲染原理有一定的认识 然后做这方面的优化 
    - 浏览器的帧率：16.6ms 去更新一次 （执行js 逻辑 以及重排重重绘....）
    - react: 提供了concurrency可终端渲染
    - 防抖/节流等函数用lodash 这个Js工具库
    - 对作用域的控制
    ```js
    const arr = [1,2,3]
    for(let i = 0,len = arr.length;i<len;i++){

    }
    ```

- css
  - 关注继承属性 ：能继承的就不要重复写
  - 尽量避免太过于深的css嵌套

-生产的优化： vite (rollup) webpack
 -优化体积：压缩，treeshaking,图片资源加载，cdn加速...

