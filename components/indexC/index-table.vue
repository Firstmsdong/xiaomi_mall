<template>
	<view class="floowTable u-f">
		<template v-if="conment.length>0">
			<view class="floowTableItem">
				<image :src="imgUrl+conment[0].img" mode=""></image>
			</view>
			<view class="floowTableItemC" style="background-color: #7064CA">
				<view class="">{{conment[0].name}}</view>
				<view class="">{{conment[0].summary}}</view>
				<view class=""></view>
				<view class="">¥{{conment[0].price}}</view>
			</view>
		</template>
		
		<template v-if="conment.length>0">
			<view class="floowTableItemC" style="background-color:#F65C5C">
				<view class="">{{conment[1].name}}</view>
				<view class="">{{conment[1].summary}}</view>
				<view class=""></view>
				<view class="">¥{{conment[1].price}}</view>
			</view>
			<view class="floowTableItem">
				<image :src="imgUrl+conment[1].img" mode=""></image>
			</view>
		</template>
		
		
	</view>
			
</template>

<script>
	export default{
		props:['conment']
	}
</script>

<style>
	.floowTable{flex-wrap: wrap;}
	.floowTableItem{width: 50%;height: 330rpx;}
	.floowTableItem image{width: 100%;height: 330rpx;}
	.floowTableItemC{width: 50%;}
	.floowTableItemC>view:nth-child(1){padding-left: 30rpx;padding-right: 100rpx;color: #FFFFFF;font-size: 30rpx;line-height: 46rpx;padding-top: 30rpx;}
	.floowTableItemC>view:nth-child(2){padding-left: 30rpx;padding-right: 30rpx;margin-top:15rpx;color: rgb(255,255,255,0.8);font-size: 22rpx;line-height: 30rpx;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
	.floowTableItemC>view:nth-child(3){margin-top: 25rpx;margin-left: 30rpx;width: 34rpx;height: 5rpx;background-color: #FFFFFF;}
	.floowTableItemC>view:nth-child(4){padding-left: 30rpx;padding-right: 30rpx;line-height: 100rpx;font-size: 33rpx;color: #DDDBFF;font-weight: bold;}
</style>
