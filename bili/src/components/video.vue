<template>
	<div v-if="videoinfo">
		<div id="box">
			<img :src="videoinfo.pic" alt="">
			<p>{{videoinfo.title}}</p>
	  		<h3>{{videoinfo.author}}</h3>
	  		<p>{{videoinfo.description}}</p>
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
				datalist:[],
				newVideoInfo:null,
				myID:JSON.parse(localStorage.myID),
				myAID:JSON.parse(localStorage.myAID)
			}
		},
		mounted(){
			// console.log(this.myAID)
			axios.get(`/x/web-interface/ranking/region?rid=${this.myID}&day=7&jsonp=jsonp`).then(res=>{
				for (var i = 0; i < res.data.data.length; i++) {
					if (res.data.data[i].aid === this.myAID) {
						this.videoinfo=res.data.data[i];	
						console.log(this.videoinfo);
						return;				
					}
				}
				
				this.videoinfo = res.data.data;
			});
			axios.get(`https://comment.bilibili.com/recommendnew,${this.myAID}`).then(res=>{
				// console.log(res.data);
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
	#box img{width: 100%}
	#list{overflow: hidden;border-top: 1px solid #ccc;}
	li{width: 100%;padding: 5px;float: left;display: flex;}
	#list li img{width: 180px;height :100px;border-radius: 5px;flex: 50%;}
	#list li p{width:200px;float: right;flex: 50%;margin-left: 10px;font-size: 16px;}
</style>