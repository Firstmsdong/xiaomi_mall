<template>
	<view>
	     <view class="cateItem u-f">
	     	<view class="cateItem-sel u-f-ajc">
	     		<image src="../../static/image/checkbox1.png" mode=""></image>
	     	</view>
			<view class="cateItem-img">
				<image src="../../static/image/dimg1.jpg" mode=""></image>
			</view>
			<view class="cateItem-con">
				<view class="cateItem-con-des u-f-aj">苹果（Apple）ipad2019款第七代 10.2英寸2018款9.7英寸air2更新版,10.2英寸2018款9.7英寸air2更新版</view>
				<view class="cateItem-con-cals">appad 黑色</view>
				<view class="cateItem-con-price-input u-f u-f-jsb u-f-aj">
					<view class="cateItem-con-price">¥299</view>
					<view class="cateItem-con-add-reduce u-f">
						<view class="ateItem-con-reduce">-</view>
						<view class="ateItem-con-input">
							<input type="text" value="1" />
						</view>
						<view class="ateItem-con-add">+</view>
							
						
					</view>	
				</view>
			</view>
	     </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.cateItem{width: 100%;height: 270rpx;border-bottom: 1rpx solid #000000;}
	.cateItem-sel{margin-left: 20rpx;height: 270rpx;width: 35rpx;height: 200rpx;margin-top: 35rpx;}
    .cateItem-sel image{width: 35rpx;height: 35rpx;}
	.cateItem-img{height: 200rpx;margin-top: 35rpx;}
	.cateItem-img image{width: 200rpx;height: 200rpx;}
	.cateItem-con {margin-right: 20rpx;height: 200rpx;margin-top: 35rpx;}
	.cateItem-con-des{flex: 1;line-height: 40rpx;height: 80rpx;text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;
-webkit-line-clamp: 2;line-clamp: 2; -webkit-box-orient: vertical;font-size: 28rpx;}
    .cateItem-con-cals{line-height: 40rpx;height: 40rpx;font-size: 24rpx;text-align: left;color: #AAAAAA;}
	.cateItem-con-price-input{height: 80rpx;}
	.cateItem-con-price{height: 80rpx;line-height: 80rpx;font-size: 28rpx;color: #FF0000;}
	.cateItem-con-price-input{height: 80rpx;}
	.cateItem-con-add-reduce{margin-top: 17.5rpx;}
	.ateItem-con-reduce{border: 1rpx solid #C0C0C0;width: 45rpx;height: 45rpx;text-align: center;}
	.ateItem-con-add{border: 1rpx solid #C0C0C0;width: 45rpx;height: 45rpx;text-align: center;}
	.ateItem-con-input input{width: 65rpx;height: 45rpx;border-top: 1rpx solid #C0C0C0;border-bottom: 1rpx solid #C0C0C0;text-align: center;}
	
</style>
