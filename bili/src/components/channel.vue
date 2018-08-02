<template>
	<div>
		<navbar></navbar>
		<sidebar></sidebar>
		<h2 class="clearup">热门推荐</h2>
		<ul >
			<li v-for='data,index in menuMsg' @click='videoDetailClick(data)'>
				
				<p>
					<img :src="reverUrl(data.pic)" width="100%"> 
					<div>{{data.title}}</div>
				</p>

			</li>
		</ul>
		<h2 class="clearup">最新视频</h2>
		<ul >
			<li v-for='data,index in menuNew' @click='videoDetailClick(data)'>
				
				<p>
					<img :src="reverUrl2(data.pic)" width="100%"> 
					<div>{{data.pic}}</div>
				</p>

			</li>
		</ul>
	  
	</div>


</template>

<script type="text/javascript">
	import {mapState} from "vuex";
	import axios from "axios";
	import navbar from "./common/navbar"
	import sidebar from "./common/sidebar"
	export default {
		name:"channel",
		data(){
			return {
				channelInfo:null,
				msgList:'',
				flag:''
			}
		},

		components:{
			navbar,
			sidebar
		},
		computed:{
			...mapState(["menuMsg","menuNew"])
		},
		methods:{
			reverUrl(url){
				return 'https'+url.substring(4)+'@320w_200h.webp';
			},
			reverUrl2(url){
				return url+'@320w_200h.webp';
			},
			videoDetailClick(data){
				console.log(data)
				this.$store.dispatch('avDetail',data.aid);
				this.$store.dispatch('numsDetail',this.$route.params);	
				this.$router.push(`/video/av${data.aid}`);
			}

		}
	}
	
</script>

<style scoped lang="scss">
	.clearup{clear: both;margin-top: 200px;}
	ul{
		li{width: 45%;height:300px;float: left;margin: 2%;box-sizing: border-box;}
	}
</style>