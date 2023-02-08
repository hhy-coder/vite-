import mockJS from 'mockjs'
const userList = mockJS.mock({
  "data|100":[{
    name:'@cname', //表示生成不同的中文名
    "id|+1":1, //生成不同的id
    time:"@time"
  }]
})

module.exports = [
  {
    method :'post',
    url:"/api/users",
    response:({body})=>{
      //body -》请求体
      return {
        code:200,
        data:userList,
        msg:'success'
      }
    }
  }
]