<template>
	<view class="bttomView u-f-ac u-f-jsb">
			<view class="allsel u-f">
				<view class="allsel-img u-f u-f-ac">
					<image src="../../static/image/checkbox.png" mode=""></image>
					<!-- <image src="../../static/image/checkbox.png" mode=""></image> -->
				</view>
				<view class="allsel-title">全选</view>
			</view>
			<view class="pricePay u-f">
				<view class="pricePay-title">总计</view>
				<view class="pricePay-price">¥299</view>
				<view class="pricePay-gopay u-f u-f-ajc">
					<view class="pricePay-gopay-title">去结算</view>
					<view class="pricePay-gopay-con">(1件)</view>
				</view>
			</view>
		</view>
	
</template>

<script>
</script>

<style>
	/* 底部选项视图 */
	.bttomView{width: 100%;height: 106rpx;position: fixed;bottom: 0rpx;border-top: 1rpx solid #A1A1A1;background-color: #FFFFFF;}
	.allsel{margin-left: 20rpx;}
	.allsel-img{height: 106rpx;}
	.allsel-img image{width: 35rpx;height: 35rpx;}
	.allsel-title{height: 106rpx;line-height: 106rpx;font-size: 24rpx;color: #A1A1A1;text-align:center ;margin-left: 15rpx;}
	.pricePay-title{font-size: 28rpx;line-height: 106rpx;height: 106rpx;color: #000000;}
	.pricePay-price{font-size: 28rpx;color: #FF0000;line-height: 106rpx;height: 106rpx;}
	.pricePay-gopay{background-color: #0ABAEE;height: 80rpx;width: 230rpx;border-radius: 40rpx;margin-top: 13rpx;margin-left: 20rpx;margin-right: 20rpx;}
	.pricePay-gopay-title{font-size: 28rpx;color: #EEEEEE;}
	.pricePay-gopay-con{font-size: 24rpx;color: #EEEEEE;}
</style>
