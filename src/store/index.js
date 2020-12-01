import Vue from 'vue'
import Vuex from 'vuex'
import Item from './modules/item'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Item },
  state: {
    name:'isal',
  },
  mutations: {},
  actions: {},
  getters: {}
})
