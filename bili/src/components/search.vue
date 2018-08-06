<template>
	<div>
		<div class='top-bar'><input type="text" name="top" v-model='word'> <button @click='clearSearch'>取消</button></div>
	  	<template v-if="isSearch">
	  		
	  	</template>
	  	<template v-else>
	  		<p>大家都在搜索</p>
	  		<div  v-for='item of hotword'>{{item.keyword}}</div>
	  	</template>
	</div>


</template>

<script type="text/javascript">
	import axios from 'axios';

	export default{
		name:"index",
		data(){
			return {
				word:'',
				isSearch:false,
				hotword:[]
			}
		},
		mounted(){
			//https://s.search.bilibili.com/main/hotword
			axios.get('https://s.search.bilibili.com/main/hotword').then((res)=>{
				console.log(res.data);
				this.hotword = res.data.list.slice(0,7);
			})
		},
		computed:{
			getWord(){
				return this.word;
			}
		},
		methods:{
			clearSearch(){
				this.word='';
			}
		}

	}
	
</script>

<style scoped lang="scss">
	.top-bar{
		box-sizing:border-box;
		height:30px;
		padding:0 10px;
	}
</style>