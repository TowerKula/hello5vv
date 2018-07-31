<template>
	<div v-if="filminfo">
		<img :src="filminfo.cover.origin"/>

		<h2>{{filminfo.name}}</h2>

		<p>{{filminfo.synopsis}}</p>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios";
	export default {
		name:"detail",
		data(){
			return {
				filminfo:null
			}
		},

		mounted(){
			//页面加载完 ，接受路由参数
			console.log(this.$route.params.kerwinid);
			//ajax请求数据
			axios.get(`/v4/api/film/${this.$route.params.kerwinid}?__t=1532919460072`).then(res=>{
				// console.log(res.data);
				this.filminfo = res.data.data.film//
				console.log(this.filminfo.name);

				this.$store.dispatch("mytitleAction",this.filminfo.name)
				//dispatch("对应哪个action？"，传的值);
			})
		}
	}

	// v-if="filminfo"  在数据没取回 要 设置成v-if
</script>

<style scoped lang="scss">
	img{
		width: 100%;
	}
</style>