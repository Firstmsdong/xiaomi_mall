<template>
	<view class="">
		<view class="header">
			<!-- 导航栏 -->
			<view class="navBar u-f-ajc u-f-jsb">
				<view class="search">
					<image src="../../static/search.png" mode=""></image>
				</view>
				<view class="logo">
					<image src="../../static/image/logo.png" mode=""></image>
				</view>
				<view class="cart">
					<image src="../../static/image/icon2.png" mode=""></image>
				</view>
			</view>
			<!-- 顶部栏 -->
			<view class="meanu u-f u-f-jsb">
				<view class="meanu-item active">推荐</view>
				<view class="meanu-item" v-for="(itme,index) in contents" :key="index">{{itme.catename}}</view>	
				
			</view>
		</view>
		<view class="blank"></view>
	</view>
</template>

<script>
	export default{
		props:['contents']
	}
</script>

<style>
	.header{position: fixed;z-index: 99;width: 100%;height: 180rpx;background-color: #FFFFFF}
	.navBar{height: 110rpx;width: 100%;}
	.navBar .search image{width: 30rpx;height: 30rpx;margin-left: 20rpx;}
	.navBar .logo image{width: 140rpx;height: 30rpx;}
	.navBar .cart image{width: 30rpx;height: 30rpx;margin-right: 20rpx;}
	.meanu{height: 70rpx;margin-left: 20rpx;margin-right: 20rpx;}
	.meanu-item{font-size: 28rpx;color: #000000;}
	.meanu .active {color: #F76260;border-bottom: 10rpx solid #F76260;}
	.blank{height: 180rpx;}
</style>
