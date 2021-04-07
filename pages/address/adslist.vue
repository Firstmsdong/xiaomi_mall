<template>
    <view class="">
		<!-- 地址列表有数据时候 -->
    	<view class="addressList" v-if="addresslist.length>0">
			<template v-if="addresslist.length !=0">
				<block v-for="(item,index) in addresslist" :key="index">
					<SwipeAction>
					    <SwipeActionItem :right-options="options"  @click="bindClick($event,index)" @change="swipeChange($event, 0)">
					       <view class="adresItem">
					       	<view class="adresItem-top u-f">
					       		<view class="">{{item.username}}</view>
					       		<view class="">{{item.telphone}}</view>
					       		<view class="adresItem-top-defalult" v-if="item.default==1">默认</view>
					       	</view>
					       	<view class="adresItem-bttom">{{item.city}}{{item.address}}</view>
					       </view>
					    </SwipeActionItem>
					</SwipeAction>
				</block>
			</template>
    	</view>
        <view class="addAdres u-f u-f-ajc" @click="addressClik">添加新地址</view>
		<!-- 地址列表无数据的时候 -->
			<view class="emptContnet" v-if="addresslist.length==0">
				<view class="emptImage">
					<image src="../../static/default/address.png" mode=""></image>
				</view>
				<view class="emptText">用户没有收获地址，请添加</view>
			</view>
		
	</view>
</template>

<script>
	// uni-swipe-action  uni-swipe-action-item
	import  SwipeAction from '../../components/SwipeAction/uni-swipe-action/uni-swipe-action.vue'
	import SwipeActionItem from '../../components/SwipeAction/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components:{
			SwipeAction,SwipeActionItem
		},
		data() {
			return {
				addresslist:[],//地址列表
				addressId:'',//操作选中的地址id
				back:'',
				options:[
				        {
				            text: '删除',
				            style: {
				                backgroundColor: '#FF0000',
								color:'#FFFFFF'
				            }
				        }, {
				            text: '编辑',
				            style: {
				                backgroundColor: '#0CBBEF',
								color:'#FFFFFF'
				            }
				        }
				      ]
			}
		},
		onShow() {
			this.getData();
		},
		onLoad(option) {
			console.log(option)
			if(option.back==1){
				this.back=option.back
			}else{
				this.back=0
			}
		},
		methods: {
			// 获取地址列表请求
			getData(){
				this.$request("/member/addressList")
				.then(res=>{
					console.log(res.data)
					this.addresslist = res.data;
					// this.addressList=res.data;
					
					// this.show=true
				})
			},
	        swipeChange(e,index){
				
			},
			bindClick(e,index){
               this.addressId = this.addresslist[index].id
			   // 删除操作
			   if(e.content.text == '删除'){
				   uni.showModal({
				       content: '确定删除？',
					   success:res=> { 
						 if(res.confirm){
							this.$request('/member/addressDel',{
							     id:this.addressId
							}
							).then(res=>{
							    console.log(res)
								if(res.code == 1){
									this.getData()
								}
							})
						 }else{
							 
						 }
					   }
					   
					   
				       // success: function (res) {
				       //     if (res.confirm) {
				       //         
				       //     } else if (res.cancel) {
				       //         console.log('用户点击取消');
				       //     }
				       // }
				   });
			   }else{
				   console.log('编辑')
				   uni.navigateTo({
				   	url:'edit-address?id='+this.addressId,
					
				   })
			   }
			   
			   
			
			},
			// 添加地址
			addressClik(){
				uni.navigateTo({
					url:"./add-address?back="+this.back
				})
			}
			
		}
	}
</script>

<style>
	/* 列表项 */
	.adresItem{padding: 36rpx 20rpx;border-bottom: 1rpx solid #EEEEEE}
	.adresItem-top view{margin-right: 20rpx; font-size: 30rpx;height: 40rpx;line-height: 40rpx;text-align: center;}
	.adresItem-top .adresItem-top-defalult{background-color:#1EC8F2 ;color: #FFFFFF;font-size: 20rpx;height: 25rpx;line-height: 25rpx;padding: 5rpx;}
	.adresItem-bttom {font-size: 28rpx;line-height: 40rpx;height: 40rpx;color:#BCBCBC;}
	/* 添加按钮 */
	.addAdres{width: 100%;height: 90rpx;background-color: #0BB8EB;color: #EEEEEE;font-size: 28rpx;position: fixed;bottom: 0;}
	/* 无地址时候的视图 */
	.emptContnet{margin-top: 200rpx;background-color: #0086B3;}
	.emptImage image{width: 330rpx;height: 210rpx;}
</style>
