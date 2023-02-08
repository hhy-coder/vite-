// 预设环境里里面是会包含很多的插件
//语法降级 --》postcss-low-level
//编译插件 ---》psotcss -compliler

const postcssPresetEnv = require('postcss-preset-env')

//预设就是帮你一次性的把这些必要的插件都给你装上

module.exports = {
  plugins:[postcssPresetEnv(/* pluginOptions */)]
}