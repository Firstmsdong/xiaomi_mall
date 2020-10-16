<template>
	<view class="">
	<view class="lineView"></view>
	<view class="shopCon u-f">
		<view class="shopConLeft">
			<template v-if="content.length>0">
				<image :src="imgUrl+content[0].image" mode=""></image>
			</template>
			
		</view>
		<view class="shopConRight">
			<view class="">
				<template v-if="content.length>0">
					<image :src="imgUrl+content[1].image" mode=""></image>
				</template>
			</view>
			<view class="">
				<template v-if="content.length>0">
					<image :src="imgUrl+content[2].image" mode=""></image>
				</template>
				
			</view>
			
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style>
	.lineView{height: 20rpx;background-color: #F4F4F4;}
	.shopConLeft{width: 50%;height: 520rpx;}
	.shopConRight{width: 50%;height: 520rpx;}
	.shopConLeft image{width:100%;height: 520rpx;}
	.shopConRight view{width: 100%;height: 50%;}
	.shopConRight image{width: 100%;height: 100%;}
</style>
