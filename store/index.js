import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
	// 定义参数的方法
	state:{
		attrVal:[],//detailAttr里的valindex [0,0]
		attrTxt:'请选择商品规格尺寸',
		isLogin:0
	},
	// 修改参数需要的方法
	mutations:{
		setAttr(state,data){
			state.attrVal=data.attrVal
			state.attrTxt=data.attrTxt
		},
		defaultAttr(state){
			state.attrVal=[]
			state.attrTxt='请选择商品规格尺寸'
		},
		login(state){
			state.isLogin=1;
		},
		logout(state){
			state.isLogin=0;
			uni.setStorageSync('token','')
		}
		
	}
})
// 导出并在  main。js中输入
export default store;