<script>
	
	export default {
		globalData: {
			URLAPI: 'https://bms.biswang.com', //公网-生产环境
			// URLAPI: 'http://192.168.0.166:4911',  //内网-开发调试

			ACCESS_TOKEN: '', //唯一ACCESS_TOKEN标识，判断用户标识	
			PHONE_OS:''
		},
		onLaunch: function() {
			var that = this
			var globalData = this.$options.globalData
			
			//判断手机系统
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					// console.log('运行Android上')
					globalData.PHONE_OS = 'android'
					break;
				case 'ios':
					// console.log('运行iOS上')
					globalData.PHONE_OS = 'ios'
					break;
				default:
					// console.log('运行在开发者工具上')
					globalData.PHONE_OS = '开发工具'
					break;
			}
			
		
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import './common/uni.scss';
	@import "uview-ui/index.scss";
	@import './styles/base.scss';
	@import './styles/color.scss';
	@import './styles/flex.scss';
	@import './styles/anim.scss';
	@import './styles/font-face.scss';
	
	
	/*每个页面公共css */
	page {
		background: #E6EAED;
		color: #333333;
		padding: 0;
		margin: 0;
	}
	
	// 三角符号
	.sanjiaofuhao:before{
		display:block;
		content:'';
		width:0;
		border-width:16upx 16upx 16upx 16upx;
		border-style:solid; 
		border-color:transparent #FFFFFF transparent transparent; 
		position:absolute; 
		left:-30upx;
		top:16upx;
		z-index: 1;
	}
	
	
	/* 水平分割线 */
	.hr {
		width: 100%;
		height: 2rpx;
		background: #E5E5E5;
	}
	
	/* 大标题字号 */
	.max-title {
		font-size: 44rpx;
		color: #000000;
	}
	
	/* 标题字号 */
	.font-title {
		font-size: 36rpx;
		color: #000000;
	}
	
	/* 小标题字号 */
	.mini-title {
		font-size: 32rpx;
	}
	
	/* 描述字号 */
	.font-content {
		font-size: 28rpx;
	}
	
	/* 描述字号 */
	.font-desc {
		font-size: 24rpx;
	}
	
	/*文本输入框placeholder颜色和大小*/
	.uni-input-placeholder {
		color: #CCCCCC;
		font-size: 28upx;
	}
	
	/*图片去间隙css*/
	image {
		vertical-align: bottom;
	}
	
	.button_clear {
		border: none;
		background: #FFFFFF;
		display: initial;
		padding: 0 0 0 0;
		text-align: left;
	}
	
	.button_clear::after {
		border: none;
	}
	
	wx-button[disabled]:not([type]) {
		background-color: #FFFFFF;
	}
	
	/*遮挡*/
	.my_uni_mask {
		position: fixed;
		z-index: 999;
		right: 0;
		bottom: 0;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.8);
		height: 100%;
		width: 100%;
		&.show {
			display: block;
			animation: showPopup 0.2s linear both;
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			animation: hidePopup 0.2s linear both;
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 居中遮罩 */
	.my_center_mask {
		position: fixed;
		z-index: 999999;
		right: 0;
		bottom: 0;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	/*系统状态栏*/
	.status_bar {
		height: var(--window-top);
		width: 100%;
	}
	
	/*头部宽度css*/
	.mui-top-index {
		width: 100%;
		height: 88upx;
		display: block;
	}
	
	/*底部宽度css*/
	.mui-bot-index {
		width: 100%;
		height: 40upx;
		display: block;
	}
	
	/*单行超出显示省略号css*/
	.one-line-ellipsis {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	/*两行超出显示省略号css*/
	.more-line-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		/*设置成弹性盒子 */
		display: -webkit-box;
		/*显示的个数 */
		-webkit-line-clamp: 2;
		/* 属性规定框的子元素应该被水平或垂直排列。 */
		-webkit-box-orient: vertical;
	}
	
	/*阴影边框属性*/
	.pub-shadow {
		box-shadow: 0rpx 0rpx 20rpx rgba(0, 0, 0, 0.1);
	}
	
	/* 弹性盒子分行 */
	.row-wrap-list {
		/* 弹性盒子 */
		display: flex;
		/* 沿行轴线两端对齐，子元素之间有间隙 */
		justify-content: space-between;
		/* 子元素溢出父容器时换行 */
		flex-flow: row wrap;
	}
	
	.row-wrap-list:after {
		content: "";
		width: 200upx;
		height: 0;
	}
	
</style>
