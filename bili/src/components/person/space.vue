<template>
	<div>
		<navbar></navbar>
		<div class="container">
			
			<img :src="bannerTop" >
			<div class='center'>
				<div class='fl btn'>注册</div>
				<div class='fr btn'>登录</div>
			</div>
		</div>
	</div>

</template>
<script type="text/javascript">
	import navbar from '../common/navbar';
	export default {
		data(){
			return {
				bannerTop:require('@/assets/pic/bannerTop.png')
			}
		},
		components:{
			navbar
		}
	}
</script>
<style lang="scss" scoped>
	img{
		width:100%;
	}	
	.container{
		overflow:hidden;
		margin-top:50px;
		position:relative;
	}
	.center{

		width:200px;
		position:absolute;
		top:60%;
		left:50%;
		transform:translate(-50%);
	}
	.btn {
		width:80px;
		height:25px;
		text-align:center;
		line-height:25px;
		
		border-radius:5px;
		font-size:13px;
	}
	.fl{
		float:left;
	}
	.fr{
		float:right;
	}
	.fl.btn{
		background-color: white;
		color: #fb7299;
	}
	.fr.btn{
		background-color: #fb7299;
		color:white;
	}



</style>