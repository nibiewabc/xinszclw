<template>
	<view>
		
		<image src="/static/icon7.png" mode="aspectFill" class="img1"></image>
		
		<view class="img2">
		<image src="/static/icon8.png" mode="aspectFill" @click="Puburl('/pages/device/Bluetooth_search/Bluetooth_search',false)"></image>
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
     .img1{
		 width: 100%;
		 height: 100vh;
		 position: relative;
	 }
	 .img2{
		position: absolute;
		bottom: 200upx;
		text-align: center;
		width: 100%;
		image{
			height: 228upx;
			width: 228upx;
		} 
	 }
</style>
