<template>
    <view class="">
    	<view class="addressList">
			<SwipeAction>
			    <SwipeActionItem :right-options="options"  @click="bindClick" @change="swipeChange($event, 0)">
			       <view class="adresItem">
			       	<view class="adresItem-top u-f">
			       		<view class="">英特网络</view>
			       		<view class="">18066666666</view>
			       		<view class="adresItem-top-defalult">默认</view>
			       	</view>
			       	<view class="adresItem-bttom">北京市甘家口甲183号</view>
			       </view>
			    </SwipeActionItem>
			</SwipeAction>
    	</view>
        <view class="addAdres u-f u-f-ajc" @click="addressClik">添加新地址</view>
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
		onLoad() {
			
		},
		methods: {
	        swipeChange(e,index){
	           console.log(index)
			  // console.log(e)
	        },
			bindClick(e){
			   console.log(e.index)
			   console.log(this.options[e.index].text)
			},
			// 添加地址
			addressClik(){
				uni.navigateTo({
					url:'./add-address'
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
</style>
