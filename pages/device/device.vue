<template>
	<view>
		
		<!-- 头部 -->
		<view class="device_top">
			<image src="/static/icon3.png" class="close" mode="aspectFill"></image>
			<view class="ve1">我的设备</view>
			<image src="/static/icon13.png" class="msg"  mode="aspectFill"></image>
		</view>
		

		<view class="device_1">
			<view class="left">
				<view class="ve1">81KM</view>
				<view class="ve2">
					<view class="battery" :style="'background-size: '+battery+'% 80%;'"></view>
					<view class="te1">{{battery}}%</view>
				</view>
				<view class="ve3">
					<image @click="onprotect" :src="protect?'/static/icon19.png':'/static/icon14.png'" mode="aspectFill" class="img1"></image>
					<image @click="onswitcha" :src="switcha?'/static/icon18.png':'/static/icon15.png'" mode="aspectFill" class="img2"></image>
				</view>
			</view>
			<view class="right">
                <image src="/static/icon17.png" mode="widthFix" class="img1"></image> 
			</view>
		</view>
		
		
		<view class="device_2">
			<view class="ve_top">
				<view class="left">
					<text class="te1">澄海区东里镇</text>
					<text class="te2">刚刚</text>
				</view>
				<view class="right"></view>
				<image src="/static/icon16.png" mode="aspectFill" class="img1"></image>
			</view>
			
			<view class="ve_list">
				<view class="list">
					<image  src="/static/icon23.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view class="ve1">电池信息</view>
						<view class="ve2">{{battery}}<text>%</text></view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon25.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view class="ve1">历史轨迹</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon26.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view class="ve1">骑行统计</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon24.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view class="ve1">故障检测</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon21.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view class="ve1">参数设置</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon22.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view class="ve1">车辆说明书</view>
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
                protect:false,
				switcha:false,
				
				battery:87,
			}
		},
		onLoad() {
           
		},
		methods: {
			onprotect(){
				this.protect = !this.protect
			},
			onswitcha(){
				this.switcha = !this.switcha
			}
		}
	}
</script>

<style scoped lang="scss">
    @import './device.scss'
</style>
