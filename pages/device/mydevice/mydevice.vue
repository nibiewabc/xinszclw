<template>
	<view>

    <view class="my_uni_mask" v-if="pickshow" @click="onpickshow()">
		<view class="mydev1_pick" @click.stop="">
			<view class="ve1">选择设备</view>
			<picker-view :indicator-style="indicatorStyle" @change="bindChange">
				<picker-view-column>
					<view class="item" v-for="(item,index) in array" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
			<view class="ve2" @click.stop="onpickshow()">确认</view>
		</view>
    </view>

    <view class="mydevbox">
		

		<view class="mydev1" @click="onpickshow">
			<text class="te1">A1 红色</text>
			<text class="iconfont ic_icon_jiantou-you"></text>
		</view>


		
		<view class="mydev2">
			<view class="csw1">2021-3-11 星期四</view>
			<view class="csw2">
				<view class="left">
					<text class="te1">06:37</text>
					<text class="te2 iconfont ic_yuandianzhong"></text>
				</view>
				<view class="right">
					<view class="ve1">
						<text class="te1">车辆震动报警</text>
						<text class="te2 iconfont ic_icon_jiantou-you"></text>
					</view>
				</view>
			</view>
			<view class="csw1">2021-3-11 星期四</view>
			<view class="csw2">
				<view class="left">
					<text class="te1">06:37</text>
					<text class="te2 iconfont ic_yuandianzhong"></text>
				</view>
				<view class="right">
					<view class="ve1">
						<text class="te1">停车位置GPS信号差</text>
					</view>
				</view>
			</view>
			<view class="csw2">
				<view class="left">
					<text class="te1">06:37</text>
					<text class="te2 iconfont ic_yuandianzhong"></text>
				</view>
				<view class="right" @click="onjiantou()">
					<view class="ve1">
						<text class="te1">电池已接入</text>
						<text class="te2 iconfont ic_icon_jiantou-you" v-if="!jiantou"></text>
						<text class="te2 iconfont ic_icon_jiantou-xia" v-if="jiantou"></text>
					</view>
					<view class="ve2" v-if="jiantou">电池控制器可能发生了通讯故障，如车辆速度受 限影响骑行，请联系售后检修。</view>
				</view>
			</view>
			<view class="csw1">2021-3-11 星期四</view>
			<view class="csw2">
				<view class="left">
					<text class="te1">06:37</text>
					<text class="te2 iconfont ic_yuandianzhong"></text>
				</view>
				<view class="right">
					<view class="ve1" @click="onjiantou()">
						<text class="te1">车辆震动报警</text>
						<text class="te2 iconfont ic_icon_jiantou-you" v-if="!jiantou"></text>
						<text class="te2 iconfont ic_icon_jiantou-xia" v-if="jiantou"></text>
					</view>
			        <view class="ve2" v-if="jiantou">电池控制器可能发生了通讯故障，如车辆速度受 限影响骑行，请联系售后检修。</view>
				</view>
			</view>
			
		</view>
		
	</view>	
		


		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/**
				 * 解决动态设置indicator-style不生效的问题
				 */
				visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				// indicatorStyle: `height: 50px;`,
				
				jiantou:true,
				
				index:0,
				array: ['紫色', '红色', '蓝色', '黑色'],
				pickshow:false,
				
			}
		},
		methods: {
			
			bindChange: function (e) {
				console.log(e)
			},
			
			onjiantou(){
				this.jiantou = !this.jiantou
			},
			
			onpickshow(){
				this.pickshow = !this.pickshow
			}
			
		}
	}
</script>

<style scoped lang="scss">
      @import './mydevice.scss'
</style>
