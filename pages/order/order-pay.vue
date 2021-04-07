<template>
	<view class="">
		<view class="paymessage">
			<view class="paymessage-con u-f-ajc">订单号：201989897764588</view>
		    <view class="paymessage-price u-f-ajc">
				<view class="paymessage-price-b">¥</view>
				<view class="">2000</view>	
			</view>
			<view class="paymessage-con u-f-ajc">最迟支付时间：2020-3-9 14：00</view>
		</view>
	    <view class="pay-way">
	    	<view class="pay-way-title">请选择支付方式</view>
	    	<view class="">
	    		<view class="payway-item u-f u-f-jsb">
	    			<view class="u-f">
						<view class="icon iconfont icon-weixin"></view>
						<view class="text">微信支付</view>	
					</view>
	    			<view class="chat-sel">
						<image src="../../static/image/checkbox1.png" mode=""></image>
					</view>		   			
	    		</view>
				
				<view class="payway-item u-f u-f-jsb">
					<view class="u-f">
						<view class="icon iconfont icon-zhifubao"></view>
						<view class="text">支付宝支付</view>	
					</view>
					<view class="chat-sel">
						<image src="../../static/image/checkbox1.png" mode=""></image>
					</view>		   			
				</view>
	    	</view>	
	    </view>
		
		<view class="surePay u-f u-f-ajc">
			<view class="surePay-con u-f u-f-ajc" @click="surePay">确认支付</view>  
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			surePay(){
				uni.navigateTo({
					url:'./order-payStatus'
				})
			}
		}
	}
</script>

<style>
	.paymessage {width: 100%;margin-top: 54rpx;}
	.paymessage-con {width: 100%;line-height: 46rpx;color: #999999;font-size: 24rpx;height: 46rpx;}
	.paymessage-price{width: 100%;line-height: 64rpx;height: 64rpx;font-size: 70rpx;color: #000000;}
	.paymessage-price-b{font-size: 28rpx;height: 64rpx;position: absolute;bottom: 0;}
	.pay-way{height: 200rpx;margin-left: 50rpx;margin-right: 50rpx;}
	.pay-way-title{line-height: 55rpx;font-size: 28rpx;line-height: 55rpx;}
	.payway-item{width: 100%;height: 76rpx;}
	.payway-item view {height: 76rpx;line-height: 76rpx;}
	.chat-sel image{width: 30rpx;height: 30rpx;}
	.text{font-size: 30rpx;}
	.icon-weixin{font-size: 60rpx;color: #09BB07;}
	.icon-zhifubao{font-size: 60rpx;color:#00A4E6 ;}
	.surePay{position: fixed;bottom: 120rpx;width: 100%;height:80rpx ;}
	.surePay-con{height: 80rpx;border-radius: 40rpx;color: #FFFFFF;background-color: #0ABAEE;font-size: 28rpx;width: 624rpx;}
</style>
