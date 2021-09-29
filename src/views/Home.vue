<template>
  <div class="home">
    <el-container>
      <TsHeader @getMenuRouter="getMenuRouter" ref="TsHeader" />
      <TsSubMenu :submenuData="submenuData" ref="TsSubMenu" />
      <el-main>
        <el-scrollbar :style="mainSize">
          <router-view key="Attr" />
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TsHeader from '@/components/layout/TsHeader.vue'
import TsSubMenu from '@/components/layout/TsSubMenu.vue'
import { routes } from '@/router/index.js'
import subMenuConfig from '@/config/menu.config.js'
export default {
  name: 'Home',
  components: {
    TsHeader,
    TsSubMenu
  },
  data() {
    return {
      // 当前一级菜单
      activeIndex: '/Nature',
      // 当前二级菜单
      subAcitveIndex: '',
      // 二级菜单列表
      submenuData: [],
      mainSize: {
        width: `0px`,
        height: `0px`
      }
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.$nextTick(() => {
      const screenHeight = document.body.clientHeight
      const screenWidth = document.body.clientWidth
      const TsHeaderHeight = this.$refs.TsHeader.$el.clientHeight
      const TsSubMenuHeight = this.$refs.TsSubMenu.$el.clientHeight
      this.mainSize = {
        width: `${screenWidth - 40}px`,
        height: `${screenHeight - TsHeaderHeight - TsSubMenuHeight - 40}px`
      }
    })
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     // vm.setSubMenu(to)
  //   })
  // },
  beforeRouteUpdate(to) {
    console.dir(to, 'beforeRouteUpdate')
    // this.setSubMenu(to)
  },
  methods: {
    // 初始化
    init() {
      this.menuList = routes.filter(i => i.path != '/')
    },
    // 获取一级菜单
    getMenuRouter(k) {
      console.log(k)
      this.activeIndex = k
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
<style lang="stylus" scoped>
.home
  width 100%
  background-image: linear-gradient( 44.8deg,  rgba(255,136,102,0.67) -53.1%, rgba(255,221,136,0.28) 49% );
  .el-container
    flex-direction column
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
  .el-scrollbar
    height calc(100vh - 150px)
    width calc(100vw - 40px)
    /deep/ .el-scrollbar__wrap
      overflow-x hidden
      overflow-y scroll
</style>
