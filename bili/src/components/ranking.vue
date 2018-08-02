<template>
	<div>
		<h3>
			<a href="#" class="left"><i class="iconfont icon-back"></i></a>
			<p class="right">排行榜</p>
		</h3>
		<ul>
			<li v-for="data in datalist">
				<!-- <img :src="" alt=""> -->
				<img :src="reverUrl(data.pic)" alt="" class="left">
				<div class="left">
					{{data.title}}
				</div>
			</li>
		</ul>
			  
	</div>


</template>

<script type="text/javascript">
	
	export default{
		name:"index",
		data(){
			return {
				datalist:[]
			}
		},
		mounted(){
			fetch("/x/web-interface/ranking?rid=1&day=3&jsonp=jsonp").then(res=>res.json()).then(res=>{
				console.log(res);
				this.datalist = res.data.list.slice(0, 20);
			})
		},
		methods:{
			reverUrl(data){
				
				return 'https'+data.substring(4)+'@480w_300h.webp';
			}
		},

	}
	
</script>

<style scoped lang="scss">
	h3{
		overflow: hidden;
		font-size: 18px;
		color: #fb7299;
		p{
			margin-right: 45%;
		}
	}

	ul{
		margin-top: 50px;
		img{
			width: 30%;
		}
	}
	
	
</style>