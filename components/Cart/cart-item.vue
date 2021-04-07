<template>
			<view class="cateItem u-f">
				<view class="cateItem-sel u-f-ajc" @click="selshopClick">
					<image src="../../static/image/checkbox1.png" v-if="content.defaultSel == true" mode=""></image>
					<image src="../../static/image/checkbox.png" v-if="content.defaultSel == false" mode=""></image>
				</view>
						<view class="cateItem-img">
							<image :src="imgUrl+content.mainimage" mode=""></image>
						</view>
						<view class="cateItem-con">
							<view class="cateItem-con-des u-f-aj">{{content.title}}</view>
							<view class="cateItem-con-cals">{{content.attr_1}}  {{content.attr_0}}</view>
							<view class="cateItem-con-price-input u-f u-f-jsb u-f-aj">
								<view class="cateItem-con-price">¥{{content.price}}</view>
								<view class="cateItem-con-add-reduce u-f">
									<view class="ateItem-con-reduce" @click="reduceNum">-</view>
									<view class="ateItem-con-input">
										<input type="text" :value="content.num" />
									</view>
									<view class="ateItem-con-add" @click="addNum">+</view>
										
									
								</view>	
							</view>
						</view>
			</view>
</template>

<script>
	export default{
		props:["content","index"],
		methods:{
			selshopClick(){
				this.$emit("selshopIndex",this.index)
				this.$emit('selshopClick')
				
			},
			//减少 商品
			reduceNum(){
				this.$emit("selshopIndex",this.index)
				this.$emit('reduceNumClick')
				
			},
			// 增加商品
			addNum(){
				this.$emit("selshopIndex",this.index)
				this.$emit('addNumClick')
			}
			
		},
		created() {
			
		}
	}
	
</script>

<style>
	/* 购物车列表Item */
		.cateItem{width: 100%;height: 270rpx;border-bottom: 1rpx solid #E5E5E5;}
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
