<template>
	<view>
        
		<image src="../../static/icon.gif" mode="aspectFill" class="cover"></image>
		 
        <view @click="changeLang()" class="Lang">{{Lang('index').Language}}</view>
		<image src="../../static/icon.png" mode="aspectFill" class="img1"></image>
		<view class="login">
			<text @click="Puburl('login/login',false)" class="te1">{{Lang('index').logIn}}</text>
			<text @click="Puburl('phone_reg/phone_reg',false)" class="te2">{{Lang('index').registered}}</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
               languages:'cn'
			}
		},
		created() {
			
		},
		methods: {
			//语言切换
			changeLang() {
				this.languages == 'cn' ? this.languages='en' : this.languages='cn'
				this._i18n.locale = this.languages;
			},
		}
	}
</script>

<style scoped lang="scss">
      @import './start.scss'
</style>
