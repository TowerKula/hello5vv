<template>
	<div>
		<navbar></navbar>
		<div class="container">
			
			<img :src="bannerTop" >
			<div class='center'>
				<div class='fl'>注册</div>
				<div class='fr'>登录</div>
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
		margin-top:40px;
		position:relative;
	}
	.center{

		width:200px;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}


</style>