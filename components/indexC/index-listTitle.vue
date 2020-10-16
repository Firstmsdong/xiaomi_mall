<template>
	<view class="listTile">
		<view class="listTileCon">{{name}}</view>
	    <view class="listTileLine"></view>
	</view>
</template>

<script>
	export default{
		props:[
			'name'
		]
	}
</script>
   
<style>
	.listTile{width: 100%;height: 180rpx;}
	.listTileCon{font-size: 36rpx;color: #000000;font-weight: bold;text-align: center;margin-top: 50rpx;line-height: 90rpx;}
	.listTileLine{background-color: #0AB9EC;width: 50rpx;height: 10rpx;text-align: center;margin: 0 auto;}
</style>
