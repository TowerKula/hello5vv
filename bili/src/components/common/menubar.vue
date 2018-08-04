<template>

   <transition name="bounceleft">
	<aside>

			<swiper :options="swiperOption" ref="mySwiper" >
			    <swiper-slide v-for="(mydata,myindex) in menuList" :key="mydata.menuKey" > 
					{{mydata.menuValue}}
			    </swiper-slide>
			  </swiper>
	</aside>
	</transition>
</template>

<script type="text/javascript">
	import axios from "axios";
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import 'swiper/dist/css/swiper.css' ;
	let vm = null;
	export default {
		name:"menubar",
		data(){
			return {
				hotInfo:'',
				newInfo:'',

				myID:'',

				swiperOption: {
				          // some swiper options/callbacks
				          slidesPerView: '4',
      					  spaceBetween: 10,
      					  on:{
      					  	click:function(){
      					  		// console.log('the this',this.clickedIndex);
      					  		vm.menuClick(vm.menuList[this.clickedIndex]);
      					  	}
      					  }
				},
				test:'333'

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
	    },
	    components:{
	    	swiper,
    		swiperSlide
	    },
	    computed: {
      		swiper() {
       			 return this.$refs.mySwiper.swiper
      		}
    	},
    	mounted() {
    			const self = this;
    	      // current swiper instance
    	      //console.log('this is current swiper instance object', this.swiper)
    	      // console.log(this.menuList);
    	      this.swiper.slideTo(0, 1000, false)
    	},
    	created() {
        	vm = this;
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
	.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 13px;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
	
</style>