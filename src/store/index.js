import Vue from 'vue'
import Vuex from 'vuex'

import { SET_COLLAPSE } from './contants'
import list from './list'

Vue.use(Vuex)

const state = {
  collapse: false // 是否收起左侧栏
}

const getters = {}

const mutations = {
  [SET_COLLAPSE](state, collapse) {
    state.collapse = collapse
  }
}

const actions = {}

export default new Vuex.Store({
  modules: {
    list
  },
  state,
  getters,
  mutations,
  actions
})
