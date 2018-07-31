<template>
	<nav>
		<div class="left">
		    <slot></slot>
			<span>{{mytitle}}</span>
		</div>
		<div class="right">
			<span>大连</span>
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script type="text/javascript">
	import {mapState} from "vuex";//切割状态
	export default {
		name:"navbar",
		data(){
			return {

			}
		},

		// computed:{
		// 	title(){
		// 		return this.$store.state.mytitle
		// 	}
		// }
		computed:{
			...mapState(["mytitle"])
			// {mytitle：function(){return this.$store.state.mytitle}}
		
		}
	}
</script>

<style scoped lang="scss">
	nav{
		position:fixed;
		left:0px;
		top:0px;
		width:100%;
		height:50px;
		line-height:50px;
		background:black;
		color:white;
		.left{
			float:left;
		}

		.right{
			float:right;
		}
	}
</style>