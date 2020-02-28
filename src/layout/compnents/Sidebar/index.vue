<template>
  <el-aside :width="asideWidth">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="iscollapse"
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <sidebar-item v-for="route in menuData" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div class="fold-warpper" @click="toggleSideBar">
      <i :class="sidebar.opened ? 'el-icon-s-fold' : 'el-icon-s-unfold'" />
    </div>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/style/variables.scss'
import SidebarItem from './SidebarItem'
import { constantRoutes } from '@/router'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    variables: {
      get() {
        return variables
      },
      set(val) {
        console.log(val)
      }
    },
    menuData() {
      return constantRoutes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    iscollapse() {
      return !this.sidebar.opened
    },
    asideWidth() {
      return this.variables.sideBarWidth
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside{
  background: #333333;
}
</style>
