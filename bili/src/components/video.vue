<template>
	<div v-if="videoinfo">
		<div id="box">
			<img :src="videoinfo[0].pic" alt="">
			<p>{{videoinfo[0].title}}</p>
	  		<h3>{{videoinfo[0].author}}</h3>
	  		<p>{{videoinfo[0].description}}</p>
	  		<p>{{avDetail}}</p>
	  		<p>{{numsDetail}}</p>
	  	</div>

	  	<ul id="list">
	  		<li v-for="info in datalist">
	  			<img :src="reverUrl(info.pic)" alt="">
	  			<p>{{info.title}}</p>
	  		</li>
	  	</ul>

	</div>


</template>

<script type="text/javascript">
	import axios from "axios";
	import {mapState} from "vuex";
	export default {
		name:"myvideo",
		data(){
			return {
				videoinfo:null,
				datalist:[]
			}
		},
		mounted(){
			// console.log(this.$route.params.nums);

			axios.get(`/x/web-interface/ranking/region?rid=20&day=7&jsonp=jsonp`).then(res=>{
				// console.log(res.data);
				this.videoinfo = res.data.data;
			})
			
			axios.get(`https://comment.bilibili.com/recommendnew,27876145`).then(res=>{
				console.log(res.data);
				this.datalist = res.data.data.slice(0,20);
			})
		},
		components:{
			
		},
		methods:{
			reverUrl(url){

				return 'https:'+url+"@320w_200h.webp";
			}
		},

		computed:{
			...mapState(["avDetail","numsDetail"])
		}
	}
	
</script>

<style scoped lang="scss">
	.clearup{clear: both;}
	#box{margin-top: 160px;}
	#box img{width: 100%}
	#list{overflow: hidden;}
	li{width: 100%;padding: 5px;float: left;display: flex;}
	#list li img{width: 180px;height :100px;border-radius: 5px;flex: 50%;}
	#list li p{width:200px;float: right;flex: 50%;margin-left: 10px;}
</style>