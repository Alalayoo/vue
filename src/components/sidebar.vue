<template>
  <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
    <div class="logo" :class="{'collapse-logo': isCollapse}">
      LOGO
    </div>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <SidebarItem v-for="route in permissionRouters" :key="route.path"/>
     <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="home">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SidebarItem from '../components/sidebaritem';

export default {
  components: {SidebarItem},
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    },
    ...mapState({
      isCollapse: (state) => state.sidebar.isCollapse
    }),
    ...mapGetters([
      'permissionRouters'
    ]),
  },
  methods: {}
}
</script>

<style scoped>
  .collapse-width {
    width: 64px !important;
  }
  .collapse-logo {
    font-size: 18px !important;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 180px;
  }
  .sidebar-container {
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    transition: width 0.28s;
    z-index: 1001;
    overflow: hidden;
  }
  .logo {
    width: 100%;
    height: 40px;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
    background-color: rgb(48, 65, 86);
    color: #fff;
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
    overflow-y: auto;
  }
</style>
