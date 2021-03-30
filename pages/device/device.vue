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
					<view class="battery"></view>
					<text>87%</text>
				</view>
				<view class="ve3">
					<image src="/static/icon14.png" mode="aspectFill" class="img1"></image>
					<image src="/static/icon15.png" mode="aspectFill" class="img2"></image>
				</view>
			</view>
			<view class="right">
                <image src="/static/icon17.png" mode="aspectFill" class="img1"></image> 
			</view>
		</view>
		
		
		<view class="device_2">
			<view class="ve1">
				<view class="left">
					<view>澄海区东里镇</view>
					<view>刚刚</view>
				</view>
				<view class="right"></view>
				<image src="/static/icon16.png" mode="aspectFill" class="img1"></image>
			</view>
			
			<view class="ve_list">
				<view class="list">
					<image  src="/static/icon23.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view>电池信息</view>
						<view>87<text>%</text></view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon25.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view>历史轨迹</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon26.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view>骑行统计</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon24.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view>故障检测</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon21.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view>参数设置</view>
					</view>
				</view>
				<view class="list">
					<image  src="/static/icon22.png" mode="aspectFill"></image>
					<view class="cul_1">
						<view>车辆说明书</view>
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
				 switch:false,
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
    @import './device.scss'
</style>
