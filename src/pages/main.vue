<template>
  <div>
    <SideBar></SideBar>
    <div class="right-container" v-bind:class="[isCollapse ? 'collapseClass' : 'right-container']">
      <TopBar></TopBar>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TopBar from '../components/topbar'
import SideBar from '../components/sidebar'
import Content from '../components/content'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.sidebar.isCollapse
    })
  },
  components: {
    TopBar,
    SideBar,
    Content
  },
  created: function() {
    console.log(this.$store.state.permission.routes)
  }
}
</script>

<style scoped>
  .right-container{
    width: 100%;
    min-height: 100%;
    margin-left: 180px;
    transition: margin-left 0.28s;
  }
  .collapseClass{
    margin-left: 64px !important;
  }
</style>
