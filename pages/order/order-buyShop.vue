<template>
	<view class="body">
		<view class="address">
			<view class="">
				<view class="address-yes u-f">
					<view class="address-image u-f u-f-jc">
						<view class="icon iconfont icon-dizhi"></view>
					</view>
					<view class="addressCon">
						<view class="addressCon-user">收货人：英特网络 （18511449660）</view>
						<view class="addressCon-address">北京市昌平区顺沙路19号院2区2号楼3单元303昌平区顺沙路19号院2区2号楼3单元昌平区顺沙路19号院</view>
					</view>
					<view class="address-go u-f-ajc">
						<view class="icon iconfont icon-xiayibu"></view>
					</view>
				</view>
			</view>
			<view class="addressLine"></view>
		</view>
		<view class="address-no u-f u-f-ajc">+ 暂无收货地址，请添加</view>
		<view class="orderList">
			<view class="orderList-item u-f-ac">
				<view class="cateItem-img">
					<!-- <image :src="imgUrl+content.mainimage" mode=""></image> -->
					<image src="../../static/image/dimg1.jpg" mode=""></image>
				</view>
				<view class="cateItem-con">
					<view class="cateItem-con-des u-f-aj">苹果（Apple）ipadd2019款第七代10.2英寸2018款9.7英寸air更新版本</view>
					<view class="cateItem-con-cals">appad 黑色</view>
					<view class="cateItem-con-price-input u-f u-f-jsb u-f-aj">
						<view class="cateItem-con-price">¥299</view>
						<view class="cateItem-con-add-reduce u-f">x1</view>	
					</view>
				</view>
			</view>
			<view class="orderList-item u-f-ac">
				<view class="cateItem-img">
					<!-- <image :src="imgUrl+content.mainimage" mode=""></image> -->
					<image src="../../static/image/dimg1.jpg" mode=""></image>
				</view>
				<view class="cateItem-con">
					<view class="cateItem-con-des u-f-aj">苹果（Apple）ipadd2019款第七代10.2英寸2018款9.7英寸air更新版本</view>
					<view class="cateItem-con-cals">appad 黑色</view>
					<view class="cateItem-con-price-input u-f u-f-jsb u-f-aj">
						<view class="cateItem-con-price">¥299</view>
						<view class="cateItem-con-add-reduce u-f">x1</view>	
					</view>
				</view>
			</view>
		</view>
	    <view class="order-message">
	    	<view class="u-f u-f-jsb order-message-item">
	    		<view class="order-message-left">应付金额</view>
				<view class="order-message-right">19.00</view>
	    	</view>
			<view class="u-f u-f-jsb order-message-item">
				<view class="">配送方式</view>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="order-message-right" >{{this.expressCon}}</view>
				                      <!--  <view class="uni-input">{{array[index]}}</view> -->
			 </picker>
				
			</view>
			<view class="order-message-item u-f-ajc">
				<input type="text" value="  请留言" class="order-input"/>
			</view>
			<view class="u-f u-f-jsb order-message-item">
				<view class="">总计</view>
				<view class="order-message-right">共一件商品 合计：¥19.00</view>
			</view>
	    </view>
	    <view class="order-bttom u-f u-f-jsb">
	    	<view class="order-bttom-price u-f u-f-ajc">总计：199.77</view>
	    	<view class="order-bttom-buy u-f u-f-ajc" @click="goPay">立即购买</view>	
	    </view>
	</view>
</template>

<script>
	export default{
		data() {
		        return {
		            title: 'picker',
		            array: ['顺丰', '邮政', '圆通', '德邦'],
		            index: 0,
					expressCon:'请选择快递'
		        }
		},
		methods:{
			// 立即购买
			goPay(){
				console.log('9999999')
				uni.navigateTo({
					url:'./order-pay'
				})
			},
			// 选择快递方式
			bindPickerChange: function(e) {
			            // console.log('picker发送选择改变，携带值为', e.target.value)
			            this.expressCon =this.array[e.target.value] 
		   },
		}
	}
</script>

<style>
	page {background-color: #F4F4F4;}
	/* 地址 */
	.address{margin-top: 20rpx;margin-left: 30rpx;margin-right: 30rpx;background-color: #FFFFFF;height: 200rpx;border-radius: 20rpx;}
	.address-image{width: 100rpx;height: 200rpx;}
	.icon-dizhi{font-size: 36rpx;margin-top: 25rpx;}
	.addressCon-user{font-size: 28rpx;color: #000000;height: 70rpx;line-height: 70rpx;margin-top: 10rpx;}
	.addressCon-address{font-size: 24rpx;color: #999999;line-height: 34rpx;}
	.address-go{width: 100rpx;}
	.addressLine{
		    height: 8rpx;
		    background-image: -webkit-linear-gradient(315deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
		    background-image: linear-gradient(135deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
		    background-color: #fff;
		    background-size: 136rpx 8rpx;
			width: 100%;
			/* position: absolute;bottom: 0; */
	}
	/* 无地址 */
	.address-no{margin-top: 20rpx;margin-left: 30rpx;margin-right: 30rpx;background-color: #FFFFFF;height: 85rpx;border-radius: 20rpx;font-size: 28rpx;color: #00C2F5;}
	/* 列表 */
	.orderList{margin-top: 20rpx;margin-left: 30rpx;margin-right: 30rpx;background-color: #FFFFFF;}
	.orderList-item{border: 1rpx solid #F6F6F6;}
	.cateItem-img{height: 200rpx;margin-top: 35rpx;}
		.cateItem-img image{width: 200rpx;height: 200rpx;}
		.cateItem-con {margin-right: 20rpx;height: 200rpx;margin-top: 35rpx;}
		.cateItem-con-des{flex: 1;line-height: 40rpx;height: 80rpx;text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;
	-webkit-line-clamp: 2;line-clamp: 2; -webkit-box-orient: vertical;font-size: 28rpx;}
	    .cateItem-con-cals{line-height: 40rpx;height: 40rpx;font-size: 24rpx;text-align: left;color: #AAAAAA;}
		.cateItem-con-price-input{height: 80rpx;}
		.cateItem-con-price{height: 80rpx;line-height: 80rpx;font-size: 28rpx;color: #FF0000;}
		/* 订单信息 */
		.order-message{margin-top: 20rpx;margin-left: 30rpx;margin-right: 30rpx;background-color: #FFFFFF;padding-left: 20rpx;padding-right: 20rpx;padding-top: 20rpx;}
		.order-message-item{height: 80rpx;color: 28rpx;}
		.order-message-right{color: #999999;}
		.order-input{background-color: #F4F4F4;line-height: 70rpx;height: 70rpx;border-radius: 35rpx;width: 100%;}
		/* 底部视图 */
		.order-bttom{width: 100%;height: 100rpx;background-color: #FFFFFF;position: fixed;bottom: 0;}
		.order-bttom-price{font-size: 28rpx;margin-left: 30rpx;color: #000000;}
		.order-bttom-buy{font-size: 28rpx;background-color: #01C0F3;color: #FFFFFF;width: 300rpx;}
</style>
