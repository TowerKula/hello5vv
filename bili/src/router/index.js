import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home"
import film from "../components/film"
import card from "../components/card"
import detail from "../components/detail"

import nowplaying from "../components/nowplaying";
import comingsoon from "../components/comingsoon";
//路由配置文件
Vue.use(Router) //注册路由模块

export default new Router({
  mode:'history',
  routes: [
  		{
  			path:"/home",
  			component:home
  		},
  		{
  			path:"/film",
  			component:film,
  			//二级路由，嵌套路由怎么写？
  			children:[
  				{
  					path:"nowplaying" ,//不写成 /film/nowplaying /nowplaying
  					component:nowplaying
  				},
  				{
  					path:"comingsoon",
  					component:comingsoon
  				},
  				{
  					path:"/film",
  					redirect:"/film/nowplaying"
  				}
  			]
  		},
  		{
  			path:"/card",
  			component:card
  		},
  		{
  			path:"/detail/:kerwinid", //动态路由
  			component:detail
  		},
  		//重定向
  		{
  			path:"*", //匹配所有的路径
  			redirect:"/home"
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