<template>
	<view class="">
		<!-- 收货人 -->
		<view class="consignee u-f">
			<view class="consignee-title u-f-ac">收货人:</view>
			<view class="consignee-content">
				<view class="consignee-content-name u-f-ac">
					<input type="text" value="" v-model="name" placeholder="收货人姓名"/>
				</view>
				<view class="consignee-content-sex u-f-ac">
					<!-- :class="{activeAttr:valueIndex[index]==childeIndex}" -->
					<view class="u-f-ajc" :class="{active:sexIndex==0}" @click="sexSelClick(0)">先生</view>
					<view class="u-f-ajc" :class="{active:sexIndex==1}" @click="sexSelClick(1)">女士</view>	
				</view>
			</view>
		</view>
		<!-- 电话号码 -->
		<view class="phone u-f">
			<view class="phone-title u-f-ac">电话号码:</view>
			<view class="phone-con">
				<input type="text" value="" placeholder="收货人联系方式" v-model="phone"/>
			</view>
		</view>
		<!-- 收货地址 -->
		<view class="address u-f">
			<view class="address-title u-f-ac">收货地址:</view>
			<view class="address-con">
				<Picker @update="update" @change="change">
				   <text >{{text}}</text> 
				</Picker>
			</view>
		</view>
		<!-- 收货地址详细内容 -->
		<view class="addressDetil u-f">
			<view class="addressDetil-title u-f-ac">收货地址:</view>
			<view class="addressDetil-con">
				<textarea value="" placeholder="请输入详细地址" v-model="addressDetil"/>
			</view>
		</view>
	    <!-- 设置默认地址 -->
		<view class="u-f setDefault u-f-jsb">
		    <view class="setDefault-text">设为默认地址</view>
			<view class="setDefault-switch">
				 <switch checked @change="switch1Change" style="transform:scale(0.7)" color="#0BB8EB"/>
			</view>
		   
		</view>
		<!-- 保存收货地址 -->
		<view class="conserveAds u-f-ajc" @click="conserverAddress">保存收货地址</view>
		 
	</view>
</template>

<script>
	
	import Picker from '../../components/gb-picker/gb-picker.vue'
	
	export default {
		components:{Picker},
		data() {
			return {
				  name:'',//输入的姓名
				  sexIndex:'0',//0 男士 1女士
				  phone:'',//输入的电话号码
				  text: '请输入收货地址',//选择的三级联动地址
				  addressDetil:'',//输入的详细地址
				  defaultAdres:'1',//默认地址 0：非默认  1：默认
				  back:'',//设置跳转到哪个页面
		}
		},
		onLoad(option) {
			this.back=option.back
		},
		
		methods: {
			// 三级联动相关逻辑
	         update (e) {
	            
	         },
	         change(e) {
	            console.log(e.code)
	            this.text = e.name.join('/')
	         },
			 // 性别选择
			 sexSelClick(index){
				 this.sexIndex = index;
			 },
			 // 设置默认地址
			 switch1Change(e){
				 console.log(e.target.value)
				 if(e.target.value == true){
					 this.defaultAdres = '1'
				 }else{
					  this.defaultAdres = '0'
				 }
			 },
			 // 保存收货地址
			 conserverAddress(){
				 
				 if(!this.check.username(this.name)){return;}
				 if(!this.check.telphone(this.phone)){return;}
				 if(!this.check.city(this.text)){return;}
				 if(!this.check.address(this.addressDetil)){return;}
				 this.$request('/member/addressAdd',{
				 		username:this.name,
				 		telphone:this.phone,
				 		city:this.text,
				 		address:this.addressDetil,
				 		default:this.defaultAdres,//0表示不默认1表示默认
				 		sex:this.sexIndex//0表示先生，1表示女士
				 	})
				 	.then(res=>{
				 		// {code: 1, msg: "添加地址成功"}
						console.log(res);
					    if(res.code == 1){
							uni.navigateBack({
							})
						}
				 		
				 	})
				 
				
			 }
		}
	}
</script>

<style>
	.consignee{border-bottom: 1rpx solid #E5E5E5;margin-left: 20rpx;margin-right: 20rpx;}
	.consignee-title{height: 90rpx;color: #000000;font-size: 28rpx;line-height: 90rpx;width: 140rpx;}
	.consignee-content{flex: 1;}
	.consignee-content-name{border-bottom: 1rpx solid #E5E5E5;height: 90rpx;line-height: 90rpx;}
	..consignee-content-name>input{font-size: 28rpx;height: 90rpx;}
	.consignee-content-sex{height: 90rpx;}
	.consignee-content-sex>view {margin-right: 20rpx;border: 1rpx solid #E5E5E5;padding: 5rpx;width: 75rpx;height: 40rpx;line-height: 45rpx;font-size: 28rpx;}
	.consignee-content-sex .active{background-color: #00C3F5;color:#FFFFFF;}
	/* 电话号码 */
	.phone{border-bottom: 1rpx solid #E5E5E5;margin-left: 20rpx;margin-right: 20rpx;}
	.phone-title{height: 90rpx;color: #000000;font-size: 28rpx;line-height: 90rpx;width: 140rpx;}
	.phone-con{height: 90rpx;line-height: 90rpx;}
	.phone-con input{height: 90rpx;line-height: 90rpx;font-size: 28rpx;}
	/* 收货地址 */
	.address{border-bottom: 1rpx solid #E5E5E5;margin-left: 20rpx;margin-right: 20rpx;}
	.address-title{height: 90rpx;color: #000000;font-size: 28rpx;line-height: 90rpx;width: 140rpx;}
	.address-con{height: 90rpx;line-height: 90rpx;}
	.address text{height: 90rpx;line-height: 90rpx;font-size: 28rpx;}
	/* 请输入详细地址 */
	.addressDetil{border-bottom: 1rpx solid #E5E5E5;margin-left: 20rpx;margin-right: 20rpx;}
	.addressDetil-title{height: 90rpx;color: #000000;font-size: 28rpx;line-height: 90rpx;width: 140rpx;}
	.addressDetil-con{height: 180rpx;flex: 1;}
	.addressDetil-con textarea{height: 180rpx;font-size: 28rpx;width: 100%;line-height: 90rpx;}
	/* 保存收货地址 */
	.conserveAds{margin-top: 80rpx;margin-left: 70rpx;margin-right: 70rpx;height: 80rpx;line-height: 80rpx;font-size: 28rpx;background-color: #00C3F5;border-radius: 40rpx;color: #FFFFFF;}
	/* 设置默认地址 */
	.setDefault{padding-left: 20rpx;padding-right: 20rpx;height: 65rpx;margin-top: 30rpx;}
	.setDefault-text{font-size: 28rpx;height: 65rpx;line-height: 65rpx;text-align: center;}
	.setDefault-switch .switch{height: 90rpx;}
</style>
