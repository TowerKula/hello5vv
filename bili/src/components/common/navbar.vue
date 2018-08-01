<template>
	<nav>
		<div class="left">
		    logo
		</div>
		<div class="right">
			<router-link to='/space' tag='div'>登录/注册</router-link>
		
		</div>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name:"navbar",
		data(){
			return {

			}
		},
		computed:{
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