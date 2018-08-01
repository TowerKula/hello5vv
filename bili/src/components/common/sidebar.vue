<template>

   <transition name="bounceleft">
	<aside>
	
			<ul >
				<li><a class="" href="/index.html"><p>首页</p></a></li>
				<li><a class="" href="/video/1"><p>动画</p></a></li>
				<li><a class="" href="/channel/13"><p>番剧</p></a></li>
				<li><a class="" href="/channel/167"><p>国创</p></a></li>
				<li><a class="" href="/channel/3"><p>音乐</p></a></li>
				<!-- <li><a class="" href="/channel/129"><p>舞蹈</p></a></li>
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
	</aside>
	</transition>
</template>

<script type="text/javascript">
	export default {
		name:"sidebar",
		data(){
			return {

			}
		},

		methods:{
			handleClick(){
				//触发自定义事件kerwineven
				this.$emit("kerwinevent");
			},
			channelClick(data){
				console.log(data)
				router.push(`/channel/${data}`); // /detail/222
			}
		}
	}
</script>

<style scoped lang="scss">
	aside{
		position:fixed;
		top:50px;
		left:0px;
		width:100%;
		height:120px;
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