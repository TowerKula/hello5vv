import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'//首页--康
import channel from '../components/channel'//列表页--刘
import video from '../components/video'//详情页--姜
import ranking from '../components/ranking'//排行榜-康
import search from '../components/search'//搜索-覃
import space from '../components/person/space'//登录注册-覃
import register from '../components/person/register'//注册-覃
import login from '../components/person/login'//登录-覃
import recommend from '../components/recommend'

//路由配置文件
Vue.use(Router) //注册路由模块

export default new Router({
  mode:'history',
  routes: [
  		{
  			path:"/index",
  			component:index
  		},
      {//列表页--刘
        path:"/channel/:nums",
        component:channel
      },
      {//详情页--姜
        path:"/video/:nums",
        component:video
      },
      {//排行榜-康
        path:"/ranking/:nums",
        component:ranking
      },
      {//搜索-覃
        path:"/search",
        component:search
      },
      {//登录注册-覃
        path:"/space",
        component:space
      },
       {//注册-覃
        path:"/register",
        component:register
      },
       {//登录-覃
        path:"/login",
        component:login
      },
      {//登录-liu
        path:"/recommend/:nums",
        component:recommend
      },
  		//重定向
  		{
  			path:"*", //匹配所有的路径
  			redirect:"/index"
  		},
      {
        path:"/ranking",
        redirect:"/ranking"
      }
      

  ]
})


// app.use("/login",login)

// app.use("/register",register)
// 
// /a/a1/aa3
// /a/a2/aa2
// req.params 
/*
  1. 一级路由  /home /film /card
  2. 声明式路由导航 router-link
  3. 重定向
  4. /film/comingsoon  嵌套路由(二级路由)
  5. 动态路由 
     (1)怎么跳转？编程式导航跳转
     router.push("/detail")

     (2) /detail/:kerwinid 只能匹配这种格式的路径
     /detail/aaaa

      /detail/aaaa2/bbbbb2

     (3)怎样获取动态路由传来的参数
        this.$route.params.kerwinid
  6. mode （前端）
      （1）hash  #/home
      （2）history /home
           注意：/detail，真的会向后端路由发起请求， 如果后端没有定义的话
            重定向到根路径 localhost:8080/ 让前端vue路由接管

 */