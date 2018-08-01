<template>
	<div>
		<navbar></navbar>
		<sidebar></sidebar>
		<ul class="clearup">
			<li >
				<h3>channel</h3>
				<h3>{{menuMsg}}</h3>

			</li>
		</ul>
	  
	</div>


</template>

<script type="text/javascript">
	import {mapState} from "vuex";
	import axios from "axios";
	import navbar from "./common/navbar"
	import sidebar from "./common/sidebar"
	export default {
		name:"channel",
		data(){
			return {
				filminfo:null
			}
		},
		mounted(){

			
			axios.get(`/x/web-interface/ranking/region?rid=${this.$route.params.nums}&day=7&jsonp=jsonp`).then(res=>{				
				this.filminfo = res.data.data
			}).catch((error)=>{
				console.log(error);
			})
		},
		components:{
			navbar,
			sidebar
		},
		computed:{
			...mapState(["menuMsg"])
		}
	}
	
</script>

<style scoped lang="scss">
	.clearup{clear: both;margin-top: 200px;}
</style>