<template>
	<view>
		<view class="search u-f-ajc">
			<image src="../../static/search.png" mode=""></image>
			<text>搜索全部</text>
		</view>
		<view class="line"></view>
		<view class="cate u-f">
			<view class="cateLeft">
				<scroll-view scroll-y="true" class="cateNamelist" :scroll-top="leftscrolltop">
					<view class="leftItem u-f-ajc"
					:class="{cateActive:current==index}"
					@click="leftclick(index)"
					v-for="(item,index) in cateList" :key="index" >
					       {{item.catename}}
						   <view class="line"></view>
					</view>
				</scroll-view>
			</view>
			<view class="cateRight">
				<scroll-view scroll-y="true" class="rightlist" @scroll="rightScroll" :scroll-into-view="'cate'+mainCurent" scroll-with-animation="">
					<view class="rightItem" v-for="(item,index) in cateList" :key="index" :id="'cate'+index">
						<view class="rightItemTile">{{item.catename}}</view>
						<view class="rightItemCon">
							<view class="rightItemConItem" v-for="(child,childIndex) in item.product" :key="childIndex">
								<image :src="imgUrl+child.mainimage" mode=""></image>
								<text>{{child.smalltitle}}</text>
							</view>
						</view>		
					</view>
					
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateList:[],
				current:0,
				reactInfo:[],
				mainCurent:0,
				leftscrolltop:0
			}
		},
		onLoad() {
			this.getData()
		},
		mounted() {
			setTimeout(()=>{
				this.getReactInfo()
				// console.log(this.reactInfo);
				
			},200)
			
		},
		methods: {
		    getData(){
		   	    uni.request({
		   		    url:this.apiUrl+'/index/cate',
		   		    success:res=>{
		   			this.cateList=res.data.data
		   	       }
		   	    })
		    },
		    leftclick(index){
				this.current = index
				this.mainCurent = index
				console.log(this.current)
				this.leftscrolltop = index *55
			},
		    //获取节点信息
			getReactInfo(){
				var top =0;
				var bttom = 0;
				var  temp = 0
				for (var i =0;i<this.cateList.length;i++ ) {
					let view = uni.createSelectorQuery().in(this).select("#cate"+i);
					view.fields({
					  size: true,
					  rect:true,
					}, data => {
					 top+= temp
					 bttom = top+data.height
					 temp =data.height
					 // this.reactInfo[i]={'top':top,'bttom':bttom}
					 this.reactInfo.push({
						 'top':top,
						 'bttom':bttom
					 })
					}).exec();
				}
			},
			rightScroll(e){
				var scrollTop = e.detail.scrollTop
				for (var i = 0;i<this.reactInfo.length;i++) {
					if(scrollTop>this.reactInfo[i].top && scrollTop<this.reactInfo[i].bttom){
						this.current = i;
						this.leftscrolltop = i *55
					}
				}
			}
			
		}
	}
</script>

<style>
.search{height: 70rpx;margin-top: 20rpx;margin-left: 30rpx;margin-right: 30rpx;margin-bottom: 20rpx;background-color: #F7F7F7;}
.search image{width: 38rpx;height: 38rpx;margin-right: 15rpx;}
.search text{font-size: 28rpx;color: #999;}
.line{width: 100%;height: 20rpx;background-color: #F7F7F7;}
.cate{position: absolute;top: 130rpx;bottom: 0;width: 100%;background-color: #FFFFFF;}
.cateLeft{width: 200rpx;height: 100%;background-color: #FFFFFF;}
.leftItem{font-size: 28rpx;color:#000000;height: 110rpx;line-height: 110rpx;background-color: #F7F7F7;position: relative;}
.cateActive{background-color:#FFFFFF;}
.line{background-color: #FFFFFF;width: 10rpx;height: 50rpx;position: absolute;top: 30rpx;left: 5rpx;}
.cateActive .line{background: #10b6e8;}
.cateNamelist{height: 100%;overflow: auto;}
.rightlist{height: 100%;overflow: auto;}
.rightItem{height: auto;overflow: hidden;}
.rightItemTile{height: 86rpx;font-size: 28rpx;color: #999;text-align: center;line-height: 86rpx;}
.rightItemConItem{width: 33.33%;float: left;display: block;overflow:auto;margin-top: 20rpx;}
.rightItemConItem image{width: 160rpx;height: 160rpx;display: block;margin: 0 auto;}
.rightItemConItem text{font-size: 20rpx;text-align: center;display: block;overflow: hidden;height: 36rpx;line-height: 36rpx;color:#999 ;}

</style>
