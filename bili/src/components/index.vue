<template>
	<div>
	  <navbar></navbar>
	  <sidebar></sidebar>

	  
	</div>


</template>

<script type="text/javascript">
	import navbar from "./common/navbar"
	import sidebar from "./common/sidebar"
	export default{
		name:"index",
		data(){
			return {

			}
		},
		components:{
			navbar,
			sidebar
		}

	}
	
</script>

<style scoped lang="scss">
	
</style>