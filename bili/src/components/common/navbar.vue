<template>
	<nav>
		<div class="left">
		    <a href="/index" class="logo"><img src="../../assets/logo.jpg"></a>
		   
		</div>
		<div class="right">
			
			<a href="/search" class="iconfont icon-sousuo"></a>
			
			<a href="/space" class="iconfont icon-weixindenglu"></a>

			<a href="javascript:alert('本网站现在不开放下载,充值之后再议')" class="load">下载 App</a>

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
		background:white;
		display: flex;
		z-index: 100;
		a{
			color: #ccc;
		}
		
		.left{
			float:left;
			flex: 1;
			a img{
				display: block; width: 70px;margin:10px 0 0 10px;
			}
		}

		.right{
			float:right;
			.icon-weixindenglu{
				font-size: 25px;
				margin-right: 10px;
				
			}
			.icon-sousuo{
				font-size: 20px;margin-right: 20px;
				display: block;
				float: left;margin-top: -3px;
			
			}
			.load{
				width: 80px;height: 30px;line-height: 30px; background: #fb7299;border-radius: 5px;text-align: center;font-size: 12px;display: block;float: right;color: white;margin-top: 10px;margin-right: 10px;
			}
		}
	}

</style>