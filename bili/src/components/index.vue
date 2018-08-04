<template>
	<div>
	  <navbar></navbar>
	  <sidebar></sidebar>

	  <ul>

	  		<li v-for="data in datalist" @click="handleClick(data)">
	  			<img :src="reverUrl(data.pic)" alt="">
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
			padding-bottom: 5%;
			border-bottom: 1px solid #ccc; 
			img{
				width: 90%;
				border-radius: 10px;
				margin: 0 auto;
			}
			p{
				font-size: 14px;
				width: 90%;
				text-align: left;
				margin: 0 auto;

			}
		}
	}
</style>