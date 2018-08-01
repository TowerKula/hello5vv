<template>
	<div>
		<navbar></navbar>
		<sidebar></sidebar>
		<ul class="clearup">
			<li >
				<h3>channel</h3>
			</li>
		</ul>
	  
	</div>


</template>

<script type="text/javascript">
	import axios from "axios";
	import navbar from "./common/navbar"
	import sidebar from "./common/sidebar"
	export default {
		name:"channel",
		data(){
			return {
				filminfo:null
			}
		},
		mounted(){
			console.log(this.$route.params.nums);
			//https://api.bilibili.com/x/
			//api.bilibili.com/x/web-interface/ranking/region?rid=167&day=7&jsonp=jsonp
			axios.get(`https://m.maizuo.com/v4/api/film/coming-soon?page=2&count=7`).then(res=>res.json()).then(res=>{
				console.log(res);
				
				// this.filminfo = res.data.data.film//
				// console.log(this.filminfo.name);

				// this.$store.dispatch("mytitleAction",this.filminfo.name)
				// //dispatch("对应哪个action？"，传的值);
			})
		},
		components:{
			navbar,
			sidebar
		}
	}
	
</script>

<style scoped lang="scss">
	.clearup{clear: both;margin-top: 200px;}
</style>