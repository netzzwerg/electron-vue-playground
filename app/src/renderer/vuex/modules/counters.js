import * as types from '../mutation-types'

const state = {
  main: 45
}

const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (state) {
    state.main = state.main - 10
  },
  [types.INCREMENT_MAIN_COUNTER] (state) {
    state.main = state.main + 10
  },
  [types.RESET_MAIN_COUNTER] (state) {
    state.main = 0
  }
}

export default {
  state,
  mutations
}
