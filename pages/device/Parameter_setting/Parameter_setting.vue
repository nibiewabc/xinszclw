<template>
	<view>
		
		<view class="ve_list">
			<view class="list" @click="Puburl('lighting/lighting',false)">
				<image  src="/static/icon27.png" mode="aspectFill"></image>
				<view class="cul_1">
					<view class="ve1">灯光设置</view>
					<!-- <view class="ve2">{{battery}}<text>%</text></view> -->
				</view>
			</view>
			<view class="list" @click="Puburl('cruise/cruise',false)">
				<image  src="/static/icon25.png" mode="aspectFill"></image>
				<view class="cul_1">
					<view class="ve1">巡航设置</view>
				</view>
			</view>
			<view class="list" @click="Puburl('speed/speed',false)">
				<image  src="/static/icon29.png" mode="aspectFill"></image>
				<view class="cul_1">
					<view class="ve1">速度单位设置</view>
				</view>
			</view>
			<view class="list" @click="Puburl('startup/startup',false)">
				<image  src="/static/icon28.png" mode="aspectFill"></image>
				<view class="cul_1">
					<view class="ve1">启动方式</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
    @import './index.scss'
</style>
