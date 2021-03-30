import app from '@/main.js'
const state = {
	userInfo:{
		language: {
			type: 'cn',
			name: '中文'
		},
		network: true,
		SocketState: {},
		SocketStateErr: {},
	},

}

const mutations = {
	setLanguage(state, val) {
		state.language = val;
	},
	changeNetwork(state, val) {
		state.network = val;
	},
	setSocketState(state, info) {
		state.SocketState = info;
	},
	setSocketStateErr(state, info) {
		state.SocketStateErr = info;
	},
	clearSocketState(state) {
		state.SocketState = {};
	},
	
}

const actions = {
	handleSetLanguage({commit}, obj) {
		commit('setLanguage', obj);
		app.$i18n.locale = obj.type;
	}
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}