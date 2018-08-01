<template>
	<div>
		<navbar></navbar>
		<sidebar></sidebar>
		<!-- <ul>
			<li v-for='info in  videoinfo'>
					<img :src="info.pic">
			</li>
		</ul> -->
		<img :src="videoinfo.pic" alt="">
	  
	</div>


</template>

<script type="text/javascript">
	import axios from "axios";
	import navbar from "./common/navbar"
	import sidebar from "./common/sidebar"
	export default {
		name:"myvideo",
		data(){
			return {
				videoinfo:null
			}
		},
		mounted(){
			console.log(this.$route.params.nums);

			axios.get(`/x/web-interface/ranking/region?rid=20&day=7&jsonp=jsonp`).then(res=>{
				console.log(res.data);
				// this.videoinfo = res.data.data;
				this.videoinfo ={pic:'http://i2.hdslb.com/bfs/archive/7d8fdc99a86aa35cd76169c768062cac687e93c5.jpg'}
				
				
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
	img{width: 100%}
</style>