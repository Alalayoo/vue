import Vue from 'vue'
import Vuex from 'vuex'

import permission from './modules/permission';
import sidebar from './modules/sidebar';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

// 创建vuex实例
const store = new Vuex.Store({
  modules: {
    permission,
    sidebar,
    user,
  },
  getters
});


export default store
