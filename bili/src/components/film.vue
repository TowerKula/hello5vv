<template>
	<div>
		<ul>
			<router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
			<router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
		</ul>
		<!-- 二级路由容器 -->
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"film",
		data(){
			return {

			}
		},
		mounted(){
			this.$store.dispatch("mytitleAction","卖座电影")
		}
	}
</script>

<style scoped lang="scss">
	.active{
		border-bottom:5px solid red;
	}

	ul{
		display: flex;
		li{
			flex:1;
			height: 40px;
			line-height: 40px;
			text-align: center;
		}
	}
</style>