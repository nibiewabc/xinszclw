<template>
	<view>
		
		
		
		<view class="qiun-charts">
			<text>当前电池编号 BMS1234567891234</text>
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
		</view>
		

		
		
		
		
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts.js';
	var _self;
	var canvaArea=null;
   
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				
				chartData: {
					categories: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
					series: [{
						name: '行驶距离(km)',
						data: [20,40,20,30,11,52,12,82,92,],
						color: '#77CAE2'
					}]
				},
				
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.showArea("canvasArea",this.chartData);
		},
		methods: {
			showArea(canvasId,chartData){
				canvaArea=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'area',
					fontSize:11,
					legend:true,
					dataLabel:false,
					dataPointShape:false,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll:false,
					xAxis: {
						type:'grid',
						gridColor:'#dddddd',
						gridType:'solid',
						dashLength:8,
					},
					yAxis: {
						gridType:'solid',
						gridColor:'#E6EAED',
						dashLength:0,
						splitNumber:2,
						min:0,
						max:100,
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						area:{
							type: 'straight',
							opacity:0.2,
							addLine:true,
							width:2
						}
					}
				});
				
			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
      @import './index.scss'
</style>
