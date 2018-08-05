<template>
	<div class="main">
		
		<navrank></navrank>
		<h3>
			<a href="#" class="left">
				<i class="iconfont icon-dayuhao1"></i>
			</a>
			<p class="right" @click='reverUrl'>排行榜</p>
		</h3>
		<ul>
			<li v-for="data,index in rankId" v-if="" @click='a(data)'>
				
				<div class="list" v-show="index<3">
					<img class="rank left" v-if="index==0" src="../../static/img/rank1.png" >
					<img class="rank left" v-if="index==1" src="../../static/img/rank2.png" >
					<img class="rank left" v-if="index==2" src="../../static/img/rank3.png" >
				</div>
				
				<div class="nums" v-show="index>2">
					<p v-if="index>2" class="left index">{{index+1}}</p>
				</div>
				<img :src="reverUrl(data.pic)" alt="" class="left loop">
				<div class="left con">
					<p class="title">{{data.title}}</p>
					
					<p class="author"><img src="../../static/img/ico_up.png" alt="" class="up">{{data.author}}</p>
					<p class="play inline"><img src="../../static/img/ico_play.png" alt="" class="play">{{times(data.play)}}万</p>
					<p class="play inline"><img src="../../static/img/ico_danmu.png" alt="" class="play">{{math(data.video_review)}}弹幕</p>
					
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
				localStorage.setItem('myID',JSON.stringify(this.$route.params.nums))
				localStorage.setItem('myAID',JSON.stringify(data.aid))
				this.$router.push(`/video/av${data.aid}`);
				console.log(data)
				
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
		computed:{
			...mapState(["rankId"])

		},
		components:{
			navrank
		}


	}
	
</script>

<style scoped lang="scss">
	div.main{
		background-color: #f4f4f4;
	}
	h3{
		width: 100%;
		padding-top: 5px;
		padding-bottom: 5px;
		overflow: hidden;
		font-size: 18px;
		color: #fb7299;
		position: fixed;
		top: 0;
		z-index: 999;
		background-color: #fff;
		a{
			
			i{
				font-size: 25px;
				color: #fb7299;
			}
		}
		p{
			height: 30px;
			line-height: 30px;
			padding-right: 45%;
		}
	}

	ul{
		width: 100%;
		height: 100%;
		padding-top: 30%;
		overflow: hidden; 
		
		li{
			padding-top: 3%;
			padding-bottom: 3%;
			width: 100%;
			height: 105px;
			box-sizing: border-box;
			display: flex;
			div.nums{
				flex: 2; 
				position: relative;
				p.index{
					flex: 2;
					color: #999;
					text-align: center;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					
				}
			}
		
			div.list{ 
				flex: 2; 
				position: relative;
				img.rank{
					height: 50%;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}
			
			
			img.loop{
				flex: 2;
				border-radius: 8px;
				height: 100%;
			}
			div.con{
				flex: 8;
				
				p{
					margin-left: 10px;
				}
				p.title{
					font-size:16px;
					overflow: hidden;
					word-break: break-all;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2; 

				}
				
				p.author{
					position: relative;
					font-size: 13px;
					color: #999; 
					margin-left: 16%;
					margin-top: 2%
				}
				img.up{
					position: absolute;
					left: -10%;
					top: 17%;
					width: 8%
				}
				p.play{
					position: relative;
					font-size: 13px;
					color: #999; 
					margin-left: 16%;
					
				}
				img.play{
					position: absolute;
					left: -48%;
					top: 20%;
					width: 32%
				}
				p.inline{
					display: inline-block;
				}

				 
				
			}
		}
	}
	
	
</style>