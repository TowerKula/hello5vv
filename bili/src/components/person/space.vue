<template>
	<div>
		
		<navbar></navbar>
		<div class="container">
			
			<img :src="bannerTop" >
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
<style lang="scss" scoped="">
	img{
		width:100%;

	}	
	.container{
		margin-top:40px;
	}

</style>