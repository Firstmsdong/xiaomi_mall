<template>
	<view class="shopDesl">
			<view class="shopDeslBg">
				<view class="shopDeslCon">
					<view class="shopDeslCon-head u-f">
						<view class="shopDeslCon-head-image">
							<image src="../../static/image/dimg1.jpg" mode=""></image>
						</view>
						<view class="shopDeslCon-head-title">
							<view class="">{{price}}</view>
							<view class="">{{smalltitle}}</view>
							<view class="">{{specification}}</view>
						</view>
						<view class="shopDeslCon-head-close" @click="closeShopsel">
						     <image src="../../static/image/error.png" mode=""></image>
						</view>
					</view>
					<view class="shopDeslCon-select">
						<block v-for="(item,index) in content" :key="index">
							<view class="shopDeslCon-select-itme">
								<view class="shopDeslCon-select-itme-title">{{item.attrname}}</view>
								<view class="u-f shopDeslCon-select-itme-con">
									<block v-for="(child,childeIndex) in item.value" :key="childeIndex">
										<view class="shopDeslCon-select-itme-con-item"
										:class="{activeAttr:valueIndex[index]==childeIndex}"
										@click="checkClass(index,childeIndex)"
										>{{child}}</view>
									</block>
								</view>
							</view>
						</block>
						
						<view class="shopDeslCon-select-itme">
							<view class="shopDeslCon-select-itme-title">数量</view>
							<view class="u-f">
								<view class="shopDeslCon-select-itme-subtract" @click="reduceNum">-</view>
								<view class="shopDeslCon-select-itme-innput">
									<input type="text" value="" v-model="num"/>
								</view>
								<view class="shopDeslCon-select-itme-add" @click="addNum">+</view>
								<view class="shopDeslCon-select-itme-repertory">（库存：{{storeNum}}件）</view>
							</view>
						</view>
					</view>
				    <view class="shopDeslCon-bttom">{{buttonName}}</view>
				</view>
			</view>
		</view>
	
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				valueIndex:[],
				emptData:[],
				price:"",//价格
			    storeNum:"",//库存
				specification:"",// 选中的规格
				buttonName:"",// 按钮名称
			}
		},
		mounted() {
			
			if(this.$store.state.attrVal.length ==0){
				for (var i = 0;i<this.content.length;i++) {
					this.valueIndex.push(0);
					this.emptData.push(this.content[i].value[0]);	 
				}
				this.specification = this.emptData.join(' ')
				this.getClass()
			}else{
				this.valueIndex = this.$store.state.attrVal;
				for (var i = 0;i<this.content.length;i++) {
					this.emptData.push(this.content[i].value[this.valueIndex[i]]);	 
				}
				this.specification = this.emptData.join(' ')
				this.getClass()
			}
			
			
		  
		   
		   // 获取按钮名称
		   if(this.type == 1){
			   this.buttonName = "加入购物车";
		   }else{
			   this.buttonName = "立即购买";
		   }
		},
		methods: {
			// 类型切换
			checkClass(index,childeIndex){
				this.valueIndex.splice(index,1,childeIndex)
				this.emptData.splice(index,1,this.content[index].value[childeIndex])
			    this.specification = this.emptData.join(' ')	
				var attr;
				this.getClass();
				
			},
			getClass(){
				for (var i = 0;i<this.attrClass.length;i++) {
					if(this.attrClass[i].attr_0 == this.emptData[0] && this.attrClass[i].attr_1 == this.emptData[1]){
						this.price = this.attrClass[i].price
						this.storeNum = this.attrClass[i].stock
						break
					}
				}
			},
			closeShopsel(){
				this.$emit('close')
				this.$emit("specificationCon",this.specification)
				this.$store.commit("setAttr",{
					"attrVal" : this.valueIndex,
					"attrTxt" :  this.specification
				})
			},
			reduceNum(){
				if(this.num == 0){
					
				}else{
					this.num --
				}
			},
			addNum(){
				this.num ++
			}
			
		},
		props:["content","attrClass","smalltitle","type"]
	}
</script>

<style>
	/* 选择商品 */
	.shopDeslBg{position: fixed;top: 0;bottom: 0;left: 0;right: 0;background-color: rgb(0,0,0,0.5);}
	.shopDeslCon{position: absolute;width: 100%;height: 1050rpx;bottom: 0rpx;background-color: #FFFFFF;}
	.shopDeslCon-head{border-bottom: 1rpx solid #E5E5E5;padding-bottom: 90rpx;}
	.shopDeslCon-head-image{width: 210rpx;height: 210rpx;position: absolute;top: -40rpx;left: 40rpx;}
	.shopDeslCon-head-image image{width: 210rpx;height: 210rpx}
	.shopDeslCon-head-title {margin-left: 290rpx;padding-top: 25rpx;;}
	.shopDeslCon-head-title>view:nth-child(1) {font-size: 36rpx;color: #FF0000;height: 44rpx;}
	.shopDeslCon-head-title>view:nth-child(2) {font-size: 24rpx;color: #000000;height: 40rpx;margin-top: 10rpx;}
	.shopDeslCon-head-title>view:nth-child(3) {font-size: 24rpx;color: #000000;height: 40rpx;margin-top: 10rpx;}
	.shopDeslCon-head-close{width: 40rpx;height: 40rpx;position: absolute;right: 10rpx;top: 20rpx;}
	.shopDeslCon-head-close image{width: 40rpx;height: 40rpx;}
	.shopDeslCon-select-itme{padding-left: 20rpx;padding-right: 20rpx;width: 100%;}
	.shopDeslCon-select-itme-title{color: #A7A7A9;height: 70rx;font-size: 28rpx;text-align: left;line-height: 70rpx;}
	.shopDeslCon-select-itme-con-item{line-height: 72rpx;color: 24rpx;padding-left: 30rpx;padding-right: 30rpx;text-align: center;border: 1rpx solid #666;color: #666;float:left;height: 72rpx;margin-right: 20rpx;font-size: 24rpx;}
	/* border: 1rpx solid #00C3F5;margin-right: 20rpx; */
	.shopDeslCon-select-itme-con-item.activeAttr{border: 1rpx solid #00C3F5;color:#00C3F5 ;}
	.shopDeslCon-select-itme-subtract{width: 70rpx;height: 70rpx;border: 1rpx solid #999999;line-height: 70rpx;text-align: center;}
	.shopDeslCon-select-itme-add{width: 70rpx;height: 70rpx;border: 1rpx solid #999999;line-height: 70rpx;text-align: center;}
	.shopDeslCon-select-itme-innput{width: 100rpx;height: 70rpx;border-top: 1rpx solid #999999;border-bottom: 1rpx solid #999999;}
	.shopDeslCon-select-itme-innput input{width: 100rpx;height: 70rpx;line-height: 70rpx;font-size: 24rpx;text-align: center;}
	.shopDeslCon-select-itme-repertory{height: 70rpx;line-height: 70rpx;text-align: center;font-size: 24rpx;margin-left: 20rpx;}
	.shopDeslCon-bttom{width: 100%;height: 90rpx;position: absolute;bottom: 0;background-color: #0EBBEE;color: #FFFFFF;font-size: 28rpx;line-height: 90rpx;text-align: center;}
</style>
