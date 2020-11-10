<template>
	<view class="carousel">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#24B8F8">
			<swiper-item v-for="(item,index) in content" :key=index>
				<image :src="imgUrl+item.image" mode=""></image>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default{
		props:['content']
	}
</script>
       
<style>
	.carousel{width: 100%;height: 525rpx;border-bottom: 1rpx #E9E9E9 solid;}
	.carousel swiper{width: 470rpx;height: 525rpx;margin: 0 auto;}
</style>
