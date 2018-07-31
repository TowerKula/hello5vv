<template>
	<div>
		<swipe class="my-swipe" :auto="2000">
		  <swipe-item class="slide1" v-for="data in looplist" :key="data.id">
		  	<img :src="data.imageUrl"/>
		  </swipe-item>
	
		</swipe>

		<ul>
			<li v-for="data in datalist">
			   <img :src="data.cover.origin"/>
					<h3>{{data.name}}</h3>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios";
	require('vue-swipe/dist/vue-swipe.css');//引入css

// in ES6 modules
	import { Swipe, SwipeItem } from 'vue-swipe';


	export default {
		name:"home",
		data(){
			return {
				datalist:[],
				looplist:[]
			}
		},
		mounted(){
			//发ajax 请求的正在热映的数据
			fetch("/v4/api/film/now-playing?__t=1532675055022&page=1&count=5").then(res=>res.json()).then(res=>{
				console.log(res);
				this.datalist = res.data.films
			})



			//请求轮播的数据 基于promise
			
			axios.get("/v4/api/billboard/home?__t=1532916098152").then(res=>{
				console.log(res.data)//后端返回的数据在res.data
			
				this.looplist = res.data.data.billboards //轮播数组
			})


			//post 请求
			//axios.post("/post",{name:"kerwin",age:100}).then(res=>{
			//console.log(res.data)})


	   //   https://m.maizuo.com/v2/api/film/now-playing?__t=1532675055022&page=1&count=5
	   		// fetch  
	   		// 1.0  vue-resource  (现在不维护)
	   		// 2.0  axios (第三方库)

		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem
		}
	}
</script>

<style scoped lang="scss">
	ul{
		img{
			width:100%;
		}
	}

	.my-swipe {
	  height: 200px;

	  img{
	  	width: 100%;
	  }
	}


</style>