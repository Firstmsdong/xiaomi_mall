<template>
	<view>
		<view class="">
			<view class="logo">
				<image src="../../static/logo.png" class="logoimg" mode=""></image>
			</view>
			<view class="fromData">
				<view class="fromDataItem">
					<input type="text" value="" placeholder="请输入手机号" v-model="telephone"/>
				</view>
				<view class="fromDataItem">
					<input type="password" value="" placeholder="请输入密码" v-model="pwdStr"/>
				</view>
			</view>
		    <view class="registBtn u-f-ajc"
			@click="loginClick()">登录</view>
			<view class="registDes u-f-ajc">
				<view class="">
					<navigator url="">忘记密码?</navigator>
				</view>
				<text>|</text>
				<view class="">
					<navigator url="../regist/regist">注册账号</navigator>
				</view>
				
				
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeText:"获取验证码",
				codeFlag:true,
				telephone:'',
				pwdStr:''
			}
		},
		methods: {
			
			//登录
			loginClick(){
				console.log('登录')
				if(!this.check.telphone(this.telephone)){return}
				if(!this.check.password(this.pwdStr)){return}
				uni.request({
					url:this.apiUrl+"/index/login",
					method:"POST",
					data:{
						telphone:this.telephone,
						password:this.pwdStr,
					},
					success: (res) => {
						if(res.data.code !=1){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							uni.setStorageSync('token', res.data.data.token);
							uni.switchTab({
								url:'../personCenter/personCenter'
							})
						}
						
					}
				})
			}
		}
	}
</script>

<style>
.logo{width: 250rpx;height: 250rpx;display:block;margin: 70rpx auto 15rpx;}
.logo image {width: 250rpx;height: 250rpx;}
.fromData{margin-top: 30rpx;margin-left: 60rpx;margin-right: 60rpx;}
.fromDataItem{border-bottom: 1rpx solid #AAAAAA;height: 74rpx;padding-top: 40rpx;}
.getCode{height: 60rpx;background-color: #D9D9D9;color: #000000;font-size: 25rpx;text-align: center;padding-left: 20rpx;padding-right: 20rpx;}
.getCode.active{background-color:#23BAEF ;color: #EEEEEE;}
.registBtn{margin-top: 80rpx;margin-left:60rpx;margin-right: 60rpx;height: 86rpx;background-color: #23BAEF;color: #EEEEEE;font-size: 28rpx;}

.registDes{margin-top:60rpx ;}
.registDes>view:first-child{font-size: 24rpx;color: #B7B7B7;}
.registDes>view:last-of-type{font-size: 26rpx;color: #23BAEF;}
.registDes text{margin-left: 10rpx;margin-right: 10rpx;color: #B7B7B7;font-size: 24rpx;}
</style>
