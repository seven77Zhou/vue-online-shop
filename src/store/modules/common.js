import Vue from 'vue'
import * as types from '../mutation-type'

const state = {
	showLoading:false//loadinfg页面加载状态
}

const mutations = {
	[types.SET_LOADING]:(state,status) => {
		state.showLoading = status
	}
}

export default {
  state,
  mutations
}