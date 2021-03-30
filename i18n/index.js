import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from '@/i18n/cn.js'
import en from '@/i18n/en.js'
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'cn', // 默认选择的语言
	messages: {
		cn,
		en
	},
	silentTranslationWarn: true
});

//语言版本切换
Vue.prototype._i18n = i18n;


//语言调用
Vue.prototype.Lang = function(val){
	return this.$t(val);
}


export default i18n;


