<template>
	<view>
		<view class="member-top">
			<template v-if="!imageUrl">
				<image src="../../static/image/member-tx.png" class="member-tx" mode=""></image>
			</template>
			<template v-else>
				<image :src="imageUrl" class="member-tx" mode=""></image>
			</template>
			
			<view class="userInfo">
				<view class="loginReg" v-if="code==0">
					<navigator url="../login/login">登录/注册</navigator>
				</view>
				<view class="loginInfo" v-else>
					<template v-if="!member.nickname">
						<text class="username">因特网</text>
					</template>
					<template v-else>
						<text class="username">{{member.nickname}}</text>
					</template>
					<text class="nickname">{{member.telphone}}</text>
				</view>
				<view class="code">
					<image src="../../static/image/ewm.png" mode=""></image>
				</view>
			</view>
		</view>
	    <view class="orderState u-f-ajc">
	    	<view class="orderItem">
	    		<image src="../../static/image/member-icon1.png" mode=""></image>
				<text>待付款</text>
	    	</view>
			<view class="orderItem">
				<image src="../../static/image/member-icon2.png" mode=""></image>
				<text>待收货</text>
			</view>
			<view class="orderItem">
				<image src="../../static/image/member-icon3.png" mode=""></image>
				<text>待评价</text>
			</view>
			<view class="orderItem">
				<image src="../../static/image/member-icon4.png" mode=""></image>
				<text>全部订单</text>
			</view>
	    </view>
	    <view class="menmu">
			<navigator url="../address/adslist" hover-class="none">
				<view class="menmuItem u-f u-f-jsb">
					<view class="menmuItemleft u-f-ajc">
						<image src="../../static/image/member-menu1.png" mode=""></image>
						<text class="u-f-ajc">收货地址</text>
					</view>
					<view class="menmuItemright u-f-ajc">
						<image src="../../static/image/more.png" mode=""></image>
					</view>
				</view>
			</navigator>
			
			
			<view class="menmuItem u-f u-f-jsb">
				<view class="menmuItemleft u-f-ajc">
					<image src="../../static/image/member-menu2.png" mode=""></image>
					<text class="u-f-ajc">在线客服</text>
				</view>
				<view class="menmuItemright u-f-ajc">
					<image src="../../static/image/more.png" mode=""></image>
				</view>
			</view>
			<view class="menmuItem u-f u-f-jsb">
				<view class="menmuItemleft u-f-ajc">
					<image src="../../static/image/member-menu3.png" mode=""></image>
					<text class="u-f-ajc">邀请有礼</text>
				</view>
				<view class="menmuItemright u-f-ajc">
					<image src="../../static/image/more.png" mode=""></image>
				</view>
			</view>
			<view class="menmuItem u-f u-f-jsb">
				<view class="menmuItemleft u-f-ajc">
					<image src="../../static/image/member-menu4.png" mode=""></image>
					<text class="u-f-ajc">关于我们</text>
				</view>
				<view class="menmuItemright u-f-ajc">
					<image src="../../static/image/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<template v-if="code ==1">
			<view class="backlogin" @click="loginOut">退出登录</view>
		</template>
	    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:'',
				member:[],
				imageUrl:''
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getInfor()
		},
		methods: {
			getInfor(){
				this.$request('/member/index')
				.then(res=>{
					console.log(res)
					this.code = res.code
					this.member = res.data;
				})	
			},
			loginOut(){
				console.log('退出登录')
			}
			
		}
	}
</script>

<style>
.member-top{height: 336rpx;background: url(../../static/image/member-top.png) no-repeat;background-size: 100% 336rpx;position: relative;}
.member-tx{position: absolute;top: 165rpx;left: 30rpx;width: 110rpx;height: 110rpx;border-radius: 50%;}
.loginReg{width: 165rpx;height: 45rpx;line-height: 45rpx;font-size: 28rpx;color: #FFFFFF;border: 1rpx solid #FFFFFF;position: absolute;left: 160rpx;top: 200rpx;text-align: center;border-radius: 10rpx;}
.loginInfo{position: absolute;left: 160rpx;top: 180rpx;font-size: 28rpx;color: #FFFFFF}
.loginInfo text.username{display: block;font-size: 28rpx;color: #FFFFFF;height: 42rpx;line-height: 42rpx;}
.loginInfo text.nickname{display: block;font-size: 24rpx;color: #FFFFFF;height: 42rpx;line-height: 42rpx;}
.code{width: 35rpx;height: 35rpx;position: absolute;top: 200rpx;right: 35rpx;}
.code image{width: 35rpx;height: 35rpx;}
.orderItem{width: 25%;}
.orderItem image{width: 70rpx;height: 56rpx;display: block; margin: 0 auto;}
.orderItem text {font-size: 28rpx;line-height: 80rpx;text-align: center;display: block;}
.menmu{border-top: 10rpx solid #F5F5F5;}
.menmuItem{height: 90rpx;margin-left: 20rpx;margin-right: 20rpx;border-top: 1rpx solid #F5F5F5;}
.menmuItemleft image{width: 30rpx;height: 30rpx;}
.menmuItemleft text{font-size: 28rpx;margin-left: 25rpx;height: 90rpx;text-align: center;}
.menmuItemright image{height: 26rpx;width: 26rpx;}
.backlogin{margin-top: 30rpx;margin-left: 30rpx;margin-right: 30rpx;height: 85rpx;font-size: 28rpx;color: #000;text-align: center;line-height: 85rpx;border: 1rpx solid #e5e5e5;}
</style>
