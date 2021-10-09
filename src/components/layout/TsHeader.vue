<template>
  <section class="ts-header">
    <section class="ts-header__menu">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="toggleMenu">
        <el-menu-item v-for="(item, index) in menuData" :key="index" :index="item.path">
          {{ item.meta }}
        </el-menu-item>
      </el-menu>
    </section>
  </section>
</template>

<script>
import MenuConfig from '@/config/menu.config'
export default {
  name: 'TsHeader',
  data() {
    return {
      activeIndex: ''
    }
  },
  created() {
    this.activeIndex = `/${this.menuData[0].name}`
  },
  computed: {
    menuData: () => {
      return MenuConfig.MainMenuConfig
    }
  },

  methods: {
    toggleMenu(v) {
      this.$emit('getMenuRouter', v)
    }
  }
}
</script>

<style lang="stylus" scoped>
.ts-header
  .ts-header__menu
  .el-menu
    background-image linear-gradient( 89.8deg,  rgba(204,156,223,1) 0.3%, rgba(155,219,245,1) 20.4%, rgba(245,183,208,1) 40.2%, rgba(250,186,98,1) 62.9%, rgba(234,238,240,1) 81.9%, rgba(250,245,171,1) 99.2% )
</style>
