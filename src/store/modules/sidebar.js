// 创建vuex实例
const sidebar = {
  state: {
    isCollapse: false, // 默认展开侧边栏
  },
  mutations: {
    changeStateCollapse: function (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    changeStateCollapse (context) {
      context.commit('changeStateCollapse')
    }
  }
}

export default sidebar;
