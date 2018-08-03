<template>

   <transition name="bounceleft">
	<aside>
			<ul >
				<li v-for="mydata,myindex in menuList" @click="menuClick(mydata)"> 
					<p>{{mydata.menuValue}}</p>
			    </li>			
			</ul>	
	</aside>
	</transition>
</template>

<script type="text/javascript">
	import axios from "axios";
	export default {
		name:"menubar",
		data(){
			return {
				hotInfo:'',
				newInfo:'',
				myID:''
			}
		},
		mounted(){
				
		},
		methods:{
			menuClick(mydata){
				//触发自定义事件kerwineven	
				localStorage.setItem('myID',JSON.stringify(this.$route.params.nums))
				
				this.$router.push(`/channel/${mydata.menuKey}`)		

				axios.get(`/x/web-interface/ranking/region?rid=${mydata.menuKey}&day=7&jsonp=jsonp`).then(res=>{				
					this.hotInfo = res.data.data.slice(0,4);
					// console.log(this.hotInfo)
					this.$store.dispatch('msgMenuFn',this.hotInfo);	
					
				}).catch((error)=>{
					console.log(error);
				});

				
				axios.get(`/archive_rank/getarchiverankbypartion?jsonp=jsonp&tid=${mydata.menuKey}&pn=1`).then(res=>{				
					this.newInfo = res.data.data.archives
					// console.log(this.newInfo)
					this.$store.dispatch('msgMenuNew',this.newInfo);	
					
				}).catch((error)=>{
					console.log(error);
				});
			}
		},
		props: {
	      menuList: Array,
	      required: true
	    }
	}
</script>

<style scoped lang="scss">
	aside{
		position:fixed;
		top:100px;
		left:0px;
		width:100%;
		height:40px;
		line-height: 40px;
		background: #c21;
		color:white;
		z-index:10;
		ul{
			li{
				padding:10px;float: left;
			}
		}
	}
	.bounceleft-enter-active {
	  animation: bounce-in-left .5s;
	}
	.bounceleft-leave-active {
	  animation: bounce-in-left .5s reverse;
	}
	@keyframes bounce-in-left {
	  0% {
	    transform: translateX(-100%);
	    opacity: 0;
	  }
	  
	  100% {
	    transform: translateX(0px);
	    opacity: 1;
	  }
	}
	
</style>