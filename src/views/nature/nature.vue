<template>
  <div class="nature">
    <el-container>
      <el-header>
        <h2>卦石</h2>
        <el-button size="medium" type="primary" @click="goback">返回</el-button>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            router
            :default-active="activePath"
            class="el-menu-vertical-demo"
            @select="handleSelect"
          >
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.path">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'nature',
  data() {
    return {
      menuList: [
        { id: 1, name: 'class', title: '卦石分类', path: '/Nature/Class' },
        { id: 2, name: 'attr', title: '卦石属性', path: '/Nature/Attr' },
        { id: 3, name: 'cost', title: '进化费用', path: '/Nature/Computed' }
      ],
      activePath: '/Nature/Class'
    }
  },
  components: {},
  methods: {
    goback() {
      this.$router.push('/')
    },
    handleSelect(index) {
      console.log(index)
    }
  }
}
</script>

<style lang="stylus">
.nature
  .el-header
    height 60px
    line-height 60px
    position relative
    h2
      margin 0
    .el-button
      position absolute
      left 12%
      top 15px
  .el-main
    text-align left
</style>
