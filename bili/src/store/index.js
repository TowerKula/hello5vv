//通过vuex 创建 store

import Vuex from "vuex";//提前下载
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex); //注册vuex模块



const store = new Vuex.Store({
	state:{
		//存储具体的共享状态信息
		datalist:[], //即将上映的数据,
		menuMsg:'',
		menuNew:'',
		rankId:null
		
	},
	actions:{
		//如果异步请求， 在这里做异步请求
		mytitleAction(store,payload){
			//store 当前store,
			//payload "我不是药神"
			// console.log("actions",payload);
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
		msgMenuFn(store,payload){
			store.commit('msgMenuFnMutation',payload);
		},
		msgMenuNew(store,payload){
			store.commit('msgMenuNewMutation',payload);
			
		}
		,avDetail(store,payload){
			store.commit('avDetailMutation',payload);
		},
		numsDetail(store,payload){
			store.commit('numsDetailMutation',payload);
		},
		rankIdAction(store,payload){
			// console.log('111',payload)
			store.commit('rankIdMutation',payload);
		}
	},

	mutations:{
		//修改状态 ， 并且记录状态
		mytitleMutation(state,payload){
			// console.log("mutaions",payload);
			state.mytitle = payload;//修改共享状态
		},

		myComingsoonMutation(state,payload){
			state.datalist = payload;//datalist 共享状态受到影响
		},
		msgMenuFnMutation(state,payload){
			// console.log('mutaions',payload);
			state.menuMsg = payload;
		},
		msgMenuNewMutation(state,payload){
			// console.log('mutaions',payload);
			state.menuNew = payload;
		},
		avDetailMutation(state,payload){
			// console.log('mutaions',payload);
			state.avDetail = payload;
		},
		numsDetailMutation(state,payload){
			// console.log('mutaions',payload);
			state.numsDetail = payload;
		},
		rankIdMutation(state,payload){
			// console.log('mutaions',payload);
			// console.log('222',payload)
			state.rankId = payload;
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