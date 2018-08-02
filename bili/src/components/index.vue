<template>
	<div>
	  <navbar></navbar>
	  <sidebar></sidebar>

	  <ul>

	  		<li v-for="data in datalist">
	  			<img :src="reverUrl(data.pic)" alt="">
	  			{{data.title}}
	  		</li>
	  		
	  </ul>
	  
	</div>


</template>

<script type="text/javascript">
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
			fetch("/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp").then(res=>res.json()).then(res=>{
				console.log(res);
				this.datalist = res.data.list
			})
		},
		methods:{
			reverUrl(data){
				
				return 'https'+data.substring(4)+'@480w_300h.webp';
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
		padding: 150px;
		width: 100%;
		li{
			width: 100%;
			border-radius: 10px;
			background-color: red;
			img{
				width: 80%;
				border-radius: 10px;
			}
		}
	}
</style>