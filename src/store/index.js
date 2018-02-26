import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import cart from './modules/cart'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		common,
		cart,
		user
	}
})
