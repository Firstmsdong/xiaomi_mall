<template>
	<view>
		<!-- 购物车列表 -->
		<view class="cateList" v-for="(item,index) in dataSouce" :key="index">
		    <CartItem :content="item" :index="index"  @selshopClick="selshopClick" @selshopIndex="selshopIndex"></CartItem>
	    </view>
		<view class="blank"></view>
	    <!-- 底部视图 -->
		<CartBttomView></CartBttomView>
		</view>
</template>

<script>
	import CartItem from '../../components/Cart/cart-item.vue'
	import CartBttomView from '../../components/Cart/cart-bttomView.vue'
	export default {
		components:{
			CartItem,CartBttomView
		},
		data() {
			return {
				dataSouce:[],
				selshopIndex:'',//点击列表左侧按钮，点击的值
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			// 获取购物车列表数据
			getData(){
				this.$request("/member/cartlist").then(res=>{
					for(var i = 0;i<res.data.length;i++){
						this.dataSouce.push({
							'id': res.data[i].id,
							"attrid": res.data[i].attrid,
							"flag": res.data[i].flag,
							"num": res.data[i].num,
							"attr_0": res.data[i].attr_0,
							"attr_1": res.data[i].attr_1,
							"price": res.data[i].price,
							"stock": res.data[i].stock,
							"mainimage": res.data[i].mainimage,
							"title": res.data[i].title,
							"defaultSel":'1'
						})
					}
					
				})
			},
			// 列表反选
			selshopClick(){
				console.log('000000000');
				console.log(this.selshopIndex);
				// index
			}
		}
	}
</script>

<style>
	.blank{width: 100%;height: 10rpx;}
	
</style>
