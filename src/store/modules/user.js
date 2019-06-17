// 用户store
import {setToken, getToken, removeToken} from '../../util/auth';
import {login, logout} from '../../api/common'
const state = {
    token: getToken(),
    name: '',
    roles: ['admin'],
};

const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
};

const actions = {
  // 登录
  login({commit}, loginMsg) {
    const username = loginMsg.username.trim()
    return new Promise((resolve, reject) => {
      login(username, loginMsg.password).then(response => {
        const data = response
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 退出
  logout({commit, state}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '');
        commit('SET_ROLES', []);
        removeToken();
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}

const user = {
  state: state,
  mutations: mutations,
  actions: actions
};

export default user;

