<template>

   <transition name="bounceleft">
	<aside>
	
			<ul >
				<li v-for="mydata,myindex in sideMap" @click="channelClick(mydata)">
					<p>{{mydata.value}}</p>
			    </li>
				<!-- <li><a class="" href="/index.html"><p>首页</p></a></li>
				<li><a class="" href="/channel/1"><p>动画</p></a></li>
				<li><a class="" href="/channel/13"><p>番剧</p></a></li>
				<li><a class="" href="/channel/167"><p>国创</p></a></li>
				<li><a class="" href="/channel/3"><p>音乐</p></a></li>
				<li><a class="" href="/channel/129"><p>舞蹈</p></a></li>
				<li><a class="" href="/channel/36"><p>科技</p></a></li>
				<li><a class="" href="/channel/4"><p>游戏</p></a></li>
				<li><a class="" href="/channel/5"><p>娱乐</p></a></li>
				<li><a class="" href="/channel/119"><p>鬼畜</p></a></li>
				<li><a class="" href="/channel/23"><p>电影</p></a></li>
				<li><a class="" href="/channel/11" id="firstCur"><p>电视剧</p></a></li>
				<li><a class="" href="/channel/177"><p>纪录片</p></a></li>
				<li><a class="" href="/channel/181"><p>影视</p></a></li>
				<li><a class="" href="/channel/155"><p>时尚</p></a></li>
				<li><a class="" href="/channel/160"><p>生活</p></a></li>
				<li><a class="" href="/channel/165"><p>广告</p></a></li>
				<li><a class="" href="//live.bilibili.com/h5/"><p>直播</p></a></li>
				<li><a class="" href="//h.bilibili.com/ywh/h5/home"><p>相簿</p></a></li> -->
			</ul>
			<menubar :menuList='setSecondBar' ></menubar>
			
	</aside>
	</transition>
</template>

<script type="text/javascript">
	import menubar from "./menubar"
	export default {		
		name:"sidebar",
		data(){
			return {

				secondBar:1,

				sideMap:{
				1:{
					key:1,
					value:"动画",
					menu:[{
						menuKey:24,
						menuValue:'MAD·AMV'
					},
					{
						menuKey:25,
						menuValue:'MMD·3D'
					},
					{
						menuKey:47,
						menuValue:'短片·手书·配音'
					},
					{
						menuKey:27,
						menuValue:'综合'
					}],
					isDis:true
				},
				13:{
					key:13,
					value:"番剧",
					menu:[{
						menuKey:33,
						menuValue:'连载动画'
					},
					{
						menuKey:32,
						menuValue:'完结动画'
					},
					{
						menuKey:51,
						menuValue:'资讯'
					},
					{
						menuKey:152,
						menuValue:'官方延伸'
					}]
				},
				167:{
					key:167,
					value:"国创",
					menu:[{
						menuKey:153,
						menuValue:'国产动画'
					},
					{
						menuKey:168,
						menuValue:'国产原创相关'
					},
					{
						menuKey:169,
						menuValue:'布袋戏'
					},
					{
						menuKey:170,
						menuValue:'资讯'
					}]
				},
				3:{
					key:3,
					value:"音乐",
					menu:[{
						menuKey:28,
						menuValue:'原创音乐'
					},
					{
						menuKey:31,
						menuValue:'翻唱'
					},
					{
						menuKey:30,
						menuValue:'VOCALOID·UTAU'
					},
					{
						menuKey:59,
						menuValue:'演奏'
					},
					{
						menuKey:29,
						menuValue:'三次元音乐'
					},
					{
						menuKey:54,
						menuValue:'OP/ED/OST'
					},
					{
						menuKey:130,
						menuValue:'音乐选集'
					}]
				}
			}
		}
		},

		methods:{	
			channelClick(data){
				console.log(data)
				this.secondBar = data.key
				console.log(this.secondBar)
				this.$router.push(`/channel/${data.key}`); // /detail/222
			}
		},
		computed:{
			setSecondBar(){
				return this.sideMap[this.secondBar].menu;

			}
		},
		components:{
			menubar
		}
	}
</script>

<style scoped lang="scss">
	aside{
		position:fixed;
		top:50px;
		left:0px;
		width:100%;
		height:100px;
		background: #f60;
		color:white;
		z-index:10;
		ul{
			li{
				padding:10px;float: left;
			}
		}
	}
	.bounceleft-enter-active {
	  animation: bounce-in-left .5s;
	}
	.bounceleft-leave-active {
	  animation: bounce-in-left .5s reverse;
	}
	@keyframes bounce-in-left {
	  0% {
	    transform: translateX(-100%);
	    opacity: 0;
	  }
	  
	  100% {
	    transform: translateX(0px);
	    opacity: 1;
	  }
	}
	
</style>