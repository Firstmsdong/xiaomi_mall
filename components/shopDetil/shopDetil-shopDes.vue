<template>
	<view class="shopDes">
		<view class="shopDes-Des">
			<!-- <label v-if="detail.tag==1">新品</label>
				<label v-if="detail.tag==2">热销</label>
				<label v-if="detail.tag==3">促销</label> -->
			<text v-if="content.tag == 1">新品</text>
			<text v-if="content.tag == 2">热销</text>
			<text v-if="content.tag == 3">促销</text>
			{{content.title}}
		</view>
		<view class="shopDes-active">{{content.summary}}</view>
		<view class="pricNum u-f u-f-jsb">
			<view class="shopDes-price u-f-ac">
				<view class="price"><text>¥</text>{{content.price}}</view>
				<view class="priceBefore">    ¥{{content.market_price}}</view>
			</view>
			<view class="mounthNum">月销量{{content.sale}}件</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["content"]
	}
</script>

<style>
	.shopDes{width: 100%;border-bottom: 1rpx #E9E9E9 solid;}
	.shopDes-Des{padding: 20rpx 30rpx;font-size: 28rpx;color: #000;line-height: 40rpx;}
	.shopDes-Des text{background-color: #17BFF4;width: 80rpx;height: 40rpx;color: #FFFFFF;border-radius: 5rpx;padding-left: 5rpx;padding-right:5rpx;}
	.shopDes-active{padding: 0rpx 30rpx;font-size: 24rpx;color: #999;}
	.pricNum{padding: 25rpx 30rpx;}
	.price{font-size: 36rpx;color: #f0415f;}
	.priceBefore {font-size: 28rpx;color: #999;margin-left: 20rpx;text-decoration: line-through;}
	.mounthNum {font-size: 28rpx;color: #999;}
	
</style>
