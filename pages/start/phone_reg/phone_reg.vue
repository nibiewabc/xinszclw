<template>
	<view>

        <view class="ph_rge_box" v-if="status==1">
			<view class="ph_rge1">请输入手机号<text>*</text></view>
			
			<view  class="ph_rge2">
				<view class="list1">
					<view  class="left">
						<image src="@/static/icon1.png" mode="aspectFill" class="img1"></image>
						<text>+86</text>
						<image src="@/static/icon2.png" mode="aspectFill" class="img2"></image>
					</view>
					<input type="text" placeholder="手机号" :value="phone" />
				</view>
				<view class="list2">账号已存在</view>
			</view>
			
			
			<view class="ph_rge3">
				<view class="ve1" @click="Puburl('/pages/start/email_reg/email_reg',false)">使用邮箱注册</view>
				<view class="ve2" @click="onstatus()">发送验证码</view>
				<view class="ve3">登录即表明同意<text class="te1">用户协议</text>及<text class="te1">隐私政策</text> </view>
				<view class="ve3">标记(<text class="te2">*</text>)号的信息是我们为您创建账户和提供服务的必要信息。</view>
			</view>
		</view>	
	
	
		<view class="ph_rge_yzm" v-if="status==2">
			<view class="ve1">请输入验证码</view>
			<view class="item" @tap='KeyboarOpen'>
				<password-input :numLng='yzm' :plaintext="false"></password-input>
			</view>
			<view class="ve3">无效的验证码</view>
			<view class="ve2" @click="onstatus()">确认</view>
			<number-keyboard tabBar ref='KeyboarHid' @input='input' psdLength='6' ></number-keyboard>
		</view>
		
		
		<view class="ph_rge_number" v-if="status==3">
			<view class="ve1">请填写必要资料<text>*</text></view>
			<view class="ve2">
				<text>*</text>
				<input type="text" placeholder="填写真实姓名,售后服务需要" :value="name"/>
			</view>
			<view class="ve2">
				<text>*</text>
				<input type="text" placeholder="你的昵称" :value="nickname"/>
			</view>
			<view class="ve3" @click="onstatus()">下一步</view>
		</view>
		
		
		<view class="ph_rge_number" v-if="status==4">
			<view class="ve1">输入密码<text>*</text></view>
			<view class="ve2">
				<text>*</text>
				<input type="password" placeholder="请输入6~20位的密码" :value="passwrod"/>
			</view>
			<view class="ve1">确认密码<text>*</text></view>
			<view class="ve2">
				<text>*</text>
				<input type="text" placeholder="请确保两次输入一致" :value="compassword"/>
			</view>
			<view class="ve3" @click="onstatus()">完成</view>
		</view>
		


	</view>
</template>

<script>
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	export default {
		components: {
			numberKeyboard,
			passwordInput
		},
		data() {
			return {
				status:1,
				
				phone:'',
				area_code:86,
				
				passwrod:"",   
				compassword:"",
				name:"",
				nickname:'',
                yzm: "", 
			}
		},
		onLoad() {

		},
		created() {
			
		},
		computed:{
                
		},
		methods: {
			
			onstatus(){
				switch(this.status)
				{
					case 1:
						this.status += 1
						this.okModel('验证码短信已发送至手机号+'+this.area_code+' '+this.phone,'确认')
						setTimeout(() => {
							this.$refs.KeyboarHid.open()
						}, 50)
						break;
					case 2:
						this.status += 1
						break;
					case 3:
						this.status += 1
						break;
					case 4:
						this.status = 1
						break;
				}
			},
			
			
			//打开键盘
			KeyboarOpen(e) {
			  this.$refs.KeyboarHid.open();
			},
			//输入的值
			input(val) {
			  this.yzm = val;
			},
			
			
		}
	}
</script>

<style scoped lang="scss">
      @import './phone_reg.scss'
</style>
