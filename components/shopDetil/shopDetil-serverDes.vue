<template>
	<!-- 服务说明页面 -->
	<view class="server">
		<view class="serverBg"></view>
		<view class="serverCon">
			<view class="serverCon-title u-f">
				<view class="">服务说明</view>
				<view class="u-f-ajc" @click="closeServerView">
	                   <image src="../../static/image/error.png" mode=""></image>
				</view>
			</view>
			<block v-for="(item,index) in content" :key="index">
				<view class="serverCon-item">
					<view class="serverCon-item-title u-f u-f-aj">
						<image src="../../static/image/success.png" mode=""></image>
						<text>{{item.title}}</text>
					</view>
					<view class="serverCon-item-Con">{{item.summary}}</view>
				</view>
			</block>
			
			
			
		   
		   
		   
		    								
		</view>
	    <view class="sureBtn u-f-ajc" @click="closeServerView">确定</view>
	</view>
		
</template>

<script>
	
	export default {
		
		methods: {
			closeServerView(){
				console.log('关闭')
				this.$emit('close')
			}
		},
		props:["content"]
	}
	
	
	
</script>

<style>
	/* 服务弹窗 */
	.serverBg{position: fixed;top: 0;bottom: 0;left: 0;right: 0;background-color: rgb(0,0,0,0.5);}
	.serverCon{position: absolute;width: 100%;height: 1050rpx;bottom: 90rpx;background-color: #FFFFFF;}
	.serverCon-title>view:first-child{line-height: 110rpx;text-align: center;font-size: 32rpx;color: #000000;margin-left: 60rpx;flex: 1;}
	.serverCon-title>view:last-child{width: 60rpx;height: 110rpx;}
	.serverCon-title image{width: 40rpx;height: 40rpx;}
	.serverCon-item{border-bottom: 1rpx #E7E7E7 solid;margin-left: 20rpx;padding-top: 10rpx;padding-bottom: 20rpx;margin-right: 20rpx;}
	.serverCon-item-title{color: #000;font-size: 28rpx;height: 30rpx;line-height: 30rpx;}
	.serverCon-item-title image{width: 30rpx;height: 30rpx;margin-right: 10rpx;}
	.serverCon-item-Con{color: #999;font-size: 24rpx;line-height: 34rpx;margin-top: 10rpx;}
	.sureBtn{position: absolute;bottom: 0rpx;width: 100%;height: 90rpx;font-size: 28rpx;color: #FFFFFF;background-color: #00C3F5;text-align: center;}
</style>
