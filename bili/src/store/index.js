//通过vuex 创建 store

import Vuex from "vuex";//提前下载
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex); //注册vuex模块



const store = new Vuex.Store({
	state:{
		//存储具体的共享状态信息
		mytitle:"卖座电影",
		datalist:[] //即将上映的数据
	},

	actions:{
		//如果异步请求， 在这里做异步请求
		mytitleAction(store,payload){
			//store 当前store,
			//payload "我不是药神"
			console.log("actions",payload);
			//基于传来的值， 进行异步请求，
			//
			// setTimeout(function(){
			//    store.commit("到哪个mutations",payload);
			// },2000)
			//
			//
			//如果是同步 直接 送到 mutations
		
			store.commit("mytitleMutation",payload);
		},

		myComingsoonAction(store,payload){
			axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
				console.log(res.data);
				store.commit("myComingsoonMutation",res.data.data.films);
			})
		}

	},

	mutations:{
		//修改状态 ， 并且记录状态
		mytitleMutation(state,payload){
			console.log("mutaions",payload);

			state.mytitle = payload;//修改共享状态
		},

		myComingsoonMutation(state,payload){
			state.datalist = payload;//datalist 共享状态受到影响
		}
	}
})

//存储共享状态的store 对象

export default store;

// vuex分为几层？
// state ，actions, mutations
// vuex工作流？
// 
// vuex要做异步在哪里做？actions
// vuex要改变状态怎么哪里做 ？ mutations
// 为什么在mutaion改变状态 ？记录状态修改，方便调试