import Vue from 'vue'
import App from './App'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false


//vuex挂载
Vue.prototype.$store = store       






//公用跳转
Vue.prototype.Puburl = function(url,isLogin){
	if (isLogin && !this.isLogin()) {
		return false
	}
	uni.navigateTo({
		url: url
	})
}



//公共缩略图地址
Vue.prototype._images_thumb = function(width, height) {
	return '?imageView2/0/w/' + width + '/h/' + height + '/q/75'
}


//本地异步存储缓存的公共变量
Vue.prototype.set_storage = function(key, data, callback) {
	uni.setStorage({
		key: key,
		data: data,
		success: function(res) {
			console.log(res)
			typeof callback == 'function' && callback()
		},
		fail: function(res) {
			console.log(res)
		}
	})
}


//把http替换成https
Vue.prototype.isHtts = function (value){
	if(value.indexOf('https') == -1)
	value = value.replace('http', 'https')
	console.log('图片Url:'+value)
	return value
}


//单纯判断access_token
Vue.prototype.isToken = function() {
	var access_token = uni.getStorageSync('ACCESS_TOKEN');
	if (!access_token || access_token == 'undefined') {
		return false;
	} else {
		return true;
	}
}


// 常规判空处理，不可用于数组判断 效验
Vue.prototype.isEmptyStr = function(value) {
	value = String(value)
	return !value || value === 'undefined' || value === 'null' ? '' : value
}


// 土司提示
Vue.prototype.toast = function(value) {
	uni.showToast({
		title: value,
		duration: 1500,
		icon: 'none'
	});
}

// 模态弹窗
Vue.prototype.model = function(content, confirm) {
	uni.showModal({
		content: content,
		confirmText: "是",
		cancelText: "否",
		success: (res) => {
			if (res.confirm) {
				confirm()
			}
		}
	})
}

// 模态弹窗警告无是否
Vue.prototype.okModel = function(content, confirmText) {
	uni.showModal({
		content: content,
		confirmText:confirmText,
		confirmColor: '#000000',
		showCancel: false,
	})
}

//七牛上传封装
Vue.prototype.qiniu = function(path, fileType, success) {
	var that = this;
	uni.showLoading({
		mask: true,
		title: '加载中...'
	})
	that.api.postQiniuToken({}, (qiniuData) => {

		var fileName = 'bossMoney' + Date.parse(new Date())

		qiniuUploader.upload(path, (res) => {

			console.log('file url is: ' + res.fileUrl);
			uni.hideLoading()
			success(res)

		}, (error) => {
			console.log('error: ' + error);
		}, {
			region: 'SCN', //区域
			domain: 'http://' + qiniuData.domain, // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
			key: fileName + fileType, // 文件名
			// 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
			uptoken: qiniuData.token, // 由其他程序生成七牛 uptoken，此处使用/api/CloudFiles/token
			// uptokenURL: 'UpTokenURL.com/uptoken', // 从指定 url 通过 HTTP GET 获取 uptoken，返回的格式必须是 json 且包含 uptoken 字段，例如： {"uptoken": "[yourTokenString]"}
			// uptokenFunc: function () { return '[yourTokenString]'; }
		}, (res) => {
			uni.showLoading({
				title: '进度' + res.progress
			})
			// console.log('上传进度', res.progress)
			// console.log('已经上传的数据长度', res.totalBytesSent)
			// console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
		}, () => {
			// 取消上传
		}, () => {
			// `before` 上传前执行的操作 
		}, (err) => {
			if (err.statusCode != 200) {
				var log = JSON.stringify(err)
				// uni.showModal({
				// 	title: '上传失败：' + log,
				// 	showCancel: false
				// })
			}
			// `complete` 上传接受后执行的操作(无论成功还是失败都执行) 
		});
	})
}


App.mpType = 'app'
const app = new Vue({
	store,
	i18n,
    ...App
})
app.$mount()
