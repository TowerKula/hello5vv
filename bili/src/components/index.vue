<template>
	<div>
	  <navbar></navbar>
	  <sidebar></sidebar>

	  <ul>

	  		<li v-for="data in datalist" @click="handleClick(data)">
	  			<img :src="reverUrl(data.pic)" alt="">
	  			<div class="under">
	  				<span >{{data.duration}}</span>
	  				<span >{{times(data.play)}}万观看</span>
	  				<span >{{math(data.video_review)}}弹幕</span>	  				
	  			</div>
	  			<p>{{data.title}}</p>
	  		</li>
	  		
	  </ul>
	  
	</div>


</template>

<script type="text/javascript">
	import axios from "axios"
	import navbar from "./common/navbar"
	import sidebar from "./common/sidebar"
	export default{
		name:"index",
		data(){
			return {
				datalist:[],
			}
		},
		mounted(){
			axios.get("/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp").then(res=>{
				// console.log(res.data);
				this.datalist = res.data.data.list
				// console.log(res.data.data.list)
			})
		},
		methods:{
			reverUrl(data){
				
				return 'https'+data.substring(4)+'@480w_300h.webp';
			},
			handleClick(data){
				// console.log(data)
				// axios.get(`https://comment.bilibili.com/recommendnew,${data.aid}`).then(res=>{				
				// 	console.log(res)
				// }).catch((error)=>{
				// 	console.log(error);
				// });

				//通过后台获取myID参数
				axios.post('/api/proxy/detail/https',{url:`https://www.bilibili.com/video/av${data.aid}/?redirectFrom=h5`}).then(res=>{				
					// console.log('index res',res)
					localStorage.setItem('myID',res.data.rid);
					localStorage.setItem('myAID',JSON.stringify(data.aid))
					this.$router.push(`/video/av${data.aid}`);
					
				}).catch((error)=>{
					console.log('index error',error);
				});
				


				

			},
			times(n){
				 return Math.round(n/1000)/10;
			},
			math(n){
				if (n>9999) {
					return Math.round(n/1000)/10+'万';
				}else{
					return n
				}
			}
		},
		components:{
			navbar,
			sidebar
		}

	}
	
</script>
	
<style scoped lang="scss">
	ul{
		padding-top: 150px;
		width: 100%;
		li{
			width: 100%;
			margin-top: 5%;
			border-bottom: 1px solid #ccc; 
			position: relative;
			img{
				width: 90%;
				border-radius: 10px;
				border: 1px solid #000;
				margin: 0 auto;
			}
			div.under{
				position: absolute;
				bottom: 65px;
				left: 8%;
			
			}
			span{
				border-radius: 5px;
				font-size: 14px;
				color: #fff;
				background: rgba(0,0,0,.3);
				padding: 0px 5px 0px 5px;
				margin-right: 5px;

			}	
			p{
				font-size: 14px;
				width: 90%;
				text-align: left;
				margin: 0 auto;
				padding: 15px 0px 20px 0px;
				overflow: hidden;
				word-break: break-all;
				text-overflow: ellipsis;
				white-space: nowrap;

			}
		}
	}
</style>