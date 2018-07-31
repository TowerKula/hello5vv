<template>

   <transition name="bounceleft">
	<aside>
		<ul @click="handleClick()">
		  
		    <router-link to="/home" tag="li" activeClass="kerwinactive">home</router-link>
		
		    <router-link to="/film" tag="li" activeClass="kerwinactive">film</router-link>
		  
		    <router-link to="/card" tag="li" activeClass="kerwinactive">card</router-link>
		  
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
				//触发自定义事件kerwinevent
				this.$emit("kerwinevent");
			}
		}
	}
</script>

<style scoped lang="scss">
	aside{
		position:fixed;
		top:50px;
		left:0px;
		width:50%;
		height:100%;
		background:black;
		color:white;
		z-index:10;
		ul{
			li{
				padding:10px;
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