<template>
	<view>
		<!-- 购物车列表 -->
		<view class="cateList" v-for="(item,index) in dataSouce" :key="index">
			<SwipeAction>
			    <SwipeActionItem :right-options="options"  @click="bindClick($event,index)">
			       <CartItem
			       :content="item" 
			       :index="index"  
			       @selshopClick="selshopClick"
			       @selshopIndex="selshopNum"
			       @reduceNumClick="reduceNumClick"
			       @addNumClick="addNumClick">
			       </CartItem>
			   </SwipeActionItem>
			</SwipeAction>
			
		   
	    </view>
		<view class="blank"></view>
	    <!-- 底部视图 -->
		<CartBttomView :allsel="allSel" :money="money" :cartnum="selNum" @allSelClick="selAllClick"></CartBttomView>
		</view>
</template>

<script>
	import CartItem from '../../components/Cart/cart-item.vue'
	import CartBttomView from '../../components/Cart/cart-bttomView.vue'
	import  SwipeAction from '../../components/SwipeAction/uni-swipe-action/uni-swipe-action.vue'
	import SwipeActionItem from '../../components/SwipeAction/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components:{
			CartItem,CartBttomView,SwipeAction,SwipeActionItem
		},
		data() {
			return {
				dataSouce:[],//网络获取到的数据
				dataStoreSouce:[],//存储下来的数据
				selshopIndex:'',//点击列表左侧按钮，点击的值
				allSel:true,//是否全选中
				money:0,//选中的价格
				selNum:0,//选中的数量
				options:[{text: '删除',style: {backgroundColor: '#FF0000',color:'#FFFFFF'}}]
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			// 获取购物车列表数据
			getData(){
				this.dataSouce.splice(0,this.dataSouce.length)
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
							"defaultSel":true
						})
					}
					this.countStoreData()
				})
			},
			// 计算选中的数据
			countStoreData(){
				this.dataStoreSouce.splice(0,this.dataStoreSouce.length)
				for (var i = 0;i<this.dataSouce.length;i++) {
					if(this.dataSouce[i].defaultSel == true){
						this.dataStoreSouce.push({
							'id': this.dataSouce[i].id,
							"attrid": this.dataSouce[i].attrid,
							"flag": this.dataSouce[i].flag,
							"num": this.dataSouce[i].num,
							"attr_0": this.dataSouce[i].attr_0,
							"attr_1": this.dataSouce[i].attr_1,
							"price": this.dataSouce[i].price,
							"stock": this.dataSouce[i].stock,
							"mainimage": this.dataSouce[i].mainimage,
							"title": this.dataSouce[i].title,
							"defaultSel":true
						})
					}
				}
				if(this.dataSouce.length == this.dataStoreSouce.length){
					this.allSel = true;
				}else{
					this.allSel = false;
				}
				this.countPricAndNum()
			},
			// 计算选中的价格和数量
			countPricAndNum(){
				this.money = 0;
				this.selNum = 0;
				for (var i = 0;i<this.dataStoreSouce.length;i++) {
					// 计算价格
					this.money += Number(this.dataStoreSouce[i].price) * Number(this.dataStoreSouce[i].num)
					// 计算数量
					this.selNum += Number(this.dataStoreSouce[i].num)
				}
			},
			// 列表反选
			selshopClick(){
				this.dataSouce[this.selshopIndex].defaultSel = !this.dataSouce[this.selshopIndex].defaultSel
				this.countStoreData()
			},
			// 接收子组件传过来的index值
			selshopNum(e){
				this.selshopIndex = e
			},
			// 全选按钮
			selAllClick(){
				this.allSel = !this.allSel
				for(var i = 0;i<this.dataSouce.length;i++){
					if(this.allSel == true){
						this.dataSouce[i].defaultSel = true
					}else if(this.allSel == false){
						this.dataSouce[i].defaultSel = false
					}
				}
				this.countStoreData()
				
			},
		    // 商品减少
			reduceNumClick(){
				if(Number(this.dataSouce[this.selshopIndex].num)>1){
					var newNum = Number(this.dataSouce[this.selshopIndex].num)-1;
					this.dataSouce[this.selshopIndex].num = newNum
					this.countStoreData();
				}
			},
			// 商品增加
			addNumClick(){
				var newNum = Number(this.dataSouce[this.selshopIndex].num)+1;
				this.dataSouce[this.selshopIndex].num = newNum
				this.countStoreData();
			},
			// 商品删除
			bindClick(e,index){
				// console.log(e,index)
			   // 删除操作
			   if(e.content.text == '删除'){
				   this.dataSouce.splice(index,1)
				   this.countStoreData()
				   this.$request("/member/delcart",{id:this.dataSouce[index].id})
				   .then(res=>{
				   	console.log(res)
				   })
			   }
			}
		}
	}
</script>

<style>
	.blank{width: 100%;height: 10rpx;}
	
</style>
