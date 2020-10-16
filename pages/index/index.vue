<template>
	<view class="content">
		<!-- 状态栏 -->
		<view class="status-bar"></view>
		<Header :contents="recomendList"></Header>
		<Swiper :swiperCon='bannerList'></Swiper>
		<Server :content='activeList'></Server>
		<ShopNav :content="iconList"></ShopNav>
		<shopAds :content='floorList'></shopAds>
		
		<view class="shopList" v-for="(item,index) in cateList" :key="index">
			<ListTile :name="item.content[0].title"></ListTile>
			<template v-if="item.content.length == 1">
				<view class="shopListImage">
					<template v-if="item.content.length>0">
						<image :src="imgUrl+item.content[0].img" mode="widthFix"></image>
					</template>
				</view>
			</template>
			<template v-if="item.content.length == 2">
				<Table :conment="item.content"></Table>
			</template>
			<view class="shopListCon u-f u-f-jsb">
				<block v-for="(child,childIndex) in item.product" :key="childIndex">
					<ShopItem :content="child"></ShopItem>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '../../components/indexC/index-header.vue'
	import Swiper from '../../components/indexC/index-swiper.vue'
	import Server from '../../components/indexC/index-server.vue'
	import ShopNav from '../../components/indexC/index-shopNav.vue'
	import shopAds from '../../components/indexC/index-ads.vue'
	import ListTile from '../../components/indexC/index-listTitle.vue'
	import ShopItem from '../../components/indexC/index-shopListItem.vue'
	import Table from '../../components/indexC/index-table.vue'
	export default {
		components:{
			Header,Swiper,Server,ShopNav,shopAds,ListTile,ShopItem,Table
		},
		data() {
			return {
				recomendList:[],//推荐
				bannerList:[],//轮播图
				activeList:[],//活动分类
				iconList:[],//手机
				floorList:[],
				cateList:[],
				
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
              getData(){
				  uni.request({
				  	url:this.apiUrl+'/index',
					success: (res) => {
						// console.log(res)
						this.recomendList=res.data.data.recommend_cate
						this.bannerList=res.data.data.banner
						this.activeList = res.data.data.active
						this.iconList=res.data.data.icon
						this.floorList=res.data.data.floor
						this.cateList=res.data.data.cate
						// console.log('000000')
						
						console.log(this.bannerList)
					}
				  })
				  
			  }
		}
	}
</script>

<style>
	.status-bar{height: var(--status-bar-height);width: 100%; position: fixed;top: 0;background-color: #FFFFFF;}
	
	.shopListImage image{width: 100%;height: 344rpx;}
	.shopListCon{background-color: #F4F4F4;flex-wrap: wrap;}
	
	
</style>
