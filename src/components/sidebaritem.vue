<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
    export default {
      data() {
        return {
            onlyOneChild: null}
      },
      methods: {
        hasOneShowingChild(children=[], parent) {
          const showingChildren = children.filter(item => {
            if(item.hidden) return false;
            else {
              this.onlyOneChild = item;
              return true;
            }
          });
          // 当只有一个子路由将其设为默认值
          if (showingChildren.length === 1) return true;

          // 没有子路由
          if (showingChildren === 0) {
            this.onlyOneChild = {...parent, path:'', noShowingChildren: true };
            return true;
          }
          return false;
        }
      }
    }
</script>

<style scoped>

</style>
