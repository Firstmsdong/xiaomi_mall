<template>
	<view class="">
		<view class="pay-iocn u-f u-f-ajc">
			<image src="../../static/image/checkbox1.png" mode=""></image>
		</view>
		<view class="pay-success u-f u-f-ajc">支付成功</view>	
		<view class="pay-con u-f u-f-ajc">订单支付成功后商家会尽快给您发货</view>
		<view class="pay-con u-f u-f-ajc">请小主人耐心等待呦~</view>
		<view class="pay-go u-f u-f-ajc">
			<view class="pay-go-out u-f u-f-jsb">
				<view class="pay-go-out-left u-f u-f-ajc" @click="lookOrder">查看订单</view>
				<view class="pay-go-out-right u-f u-f-ajc" @click="backFirstPage">回到首页</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			// 查看订单
			lookOrder(){
				console.log('查看订单')
			},
			// 回到首页
			backFirstPage(){
				console.log('返回首页')
			}
		}
	}
</script>

<style>
	.pay-iocn{width: 100%;height: 160rpx;margin-top: 120rpx;}
	.pay-iocn image{width: 160rpx;height: 160rpx;}
	.pay-success{width: 100%;height: 90rpx;line-height: 90rpx;margin-top: 16rpx;font-size: 32rpx;color: #000000;}
	.pay-con{width: 100%;height: 50rpx;line-height: 50rpx;font-size: 28rpx;color: #999999;}
	.pay-go{width: 100%;height: 50rpx;margin-top: 80rpx;}
	.pay-go-out{width: 476rpx;height: 50rpx;}
	.pay-go-out-left{border: 1rpx solid #999999;color: #999999;font-size: 28rpx;width: 200rpx;margin-left: 1rpx;border-radius: 6rpx;}
	.pay-go-out-right{color: #FFFFFF;font-size: 28rpx;width: 200rpx;background-color: #0ABAEF;border-radius: 6rpx;}
</style>
