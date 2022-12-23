import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import resume from './resume'
import position from './position'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,resume,position
  }
});