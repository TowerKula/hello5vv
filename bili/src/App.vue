<template>
  <div>
       <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/common/navbar"
import sidebar from "./components/common/sidebar"

//es6 模块 导出方式
export default {
  name: 'App',
  data(){
    return {
      name:"kerwin11112222333355555",
      src:require("./assets/img2.png"),
      isShow:false
    }
  },
  methods:{
    handleClick(){
      this.name="xiaoming"
    }
  },
  computed:{
    computedSum(){
      return "我是计算属性"
    }
  },
  components:{
    navbar,  //注册成自己的组件
    sidebar
  }
}
</script>

<style>

*{
  margin: 0px;
  padding: 0px;
}

html,body{
  height: 100%;
  width: 100%;
}
.name{
  background-color: red;
}

.kerwinactive{
  background: red;
}

.left{
  float: left;
}

.right{
  float: right;
}

li{
  list-style: none;
}

section{
  padding-top: 50px;
}


h1,h2,h3,h4,h5,h6,b{font-weight: normal;}

a{
  text-decoration:none;
  }
img{
  display: block;
}


</style>
