<template>
  <div class="app-warpper">
    <!-- 头部 -->
    <app-header />
    <el-container :class="{'hideSidebar': !sidebar.opened}">
      <!-- 菜单 -->
      <sidebar class="sidebar-container" />

      <div class="main-container">
        <tags-view />
        <app-main />
      </div>

    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AppHeader, AppMain, Sidebar, TagsView } from './compnents'
export default {
  name: 'Layout',
  components: { AppHeader, AppMain, Sidebar, TagsView },
  computed: {
    ...mapGetters(['sidebar'])
  }
}
</script>

<style>

</style>
