<template>
	<view class="">
		<!-- 轮播图 -->
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in swiperCon" :key="index">
					<view class="swiper-item">
						<navigator url="#">
							<image :src="imgUrl+item.image" mode=""></image>
						</navigator>
						
					</view>
				</swiper-item>

			</swiper>
		
	</view>
</template>

<script>
	export default{
		props:['swiperCon']
	}
</script>

<style>
	.swiper{width: 100%;height: 390rpx;}
	.swiper image{width: 100%;height: 390rpx;}
</style>
