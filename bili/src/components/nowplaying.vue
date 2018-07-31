<template>
	<div>
		<ul>
			<li v-for="data in datalist" @click="handleClick(data.id)">
				<img :src="data.poster.origin"/>
				<h3>{{data.name}}</h3>
				<p>{{data.intro}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import router from "../router" //路由对象
	import axios from "axios";
	export default {
		name:"nowplaying",
		data(){
			return {
				datalist:[]
			}
		},

		mounted(){
			axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
				console.log(res.data);
				this.datalist = res.data.data.films
			})
		},

		methods:{
			handleClick(data){
				// console.log(data)
				router.push(`/detail/${data}`); // /detail/222
			}
		}
	}
</script>

<style scoped lang="scss">
	ul{
		li{
			overflow: hidden;
			padding:10px;
			img{
				float:left;
				width:100px;
			}
		}
	}
</style>