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
				<view class="fromDataItem u-f u-f-jsb">
					<view class="">
						<input type="text" value="" placeholder="请输入验证码" v-model="codeNum"/>
					</view>
					<view class="getCode u-f-ajc"
					:class="{active:codeFlag}"
					@click="getcodeClick()">{{codeText}}</view>
				</view>
				<view class="fromDataItem">
					<input type="text" value="" placeholder="请输入密码" v-model="pwdStr"/>
				</view>
			</view>
		    <view class="registBtn u-f-ajc"
			@click="registClick()">注册</view>
			<view class="registDes u-f-ajc">
				<view class="">已有账号？</view>
				<view class="">点此登录</view>
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
				codeNum:'',
				pwdStr:''
			}
		},
		methods: {
			// 获取验证码
			getcodeClick(){
				console.log(this.telephone);
				if(!this.check.telphone(this.telephone)){return}
				if(this.codeFlag == false){return}
				this.sendMessage();
			},
			//发送验证码请求
			sendMessage(){
				uni.request({
					url:this.apiUrl+"/index/getSmsCode",
					method:"POST",
					data:{telphone:this.telephone},
					success: (res) => {
						if(res.data.result == 0){
							this.codeFlag = false
							var time = 60;
							this.codeText = time+"秒后，重新获取"
							var timer = setInterval(()=>{
								if(time >1){
									time--
									this.codeText = time+"秒后，重新获取"
								}else{
									this.codeFlag = true
									clearInterval(timer)
									this.codeText = '获取验证码'
								}
							},1000)
						}else{
							uni.showToast({
								title:res.data.errmsg,
								icon:'none'
							})

						}
					}
				})
			},
			//注册
			registClick(){
				console.log('注册')
				if(!this.check.telphone(this.telephone)){return}
				if(!this.check.code(this.codeNum)){return}
				if(!this.check.password(this.pwdStr)){return}
				uni.request({
					url:this.apiUrl+"/index/register",
					method:"POST",
					data:{
						telphone:this.telephone,
						password:this.pwdStr,
						code:this.codeNum
					},
					success: (res) => {
						console.log(res)
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
</style>
