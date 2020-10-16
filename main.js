import Vue from 'vue'
import App from './App'
import store from "./store/index.js"
import check from './check/index.js'
Vue.config.productionTip = false
Vue.prototype.apiUrl="http://api.intewl.cn/api"
Vue.prototype.imgUrl="http://api.intewl.cn/uploads/"
Vue.prototype.check=check;
Vue.prototype.$request=function(url,data=''){
	
	return new Promise((reslove,reject)=>{
		uni.request({
			url:this.apiUrl+url,
			method:"POST",
			header: {
				'token': uni.getStorageSync('token')
			},
			data:data,
			success:(res)=>{
				//token错误和返回结果都是用code
				if(res.data.tcode==0){
					reslove({"tcode":0,"msg":"未登录"})
				}
				if(res.data.tcode==1){
					reslove(res.data)
				}
				if(res.data.tcode==2){
					uni.setStorageSync('token',res.data.token)
					uni.request({
						url:this.apiUrl+url,
						method:"POST",
						header: {
							'token': uni.getStorageSync('token')
						},
						data:data,
						success:(res)=>{
						}
					})
				}
				if(res.data.tcode==3){
					reslove({"tcode":0,"msg":"token失效"})
					uni.setStorageSync("token",'')
				}
				if(res.data.tcode==4){
					reslove({"tcode":0,"msg":"没有相关数据"})
					uni.setStorageSync("token",'')
				}
				
				if(res.data.code==0||res.data.code){
					reslove(res.data)
				}
				
				
			}
		})
	})
	
	
		
	
}
Vue.prototype.$href=function(data,type=1){
	if(uni.getStorageSync("token")){
		if(type==1){
			uni.navigateTo({
				url:data
			})
		}
		if(type==2){
			uni.switchTab({
				url:data
			})
		}
		
	}else{
		uni.navigateTo({
			url:"/pages/login/login?backurl="+data
		})
	}
}
Vue.prototype.$back=function(data,type=1){
	if(uni.getStorageSync("token")){
		if(type==1){
			uni.navigateTo({
				url:data
			})
		}else{
			uni.switchTab({
				url:data
			})
		}
			

	}else{
		uni.navigateTo({
			url:"/pages/login/login?backurl=1"
		})
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
