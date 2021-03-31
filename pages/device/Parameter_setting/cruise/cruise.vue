<template>
	<view>
		
		<view class="bot"></view>
		
		<view class="light_list">
			<view class="csw1" @click="onjtshow()">
				<text>巡航</text>
				<image :src="jtshow?jt[0]:jt[1]" mode="aspectFill"></image>
			</view>
			<view class="csw2" v-if="jtshow">
				<view class="ve1">
					<text>自动巡航</text>
					<image :src="ydshow?anniu[0]:anniu[1]" mode="aspectFill" @click="onydshow()"></image>
				</view>
				<view class="ve1">
					<text>关闭巡航</text>
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

<style lang="scss">
    .bot{
    	width: 100%;
    	height: 40upx;
    }
    .light_list{
    	width: 90%;
    	margin: 0 auto;
    	margin-top: 40upx;
    	.csw1{
    		@extend .flex_between;
    		background: #FFFFFF;
    		border-radius: 8upx;
    		height: 80upx;
    		padding: 0 4%;
    		text{
    			color: #000000;
    			font-size: 28upx;
    			font-weight: bold;
    		}
    		image{
    			width: 34upx;
    			height: 24upx;
    		}
    	}
    	.csw2{
    		margin-top: 55upx;
    		position: relative;
    		.ve1{
    			@extend .flex_between;
    			background: #FFFFFF;
    			border-radius: 8upx;
    			height: 80upx;
    			padding: 0 4%;
    			margin-top: 10upx;
    			text{
    				color: #000000;
    				font-size: 28upx;
    				font-weight: bold;
    			}
    			image{
    				width: 36upx;
    				height: 36upx;
    			}
    		}
    	}
    	.csw2:before{
    		display:block;
    		content:'';
    		width:0;
    		border-width:30upx 24upx 30upx 24upx;
    		border-style:solid; 
    		border-color:transparent transparent #FFFFFF transparent; 
    		position:absolute; 
    		right:3%;
    		top:-60upx;
    		z-index: 1;
    	}
    }
</style>
