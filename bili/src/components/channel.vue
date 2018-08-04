<template>
	<div>
		<navbar></navbar>
		<sidebar></sidebar>
		<div class="main">

			<div class="recommend" v-if="" >
				22222
			</div>
			<div class="other">
				<h2 class="title">热门推荐</h2>
				<ul >
					<li v-for='data,index in menuMsg' @click='videoDetailClick(data)'>				
							<div class="play">
								<img :src="reverUrl(data.pic)" width="100%">
								<div class="play-bottom">
									<p class="playIcon">
										<i class="iconfont icon-shipin"></i> 
										<span class="play-nums">{{data.play}}</span>
									</p>
									<p class="danmuIcon">
										<i class="iconfont icon-cloud-bullet_screen"></i> 
										<span class="play-danmu">{{data.video_review}}</span>
									</p>
								</div>						
							</div>
							
							<p>{{data.title}}</p>
						

					</li>
				</ul>
				<h2 class="title newVideo">最新视频</h2>
				<ul class="newList">
					<li v-for='data,index in getMsg' @click='videoDetailClick(data)'>								
							<div class="play">
								<img :src="reverUrl(data.pic)" width="100%">
								<div class="play-bottom">
									<p class="playIcon">
										<i class="iconfont icon-shipin"></i> 
										<span class="play-nums">{{data.play}}</span>
									</p>
									<p class="danmuIcon">
										<i class="iconfont icon-cloud-bullet_screen"></i> 
										<span class="play-danmu">{{data.video_review}}</span>
									</p>
								</div>						
							</div>
						
							<p>{{data.title}}</p>
					</li>
				</ul>
				<div @click='moreClick()' class="add">点击加载</div>
			</div>
			
		</div>
		
	  
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
				flag:'',
				moreNum:1,
				menuNews:[],
				nowPage:0,
				newInfo:'',
				hotInfo:''
				
			}
		},
		mounted(){
				axios.get(`/x/web-interface/ranking/region?rid=${this.$route.params.nums}&day=7&jsonp=jsonp`).then(res=>{				
					this.hotInfo = res.data.data.slice(0,4);
					// console.log(this.hotInfo)
					this.$store.dispatch('msgMenuFn',this.hotInfo);	
					
				}).catch((error)=>{
					console.log(error);
				})
				
					axios.get(`/archive_rank/getarchiverankbypartion?jsonp=jsonp&tid=${this.$route.params.nums}&pn=1`).then(res=>{				
						this.newInfo = res.data.data.archives
						
						this.$store.dispatch('msgMenuNew',this.newInfo);	
						
					}).catch((error)=>{
							axios.get(`/archive_rank/getarchiverankbypartion?jsonp=jsonp&tid=${this.$route.params.nums}&pn=1`).then(res=>{				
								this.newInfo = res.data.data.archives
								
								this.$store.dispatch('msgMenuNew',this.newInfo);	
								
							}).catch((error)=>{
								
								console.log(error);
							})	
					})
				
				
		},
		components:{
			navbar,
			sidebar
		},
		computed:{
			...mapState(["menuMsg","menuNew","sideNum"]),
			
			getMsg(){	
				if (this.nowPage != this.$route.params.nums) {
						this.menuNews = [];
						this.moreNum = 1
						this.nowPage = this.$route.params.nums;
						
					document.documentElement.scrollTop = document.body.scrollTop = 0;		
				}
						
				if(this.menuNews.length==0){
					this.menuNews = this.menuNew;
				}
				// console.log('xiu',this.menuNews.length)
				return this.menuNews ;
			}


		},
		methods:{
			reverUrl(url){
				return 'https'+url.substring(4)+'@320w_200h.webp';
			},
			reverUrl2(url){

				return url+'@320w_200h.webp';
			},
			videoDetailClick(data){
				// console.log(data)
				localStorage.setItem('myID',JSON.stringify(this.$route.params.nums))
				localStorage.setItem('myAID',JSON.stringify(data.aid))
				this.$store.dispatch('avDetail',data.aid);
				this.$store.dispatch('numsDetail',this.$route.params);	
				this.$router.push(`/video/av${data.aid}`);
			},
			moreClick(){				
				++this.moreNum
				console.log(this.moreNum)			
				axios.get(`/archive_rank/getarchiverankbypartion?jsonp=jsonp&tid=${this.$route.params.nums}&pn=${this.moreNum}`).then(res=>{				

					this.menuNews=[...(this.menuNews),...(res.data.data.archives)]
					
				}).catch((error)=>{
					console.log(error);
				});
			},
			recommend(){
				console.log(sideNum)
				return true
			}



		}
	}
	
</script>

<style scoped lang="scss">
	.main{overflow: hidden;
		.title{ margin-top: 170px;color: #212121;font-size: 16px;margin-left: 10px;height: 40px;line-height: 40px;}
		ul{ 
			li{width: 50%;height: 180px; float: left;box-sizing: border-box;padding:5px 5px 0 10px;
				.play{position: relative;
					img{border-radius:5px;height: 120px;}
					.play-bottom{position: absolute;bottom: 5px;left: 0;background:rgba(33,33,33,.5);width: 100%;height: 20px;border-radius: 0px 0px 5px 5px;
						.playIcon{float: left;width:40%;margin-left:15px;box-sizing: border-box;height: 20px;
							i{font-size:12px;color: white;}
							span{font-size:12px;color: white;}
						}
						.danmuIcon{float: left;width:40%;margin-left:15px;box-sizing: border-box;height: 20px;
							i{font-size:12px;color: white;}
							span{font-size:12px;color: white;}
						}
					}
				}
				
				p{height: 40px; font-size: 14px;overflow: hidden;}
			}
		}
		.newVideo{clear: both; margin-top: 50px;}
		.newList{position: relative;overflow: hidden;}
		.add{height: 50px;width: 100%; background: red;position: absolute;}
	}
	
</style>