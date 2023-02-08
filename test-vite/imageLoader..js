// 主要是用来帮助学习加载动态资源图片

import sylasPicUrl from '@assets/images/sylas.png' //原始字符串的replace操作

//服务端 他会去读取这个图片文件的内容 ---》Buffer 二进制的字符串

const img = document.createElement('img')
document.body.append(img)