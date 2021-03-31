<template>
	<view>
		
		<view class="bot"></view>
		
		<view class="light_list">
			<view class="csw1" @click="onjtshow()">
				<text>启动</text>
				<image :src="jtshow?jt[0]:jt[1]" mode="aspectFill"></image>
			</view>
			<view class="csw2" v-if="jtshow">
				<view class="ve1">
					<text>零启动</text>
					<image :src="ydshow?anniu[0]:anniu[1]" mode="aspectFill" @click="onydshow()"></image>
				</view>
				<view class="ve1">
					<text>非零启动</text>
					<image :src="ydshow?anniu[1]:anniu[0]" mode="aspectFill" @click="onydshow()"></image>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jt:[
					'/static/icon34.png',
					'/static/icon35.png',
				],
				anniu:[
					'/static/icon33.png',
					'/static/icon36.png',
				],
				
				jtshow:true,
				ydshow:false,
			};
		},
		methods:{
			
			onjtshow(){
				this.jtshow = !this.jtshow
			},
			
			onydshow(){
				this.ydshow = !this.ydshow
			}
			
		}
	}
</script>

<style scoped lang="scss">
    @import '../lighting/lighting.scss'
</style>
