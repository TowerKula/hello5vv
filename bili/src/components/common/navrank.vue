<template>
	<nav>
		<ul>
			<li v-for="data in ranking" @click="handleClick(data)">{{data.value}}</li>
		</ul>
	</nav>
</template>
<script type="text/javascript">
	import axios from "axios"
	export default {
		name:"navrank",
		data(){
			return {
				ranking:{
					0:{
						key:0,
						value:"全站"
					},
					1:{
						key:1,
						value:"动画"
					},
					13:{ //此处参数不匹配
						key:33,
						value:"番剧"
					},
					167:{//此处参数不匹配
						key:168,
						value:"国创"
					},
					3:{
						key:3,
						value:"音乐"
					},
					129:{
						key:129,
						value:"舞蹈"
					},
					36:{
						key:36,
						value:"科技"
					},
					4:{
						key:4,
						value:"游戏"
					},
					5:{
						key:5,
						value:"娱乐"
					},
					119:{
						key:119,
						value:"鬼畜"
					},
					4:{
						key:4,
						value:"游戏"
					}
					// 23:{
					// 	key:23,
					// 	value:"电影"
					// },
					// 11:{
					// 	key:11,
					// 	value:"电视剧"
					// },
					// 117:{
					// 	key:117,
					// 	value:"纪录片"
					// },
					// 181:{
					// 	key:181,
					// 	value:"影视"
					// },
					// 155:{
					// 	key:155,
					// 	value:"时尚"
					// },
					// 160:{
					// 	key:160,
					// 	value:"生活"
					// }
				}
			}
		},
		methods:{
			handleClick(data){
				this.$router.push(`/ranking/${data.key}`)
				axios.get(`/x/web-interface/ranking?rid=${this.$route.params.nums}&day=3&jsonp=jsonp`).then(res=>{
				// console.log(res);
				// console.log(this.$route.params.nums)
				this.$store.dispatch('rankIdAction',res.data.data.list.slice(0, 20));
					// console.log('rankId.aid')
				})
				
			}
		},
		computed:{
		},
		mounted(){
			this.handleClick(this.ranking[this.$route.params.nums]);
		}
	}
</script>

<style scoped lang="scss">
	nav{
		position:fixed;
		left:0;
		top:35px;
		width:100%;
		height:50px;
		line-height:50px;
		background-color: #f60;
		z-index: 999;
		ul{
			li{
				display: inline-block;
				width: 10%;
				text-align: center;
			}
		}
	}
</style>