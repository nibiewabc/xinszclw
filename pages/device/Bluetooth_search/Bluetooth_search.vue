<template>
	<view>
		<view class="search_1">
			<image src="/static/icon9.png" mode="widthFix" class="img1" @click="close"></image>
			<image src="/static/icon11.png" mode="aspectFill" class="img2" @click="tipsshow"></image>
		</view>
		
		
		<view class="search_2" v-show="show">
			<view class="list1">
				<image src="/static/icon10.png" mode="aspectFill" class="img1"></image>
				<view class="inner_box">
					<view class="inner"></view>
					<view class="inner outter"></view>
					<view class="inner outter1"></view>
					<view class="inner outter2"></view>
				</view>
			</view>
			<view class="list2">
				<view class="ve1">正在搜索附近的设备(14s)…</view>
				<view class="ve2">搜索过程中靠近设备</view>
			</view>
		</view>
		
		
		<view class="search_3" v-show="!show">
			<view class="list1">
				<image src="/static/icon12.png" mode="aspectFill" class="img1" @click="Puburl('/pages/device/device',false)"></image>
				<view class="children-box">
					<view class="children-view"></view>
					<view class="children-view"></view>
				</view>
			</view>
			<view class="list2">
				<view class="ve1">点击重新搜索</view>
				<view class="ve2">搜索帮助</view>
			</view>
		</view>
		
		
		
		<view class="my_uni_mask" v-if="tips_show" @click="tipsshow()">
			<view class="tips">
				<view class="ve1">没有搜索到设备？</view>
				<view class="ve2">1、将设备关机后再打开；</view>
				<view class="ve2">2、确保设备距离手机5米以内；</view>
				<view class="ve2">3、关闭任何其他手机上连接设备的 应用程序。</view>
				<view class="ve2">4、查看﹝搜索帮助﹞联系售后。</view>
				<view class="ve3" @click.stop="tipsshow()">知道了</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true,
				tips_show:false,
			}
		},
		onLoad() {
			setTimeout(()=>{
				this.show = false;
			},3000)
		},
		methods: {
			tipsshow(){
				this.tips_show = !this.tips_show
			},
			close(){
				uni.navigateBack();
			}
		}
	}
</script>

<style scoped lang="scss">
    @import './index.scss'
</style>
