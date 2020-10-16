<template>
	<view class="shopListItem">
		<view class="ItemImage u-f-ajc">
			<image :src="imgUrl+content.mainimage" mode=""></image>
		</view>
		<view class="itemDes">{{content.smalltitle}}</view>
		<view class="itemMsg u-f">
			<view class="">免息</view>
			<view class="">{{content.summary}}</view>
		</view>
		<view class="itemPric">¥{{content.price}}</view>
	</view>
				   
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style>
	.shopListItem{width: 370rpx;height: 560rpx;background-color:#FFFFFF;overflow: hidden;margin-top: 10rpx;}
	.ItemImage{margin-top: 40rpx;width: 100%;height: 316rpx;}
	.ItemImage image{width: 316rpx;height: 316rpx;}
	.itemDes{width: 100%;height: 50rpx;line-height: 50rpx;text-align: center;font-size: 28rpx;color: #000000;}
	.itemMsg{margin-left: 10rpx;margin-right: 10rpx;margin-top: 10rpx;border: 1rpx #CF0104 solid;font-size: 24rpx;height: 40rpx;}
	.itemMsg>view:first-child{background-color: #CF0104;color: #FFFFFF;width: 70rpx;text-align: center;line-height: 40rpx;}
	.itemMsg>view:last-child{color: #CF0104;flex: 1;ovewtext-overflow: ellipsis;height: 40rpx;overflow: hidden;}
	.itemPric{width: 100%;height: 80rpx;line-height: 80rpx;text-align: center;font-size: 28rpx;color:#CF0104 ;}
</style>
