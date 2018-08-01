<template>

   <transition name="bounceleft">
	<aside>
		<ul @click="handleClick()">
			<router-link to="/index" tag="li" activeClass="kerwinactive">index</router-link>
		  
		    <router-link to="/ranking" tag="li" activeClass="kerwinactive">ranking</router-link>
		
		    <router-link to="/video" tag="li" activeClass="kerwinactive">video</router-link>

		    <router-link to="/channel/2" tag="li" activeClass="kerwinactive">channel</router-link>

		    <!-- <router-link to="/space" tag="li" activeClass="kerwinactive">space</router-link> -->	  
		</ul>
		<ul class="clear">
			<li @click="channelClick(11)">
				<h3>channel</h3>
			</li>
		</ul>
	</aside>
	</transition>
</template>

<script type="text/javascript">
// import router from "../../router/index" //路由对象
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
				// router.push(`/channel/${data}`); // /detail/222
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
	.clear{clear: both;height: 40px;}
</style>