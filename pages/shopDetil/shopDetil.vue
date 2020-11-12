<template>
	<view>
		<!-- 轮播 -->
		<ShopDetilSwiper :content="dataSouce.image"></ShopDetilSwiper>
		<!-- 描述 -->
		<ShopDes :content="dataSouce"></ShopDes>
		<!-- 服务 -->
		<view class="shopDerver u-f u-f-jsb" @click="openSeverView">
			<view class="shopDerverLeft u-f">
				<block v-for="(item,index) in dataSouce.servicelist" :key="index">
					<view class="shopDerverItem u-f-ac" v-if="index<2">
						<image src="../../static/image/success.png" mode=""></image>
						<text>{{item.title}}</text>
					</view>
				</block>
			</view>
			<view class="shopDerverRight u-f-ajc">
				<image src="../../static/image/more.png" mode=""></image>
			</view>
		</view>
	    <view class="pageLine"></view>
		<view class="shopSpecific u-f u-f-jsb">
			<view class="shopSpecificLeft u-f">
				<view class="shopSpecificLeftOne u-f-ac">规格</view>
				<view class="shopSpecificLeftTwo u-f-ac" @click="selectShop">{{specificalCon}}</view>
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
				<navigator url="../index/index" open-type="switchTab">
					<view class="fistPage-image u-f-ajc">
						<image src="../../static/image/trolley.png" mode=""></image>
					</view>
					<view class="fistPage-title u-f-ajc">首页</view>
				</navigator>
			</view>
			<view class="cart">
				<view class="u-f-ajc">
					<image src="../../static/tabbar1.png" mode=""></image>
				</view>
				<view class="u-f-ajc">购物车</view>
			</view>
			<view class="addCart u-f-ajc"  @click="selBuyWay(1)">加入购物车</view>
			<view class="buy u-f-ajc" @click="selBuyWay(2)">立即购买</view>
		</view>
	    <!-- 服务弹窗 -->
		<ServerView @close="closeServerView" v-if="serverShow==true" class="server" :content="dataSouce.servicelist"></ServerView>
		<!-- 选择商品规格弹框布局 -->
		<ShopClassSel 
		@close="closeShopsel" 
		v-if="shopClassShow == true" 
		class="server" 
		:content="dataSouce.checkAttr"
		:attrClass="dataSouce.attr"
		:smalltitle="dataSouce.smalltitle"
		:type="typeway"
		@specificationCon="specificationCon"></ShopClassSel
		>
		</view>
</template>

<script>
	
	import ShopDetilSwiper from '../../components/shopDetil/shopDetil-swiper.vue'
	import ShopDes from '../../components/shopDetil/shopDetil-shopDes.vue'
	import ServerView from '../../components/shopDetil/shopDetil-serverDes.vue'
	import ShopClassSel from '../../components/shopDetil/shopdetil-shopClassSel.vue'
	export default {
		components:{
			ShopDetilSwiper,ShopDes,ServerView,ShopClassSel
		},
		// 页面生命周期-页面消失的时候
		onUnload() {
			this.$store.commit("defaultAttr")
		},
		data() {
			return {
				tab:0,
				serverShow:false,
				shopClassShow:false,
				dataSouce:[],
				typeway:'',
				specificalCon:"请选择规格尺寸",//选择的规格尺寸
				
			}
		},
		
		onLoad(pro) {
			this.loadShopData(pro.id)
		},
		methods: {
			loadShopData(id){
			    uni.request({
					url:this.apiUrl+'/index/detail/id/'+id,
				    success: (res) => {
							this.dataSouce = res.data.data;
							console.log(res.data.data)
						}
					})
					  
			},
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
			//选择商品规格页面
			selectShop(){
				this.shopClassShow = true
			},
			//关闭商品规格选择弹窗页面
			closeShopsel(){
				this.shopClassShow = false
			},
			//加入购物车or立即购买
			selBuyWay(e){
				console.log(e)
				this.typeway = e;
				this.shopClassShow = true
			},
			// 接收子组件传过来的值
			specificationCon(e){
				console.log(e)
				this.specificalCon = e;
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
.fistPage-image{margin-top: 10rpx;width: 100%;}
.fistPage-image image{width: 40rpx;height: 40rpx;}
.fistPage-title{line-height: 40rpx;width: 100%;text-align: center;}
.cart{width: 13.33%;height: 100rpx;font-size: 24rpx;color: #999;}
.cart>view:first-child{margin-top: 10rpx;}
.cart image{width: 40rpx;height: 40rpx;}
.addCart{width: 36.67%;height: 100rpx;background-color: #0EBCEF;color: #FFFFFF;font-size: 24rpx;}
.buy{width:36.67% ;height: 100rpx;background-color: #017CFE;color: #FFFFFF;font-size: 24rpx;}
.server{position: fixed;top: 0;left: 0;bottom: 0;right: 0;}
</style>
