import Vue from 'vue'
import Vuex from 'vuex'
import nabbar from './nabbar'
import color from './color'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		nabbar,
		color
	}
})