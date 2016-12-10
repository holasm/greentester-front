/*
 * Store for one or more questions
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

}

const mutations = {
  PLAY (state, payload) {

  }
}

const actions = {
  PLAY: ({ commit }, data) => {
    commit('PLAY', data)
  }
}

const getters = {
  playing: state => state.playing
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})