<template>

   <transition name="bounceleft">
	<aside>
			<ul >
				<li v-for="mydata,myindex in menuList" @click="menuClick(mydata)"> 
					<p>{{mydata.menuValue}}</p>
			    </li>			
			</ul>	
	</aside>
	</transition>
</template>

<script type="text/javascript">
	export default {
		name:"menubar",
		data(){
			return {
			
			}
		},

		methods:{
			menuClick(mydata){
				//触发自定义事件kerwineven
				console.log(mydata.menuKey)
				this.$emit("kerwinevent");
			}
		},
		props: {
	      menuList: Array,
	      required: true
	    }
	}
</script>

<style scoped lang="scss">
	aside{
		position:fixed;
		top:100px;
		left:0px;
		width:100%;
		height:40px;
		line-height: 40px;
		background: #c21;
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