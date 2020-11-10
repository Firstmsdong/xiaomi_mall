<template>
	<view class="serverView u-f">
		     
			<view class="u-f-ajc" v-for="(item,index) in content" :key="index">
				<image :src="imgUrl+item.image" mode=""></image>
				<text>{{item.title}}</text>
			</view>
		
		
	</view>
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style>
	.serverView{width: 100%;height: 70rpx;}
	.serverView view{width: 33.33%;height: 70rpx;}
	.serverView image{width: 35rpx;height: 35rpx;margin-right: 20rpx;}
	.serverView text{line-height: 70rpx;font-size: 24rpx;color: #a3a3a3;}
</style>
