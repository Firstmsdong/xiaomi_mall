<template>
	<view>
		<ShopDetilSwiper></ShopDetilSwiper>
		<ShopDes></ShopDes>
		<view class="shopDerver u-f u-f-jsb" @click="openSeverView">
			<view class="shopDerverLeft u-f">
				<view class="shopDerverItem u-f-ac">
					<image src="../../static/image/success.png" mode=""></image>
					<text>全场包邮</text>
				</view>
				<view class="shopDerverItem u-f-ac">
					<image src="../../static/image/success.png" mode=""></image>
					<text>7天无理由退货（激活后不支持）</text>
				</view>
			</view>
			<view class="shopDerverRight u-f-ajc">
				<image src="../../static/image/more.png" mode=""></image>
			</view>
		</view>
	    <view class="pageLine"></view>
		<view class="shopSpecific u-f u-f-jsb">
			<view class="shopSpecificLeft u-f">
				<view class="shopSpecificLeftOne u-f-ac">规格</view>
				<view class="shopSpecificLeftTwo u-f-ac" @click="selectShop">请选择商品规格尺寸</view>
			</view>
			<view class="shopSpecificRight u-f-ajc">
				<image src="../../static/image/more.png" mode=""></image>
			</view>
		</view>
		<view class="pageLine"></view>
	    <view class="tabCon u-f-ajc">
			<!-- :class="{tabActive:tab==0} -->
	    	<view class="tabItem u-f-ajc" @click="changeTab(0)" :class="{tabAcitve:tab==0}">
	    		图文详情
	    	</view>
			<view class="tabItem u-f-ajc" @click="changeTab(1)" :class="{tabAcitve:tab==1}">
				规格参数
			</view>
	    </view>
		
		<view class="imageText" v-if="tab==0">
			<image src="../../static/image/d1.jpg" mode="widthFix"></image>
			<image src="../../static/image/d2.jpg" mode="widthFix"></image>
			<image src="../../static/image/d3.jpg" mode="widthFix"></image>
		</view>
		
		<view class="parameterSpecifica" v-if="tab==1">
			<view class="parameterSpecificaTop">基础信息</view>
			<view class="parameterSpecificaItem u-f">
				<view class="parameterSpecificaItemLeft u-f-ac">品牌</view>
				<view class="parameterSpecificaItemRirht u-f-ac">魅族</view>	
			</view>
			<view class="parameterSpecificaItem u-f">
				<view class="parameterSpecificaItemLeft u-f-ac">型号</view>
				<view class="parameterSpecificaItemRirht u-f-ac">魅族16sPro</view>	
			</view>
			<view class="parameterSpecificaItem u-f">
				<view class="parameterSpecificaItemLeft u-f-ac">尺寸</view>
				<view class="parameterSpecificaItemRirht u-f-ac">151*109mm</view>	
			</view>
			<view class="parameterSpecificaItem u-f">
				<view class="parameterSpecificaItemLeft u-f-ac">电池容量</view>
				<view class="parameterSpecificaItemRirht u-f-ac">3600mAh</view>	
			</view>
			<view class="parameterSpecificaItem u-f">
				<view class="parameterSpecificaItemLeft u-f-ac">重量</view>
				<view class="parameterSpecificaItemRirht u-f-ac">166g</view>	
			</view>
		</view>
		
	    <view class="blank"></view>
		<view class="detalBttom u-f">
			<view class="fistPage">
				<view class="u-f-ajc">
					<image src="../../static/image/trolley.png" mode=""></image>
				</view>
				<view class="u-f-ajc">首页</view>
			</view>
			<view class="cart">
				<view class="u-f-ajc">
					<image src="../../static/tabbar1.png" mode=""></image>
				</view>
				<view class="u-f-ajc">购物车</view>
			</view>
			<view class="addCart u-f-ajc">加入购物车</view>
			<view class="buy u-f-ajc">立即购买</view>
		</view>
	    <!-- 服务弹窗 -->
		<ServerView @close="closeServerView" v-if="serverShow==true" class="server"></ServerView>
		<!-- 商品选择弹框布局 -->
		<view class="shopDesl" v-if="shopClassShow == true">
			<view class="shopDeslBg">
				<view class="shopDeslCon">
					<view class="shopDeslCon-head u-f">
						<view class="shopDeslCon-head-image">
							<image src="../../static/image/dimg1.jpg" mode=""></image>
						</view>
						<view class="shopDeslCon-head-title">
							<view class="">300</view>
							<view class="">魅族16sp</view>
						</view>
						<view class="shopDeslCon-head-close">
						     <image src="../../static/image/error.png" mode=""></image>
						</view>
					</view>
					<view class="shopDeslCon-select">
						<view class="shopDeslCon-select-itme">
							<view class="shopDeslCon-select-itme-title">版本</view>
							<view class="u-f shopDeslCon-select-itme-con">
								<view class="">魅族16S Pro</view>
								<view class="">魅族16th Plus</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	import ShopDetilSwiper from '../../components/shopDetil/shopDetil-swiper.vue'
	import ShopDes from '../../components/shopDetil/shopDetil-shopDes.vue'
	import ServerView from '../../components/shopDetil/shopDetil-serverDes.vue'
	export default {
		components:{
			ShopDetilSwiper,ShopDes,ServerView
		},
		data() {
			return {
				tab:0,
				serverShow:false,
				shopClassShow:false,
			}
		},
		methods: {
			changeTab(index){
				this.tab = index
			},
			// 关闭服务展示页面
			closeServerView(){
				this.serverShow=false
			},
			// 打开服务说明页
			openSeverView(){
				this.serverShow=true
			},
			//选择商品尺寸
			selectShop(){
				console.log('点击了')
				this.shopClassShow = true
			}
			
			
		}
	}
