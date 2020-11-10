<template>
	<view class="shopNav u-f">
			<view class="" v-for="(item,index) in content" :key="index">
				<navigator :url="'../../pages/shopDetil/shopDetil?id='+item.id" hover-class="none">
					<image :src="imgUrl+item.image" mode=""></image>
					<text>{{item.title}}</text>
				</navigator>
			</view>
			
		</view>
	
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style>
	.shopNav{width: 100%}
	.shopNav view{width: 25%;}
	.shopNav image{width: 100rpx;height: 100rpx; margin-top:25rpx ;display: block;margin: 0 auto;}
	.shopNav text{line-height: 100rpx;font-size: 24rpx;color: #000000;height: 100rpx;display: block;text-align: center;}
</style>
