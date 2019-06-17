// 路由权限
import {asyncRoutes, constRoutes} from "../../router/index";

function hasPermission (roles, route) {
  if(route.meta && route.meta.roles) {
    // 当有一个返回true则返回true
    return roles.some(role => route.meta.roles.include(role))
  } else {
    return true
  }
}

//获取当前用户路由表
export function getAsyncRoutes(routes, roles) {
  const curRoutes = [];

  routes.forEach(route => {
    const tmp = {...route};
    if(hasPermission(roles, tmp)){
      if(tmp.children){
        tmp.children = getAsyncRoutes(tmp.children, roles)
      }
      curRoutes.push(tmp)
    }
  });
  return curRoutes;
}

const state = {
  routers: [],
  addRouters: [],
}

const mutations = {
  SET_ROUTERS: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({commit}, roles) {
    let curRoutes = [];
    curRoutes = getAsyncRoutes(asyncRoutes, roles);
    commit('SET_ROUTERS', curRoutes);
  }
}

const permission = {
  state: state,
  mutations: mutations,
  actions: actions
}

export default permission;