</script>

<style>
.pageLine{width: 100%;height: 20rpx;background-color: #F7F7F7;}

.shopDerver{height: 80rpx;padding: 10rpx 30rpx;}
.shopDerverItem{margin-right: 20rpx;}
.shopDerverItem image{width: 25rpx;height: 25rpx;margin-right: 5rpx;}
.shopDerverItem text {font-size: 24rpx;color: #999;}
.shopDerverRight image{width: 20rpx;height: 20rpx;}
.shopSpecific{height: 90rpx;padding: 0px 30rpx;}
.shopSpecificLeftOne{font-size: 28rpx;color: #999;margin-right: 30rpx;}
.shopSpecificLeftTwo{font-size: 28rpx;color: #666;}
.shopSpecificRight image{width: 20rpx;height: 20rpx;}

.tabCon{width: 100%;height: 80rpx;border-bottom:1rpx #E9E9E9 solid;}
.tabItem{font-size: 28rpx;color: #000;width: 50%;line-height: 80rpx;}
.tabAcitve{font-weight: 700;color: #00c3f5;}
.imageText{width: 100%;}
.imageText image{width: 100%;}
.parameterSpecifica{padding: 20rpx 30rpx;}
.parameterSpecificaTop{background-color: #F7F7F7;font-size: 28rpx;width: 100%;height: 75rpx;line-height: 75rpx;padding-left: 20rpx;}
.parameterSpecificaItem{border-bottom: 1rpx #E9E9E9 solid;border-left: 1rpx #E9E9E9 solid;border-right: 1rpx #E9E9E9 solid;width: 100%;height: 75rpx;font-size: 24rpx;}
.parameterSpecificaItemLeft{width: 50%;line-height: 75rpx;padding-left: 20rpx;color: #999;}
.parameterSpecificaItemRirht{width: 50%;line-height: 75rpx;}
/* 底部空白 */
.blank{width: 100%;height: 100rpx;}
.detalBttom{width: 100%;height: 100rpx;position: fixed;bottom: 0rpx;background-color: #FFFFFF;}
.fistPage{width: 13.33%;height: 100rpx;font-size: 24rpx;color: #999;}
.fistPage>view:first-child{margin-top: 10rpx;width: 100%;}
.fistPage image{width: 40rpx;height: 40rpx;}
.fistPage>view:last-child{line-height: 40rpx;width: 100%;text-align: center;}
.cart{width: 13.33%;height: 100rpx;font-size: 24rpx;color: #999;}
.cart>view:first-child{margin-top: 10rpx;}
.cart image{width: 40rpx;height: 40rpx;}
.addCart{width: 36.67%;height: 100rpx;background-color: #0EBCEF;color: #FFFFFF;font-size: 24rpx;}
.buy{width:36.67% ;height: 100rpx;background-color: #017CFE;color: #FFFFFF;font-size: 24rpx;}
.server{position: fixed;top: 0;left: 0;bottom: 0;right: 0;}

/* 选择商品 */
.shopDeslBg{position: fixed;top: 0;bottom: 0;left: 0;right: 0;background-color: rgb(0,0,0,0.5);}
.shopDeslCon{position: absolute;width: 100%;height: 1050rpx;bottom: 0rpx;background-color: #FFFFFF;}
.shopDeslCon-head{border-bottom: 1rpx solid #E5E5E5;padding-bottom: 90rpx;}
.shopDeslCon-head-image{width: 210rpx;height: 210rpx;position: absolute;top: -40rpx;left: 40rpx;}
.shopDeslCon-head-image image{width: 210rpx;height: 210rpx}
.shopDeslCon-head-title {margin-left: 290rpx;padding-top: 25rpx;;}
.shopDeslCon-head-title>view:nth-child(1) {font-size: 36rpx;color: #FF0000;height: 44rpx;}
.shopDeslCon-head-title>view:nth-child(2) {font-size: 24rpx;color: #000000;height: 40rpx;margin-top: 10rpx;}
.shopDeslCon-head-close{width: 40rpx;height: 40rpx;position: absolute;right: 10rpx;top: 20rpx;}
.shopDeslCon-head-close image{width: 40rpx;height: 40rpx;}
.shopDeslCon-select-itme{padding-left: 20rpx;padding-right: 20rpx;width: 100%;}
.shopDeslCon-select-itme-title{color: #A7A7A9;height: 70rx;font-size: 24rpx;text-align: left;line-height: 70rpx;}
.shopDeslCon-select-itme-con>view{line-height: 72rpx;color: 24rpx;padding-left: 30rpx;padding-right: 30rpx;text-align: center;border: 1rpx solid #00C3F5;margin-right: 20rpx;}
</style>
