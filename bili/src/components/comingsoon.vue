<template>
	<div>
		<ul>
			<li v-for="data in datalist" >
				<img :src="data.poster.origin"/>
				<h3>{{data.name}}</h3>
				<p>{{data.intro}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import {mapState} from "vuex";
	export default {
		name:"comingsoon",
		data(){
			return {

			}
		},

		mounted(){
			//访问到store中的共享状态
			if(this.$store.state.datalist.length==0){
				//vuex action请求
				this.$store.dispatch("myComingsoonAction");
			}
		},

		computed:{
			...mapState(["datalist"])

			// datalist(){return this.$store.state.datalist}
		}
	}
</script>

<style scoped lang="scss">
		ul{
		li{
			overflow: hidden;
			padding:10px;
			img{
				float:left;
				width:100px;
			}
		}
	}
</style>