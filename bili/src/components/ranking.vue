<template>
	<div>
		
		<navrank></navrank>
		<h3>
			<a href="#" class="left">
				<i class="iconfont icon-back"></i>
			</a>
			<p class="right" @click='reverUrl'>排行榜</p>
		</h3>
		<ul>
			<li v-for="data in rankId" @click='a(data)'>
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
	import {mapState} from "vuex";
	import navrank from "./common/navrank"
	import axios from "axios"
	export default{
		name:"index",
		data(){
			return {
				datalist:[]

			}
		},
		mounted(){
			// console.log(this.$route.params.nums)
	
		},
		methods:{
			reverUrl(data){
				
				return 'https'+data.substring(4)+'@480w_300h.webp';
			},
			a(data){
				console.log("rankId")
			}
			
		},
		computed:{
			...mapState(["rankId"])

		},
		components:{
			navrank
		}


	}
	
</script>

<style scoped lang="scss">
	h3{
		width: 100%;
		height: 40px;
		line-height: 30px;
		overflow: hidden;
		font-size: 18px;
		color: #fb7299;
		a{
			
			i{
				display: block;
				vertical-align: middle;
				font-size: 25px;
				color: #fb7299;
			}
		}
		p{
			height: 100%;
			line-height: 40px;
			padding-right: 45%;
		}
	}

	ul{
		width: 100%;
		height: 100%;
		margin-top: 50px;
		overflow: hidden; 
		li{
			width: 100%;
			display: block;
			img{
				width: 30%;
			}
		}
	}
	
	
</style>