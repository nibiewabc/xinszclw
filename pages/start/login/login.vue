<template>
	<view>

		<!-- 登录弹窗 -->
		<view class="loginbox">
			
			<image src="@/static/icon3.png" mode="" class="close" @tap="close"></image>
			
			<view class="log1">
				<view class="list" @click="login_fs2">
					<text class="te1" :class="login_status==1 || login_status==3 ?'on':''">{{Lang('index').Account_password_login}}</text>
					<text class="bot" v-if="login_status==1 || login_status==3"></text>
				</view>
				<view class="list" @click="login_fs2">
					<text class="te1" :class="login_status==2 || login_status==4?'on':''">{{Lang('index').Verification_code_login}}</text>
					<text class="bot" v-if="login_status==2 || login_status==4"></text>
				</view>
			</view>
			
			<!--手机账号密码登陆-->
			<view class="phone_log" v-if="login_status==1">
				<view class="list1">
					<view class="left">
						<image src="@/static/icon1.png" mode="aspectFill" class="img1"></image>
						<text>+{{area_code}}</text>
						<image src="@/static/icon2.png" mode="aspectFill" class="img2"></image>
					</view>
					<input type="text" :placeholder="Lang('index').phoneNumber" :value="Phone"/>
				</view>
				<view  class="list2">
					<input type="password" :placeholder="Lang('index').password" :value="Phonelpas"/>
				</view>
			</view>
			
			<!--手机验证码登陆-->
			<view class="phone_log" v-if="login_status==2">
				<view class="list1">
					<view  class="left">
						<image src="@/static/icon1.png" mode="aspectFill" class="img1"></image>
						<text>+{{area_code}}</text>
						<image src="@/static/icon2.png" mode="aspectFill" class="img2"></image>
					</view>
					<input type="text" :placeholder="Lang('index').phoneNumber" :value="Phone"/>
				</view>
				<view class="list3">
					<input type="text" :placeholder="Lang('index').Verification_code" :value="Phoneyzm" />
					<text class="te1"></text>
					<text class="te2" @click="yzm">{{Lang('index').Send_the_verification_code}}</text>
				</view>
			</view>
			
			
			<!--邮箱密码登陆-->
			<view class="phone_log" v-if="login_status==3">
				<view class="list2">
					<input type="text" :placeholder="Lang('index').phoneNumber" :value="Email"/>
				</view>
				<view class="list2">
					<input type="password" :placeholder="Lang('index').password" :value="Emailpas"/>
				</view>
			</view>
			<!--邮箱验证码登陆-->
			<view class="phone_log" v-if="login_status==4">
				<view class="list2">
					<input type="text" :placeholder="Lang('index').phoneNumber" :value="Emailpas"/>
				</view>
				<view class="list3">
					<input type="text" :placeholder="Lang('index').Verification_code" :value="Emailyzm"/>
					<text class="te1"></text>
					<text class="te2" @click="yzm">{{Lang('index').Send_the_verification_code}}</text>
				</view>
			</view>
			
		    
			<view class="log3">
				<view class="ve1" @click="Puburl('/pages/device/Bluetooth_binding/Bluetooth_binding',false)">{{Lang('index').logIn}}</view>
				<view class="ve2">
					<text class="te1" @click="login_status>2?Puburl('/pages/start/email_reg/email_reg',false):Puburl('/pages/start/phone_reg/phone_reg',false)">{{Lang('index').registered}}</text>
					<text class="bot"></text>
					<text class="te1" @click="login_fs1()">{{login_status>2 ? Lang('index').Sign_in_with_mobile_number : Lang('index').Login_with_email}}</text>
				</view>
			</view>
			
			
<!-- 			<view class="log_bot">
				<text>登陆既表明同意</text>
				<text>用户协议</text>
				<text>及</text>
				<text>隐私政策</text>
			</view> -->
			
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
                login_show:false,
				login_status:1,  
				
				area_code:86,
				
				Phone:'',
				Phonelpas:'',
				Phoneyzm:'',
				Email:'',
				Emailpas:'',
				Emailyzm:'',
			}
		},
		created() {
			
		},
		computed:{
                
		},
		methods: {
			
			close(){
				uni.navigateBack()
			},
			
			login_fs1(){
				if(this.login_status<3) this.login_status=3
				else  this.login_status=1
			},
			
			
			login_fs2(){
				if(this.login_status<3) this.login_status==2?this.login_status=1:this.login_status=2
				else  this.login_status==3?this.login_status=4:this.login_status=3
			},
			
			
			yzm(){
				if(this.login_status==2){
					this.okModel('验证码短信已发送至手机号+'+this.area_code+' '+this.Phone,'确认')
				}else{
					this.okModel('验证码已发送至邮箱'+this.Email,'确认')
				}
			}
			
		}
	}
</script>

<style scoped lang="scss">
      @import './login.scss'
</style>
