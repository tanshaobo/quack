<template>
  <div class="home">
    <el-container>
      <TsHeader />
      <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" router>
          <el-menu-item
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.path"
            @click="toggleMenu"
          >
            {{ item.meta }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <ul class="sub-menu-list">
        <li
          v-for="(item, index) in submenuData"
          :key="index"
          class="sub-menu-item"
          :class="index === subAcitveIndex ? 'sub-menu-item--active' : ''"
          @click="toggleSubMenu(item.name)"
        >
          {{ item.title }}
        </li>
      </ul>
      <el-main>
        <!-- <el-button type="primary" size="medium" @click="goNature">卦石</el-button> -->
        <!-- <el-button type="primary" size="medium" @click="goSpend">元宝花费</el-button> -->
        <router-view key="Attr" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TsHeader from '@/components/layout/TsHeader.vue'
import { routes } from '@/router/index.js'
import subMenuConfig from '@/config/menu.config.js'
export default {
  name: 'Home',
  components: {
    TsHeader
  },
  data() {
    return {
      // 当前一级菜单
      activeIndex: '/Nature',
      // 一级菜单列表
      menuList: [],
      // 当前二级菜单
      subAcitveIndex: '',
      // 二级菜单列表
      submenuData: []
    }
  },
  created() {
    this.init()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setSubMenu(to)
    })
  },
  beforeRouteUpdate(to) {
    console.dir(to, 'beforeRouteUpdate')
    // this.setSubMenu(to)
  },
  methods: {
    // 初始化
    init() {
      this.menuList = routes.filter(i => i.path != '/')
    },
    // 激活一级菜单
    toggleMenu(k) {
      console.log(k)
    },
    // 激活二级菜单
    toggleSubMenu(item) {
      console.log(item)
      this.subAcitveIndex = item
    },
    // 设置二级菜单
    setSubMenu(m) {
      const { matched } = m ? m : this.currentRoute
      console.log(matched)
      // 确定一级菜单和二级菜单
      this.activeIndex = `/${matched[0].name}`
      this.toggleNav(matched[0].name)
      // // 二级菜单高亮
      // if (matched[1]) {
      //   const { path } = matched[1]
      //   let newPath = path.slice(-1) === '/' ? path.slice(0, path.length - 1) : path
      //   this.subAcitveIndex = this.submenuData.findIndex(i => i.href === newPath)
      // }
    },
    // 切换二级菜单列表
    toggleNav(index) {
      this.submenuData = subMenuConfig[`${index}Config`]
      this.subAcitveIndex = this.submenuData[0].name
    },
    goSpend() {
      this.$router.push({
        name: 'Spend'
      })
    },
    goNature() {
      this.$router.push({
        name: 'Nature'
      })
    }
  }
}
</script>
<style lang="stylus">
.home
  width 100%
  .el-menu

  .sub-menu-list
    margin 0
    padding 0
    display flex
    justify-content center
    align-items center
    height 48px
    line-height 48px
    box-shadow 2px 0 4px 2px rgba(211, 211, 211, .8)
  .sub-menu-item
    padding 0 20px
    list-style-type none
    cursor pointer
  .sub-menu-item--active
    background rgba(25,134,231, .2)
</style>
