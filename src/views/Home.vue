<template>
  <div class="home">
    <el-container>
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
      <ul>
        <li v-for="(item, index) in submenuData" :key="index" @click="toggleSubMenu(item.name)">
          {{ item.title }}
        </li>
      </ul>
      <el-main>
        <el-button type="primary" size="medium" @click="goNature">卦石</el-button>
        <el-button type="primary" size="medium" @click="goSpend">元宝花费</el-button>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { routes } from '@/router/index.js'
import { NatureConfig } from '@/config/menu.config.js'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      // 当前一级菜单
      activeIndex: '/Nature',
      // 一级菜单列表
      menuList: [],
      // 当前二级菜单
      subAcitveIndex: '',
      // 二级菜单列表
      submenuData: NatureConfig
    }
  },
  created() {
    this.init()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(to)
      vm.setSubMenu(to)
    })
  },
  beforeRouteUpdate(to) {
    this.setSubMenu(to)
  },
  methods: {
    // 初始化
    init() {
      this.menuList = routes
        .find(i => i.path != '/')
        .children.map(i => {
          delete i.children
          return i
        })
    },
    // 激活一级菜单
    toggleMenu() {},
    // 激活二级菜单
    toggleSubMenu(item) {
      console.log(item)
    },
    // 设置二级菜单
    setSubMenu(m) {
      const { matched } = m ? m : this.currentRoute
      // 确定一级菜单和二级菜单
      this.activeIndex = matched[0].path
      this.toggleNav(matched[0].path)
      // 二级菜单高亮
      if (matched[1]) {
        const { path } = matched[1]
        let newPath = path.slice(-1) === '/' ? path.slice(0, path.length - 1) : path
        this.subAcitveIndex = this.submenuData.findIndex(i => i.href === newPath)
      }
    },
    // 切换二级菜单列表
    toggleNav(index) {
      this.subAcitveIndex = null
      switch (index) {
        case 'Nature':
          this.submenuData = NatureConfig
          break
        default:
          break
      }
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
</style>
