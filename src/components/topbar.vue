<template>
  <div class="topbar-container" >
    <el-button size="mini" icon="el-icon-search" v-on:click="changeStateCollapse"></el-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import BreadCrumd from './breadCrumd'

export default {
 /* components: {
    // BreadCrumd
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.collapse
    })
  },
  methods: {
    //...mapActions(['changeStateCollapse'])
  }*/
  computed: {
    ...mapState({
      isCollapse: (state) => state.collapse
    })
  },
  methods: {
    ...mapActions(['changeStateCollapse'])
  }
}
</script>

<style  scoped>
  .topbar-container {
    width: 100%;
    height: 50px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    background-color: #fff
  }
</style>
