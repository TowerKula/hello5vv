<template>
	<div v-if="videoinfo">
		
		<img :src="videoinfo.pic" alt="">
		<div id="box">
			<h1>可试看6分钟，APP内打开看全片</h1>
			<h2>{{videoinfo.title}}</h2>
	  		<h3>{{videoinfo.author}} <span>{{times(videoinfo.play)}}万次观看 </span><span>{{videoinfo.video_review}}弹幕</span><span>{{createDate(videoinfo.create)}}</span></h3>
	  		<h4>{{videoinfo.description}}</h4>
	  	</div>

	  	<ul id="list">
	  		<li v-for="info in datalist">
	  			<b>
	  				<img :src="reverUrl(info.pic)" alt="">
	  				<span>{{number(info.duration)}}</span>
	  			</b>
	  			<div>
	  				<h5>{{info.title}}</h5>
	  				<h6>{{times(info.stat.view)}}万次观看 · {{info.stat.danmaku}}弹幕</h6>
	  				<p>App 内打开</p>
	  			</div>
	  		</li>
	  	</ul>

	</div>


</template>

<script type="text/javascript">
	import axios from "axios";
	import {mapState} from "vuex";
	export default {
		name:"myvideo",
		data(){
			return {
				videoinfo:null,
				datalist:[],
				newVideoInfo:null,
				myID:JSON.parse(localStorage.myID),
				myAID:JSON.parse(localStorage.myAID)
			}
		},
		mounted(){
			// console.log(this.myAID)
			axios.get(`/x/web-interface/ranking/region?rid=${this.myID}&day=7&jsonp=jsonp`).then(res=>{
				console.log(res.data)
				for (var i = 0; i < res.data.data.length; i++) {
					if (res.data.data[i].aid === this.myAID) {
						this.videoinfo=res.data.data[i];	
						console.log(this.videoinfo);
						return;				
					}
				}
				
				this.videoinfo = res.data.data;
			});
			axios.get(`https://comment.bilibili.com/recommendnew,${this.myAID}`).then(res=>{
				// console.log(res.data);
				this.datalist = res.data.data.slice(0,20);
			})
		},
		components:{
			
		},
		methods:{
			reverUrl(url){

				return 'https:'+url+"@320w_200h.webp";
			},
			
			number(result){
				
    		var h = Math.floor(result / 3600) < 10 ? '0'+Math.floor(result / 3600) : Math.floor(result / 3600);
    		var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
    		var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
    		result = h + ":" + m + ":" + s;
    		return result;
			},

			times(n){
				 return Math.round(n/1000)/10;
			},

			createDate(day){
				var days = new Date(day);
				var mm = days.getMonth()+1;
				var dd = days.getDate();
				var reg	= mm + '-' + dd;
				return reg;
			}

		},

		computed:{
			...mapState(["avDetail","numsDetail"]),
			
		}
	}
	
</script>

<style scoped lang="scss">

	.clearup{clear: both;}
	img{width: 100%}
	#box {padding: 10px;}
	#box h1{background: #fb7299;width:100%;height: 50px;font-size: 20px;color: #fff;line-height: 50px;text-align: center; border-radius: 20px;}
	#box h2{font-size: 16px;color: #000;margin-top: 10px;}
	#box h3{font-size: 14px;color: #111;margin-top: 10px;}
	#box h3 span{font-size: 14px;color: #999;margin-left: 10px;}
	#box h4{font-size: 14px;color: #999;margin-top: 10px;}

	#list{overflow: hidden;border-top: 1px solid #eee;padding: 10px;}
	#list li{width: 100%;padding: 5px;float: left;display: flex;}
	#list li b{position: relative;}
	#list li b img{width: 120px;height :80px;border-radius: 10px;flex: 35%;}
	#list li b span{position: absolute;bottom: 8px;right: 8px;display: inline-block;height: 15px;width: 60px;background:rgba(33,33,33,.3);color: white;font-size: 12px;text-align: center;line-height: 15px;border-radius: 2px;}
	#list li div{margin-left: 10px;flex: 65%;height: 80px;position: relative;}
	#list li div h5{font-size: 14px;height: 40px;overflow: hidden;}
	#list li div h6{font-size: 12px;color: #999;height: 15px;text-align: 15px;}
	#list li div p{font-size: 10px;color: #fb7299;border: 1px solid #fb7299;padding: 2px;width: 60px;height:15px;text-align: center;border-radius: 2px;line-height: 15px;position: absolute;bottom: 0;}
</style>