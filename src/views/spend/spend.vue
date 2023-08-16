<!--
 * @Author: tanshaobo
 * @Date: 2023-08-16 16:13:49
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-16 16:22:54
 * @Description: file content
 * @FilePath: \spark-readerd:\workspace\self\quack\src\views\spend\spend.vue
-->
<template>
  <div class="Spend">
    <el-container>
      <el-header>霸气江湖元宝消耗</el-header>
      <el-container>
        <el-main>
          <el-card v-for="(item, index) in originList" :key="index">
            <div slot="header">
              <span>{{ item.prize.name }}*{{ item.prize.num }}</span>
            </div>
            <p>
              <span v-for="(i, j) in item.required" :key="j"> {{ i.name }}*{{ i.num }} </span>
            </p>
            <p>
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-minus"
                @click="addToCart(item, 0)"
              ></el-button>
              {{ item.times }}
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-plus"
                @click="addToCart(item, 1)"
              ></el-button>
            </p>
          </el-card>
        </el-main>
        <el-aside></el-aside>
      </el-container>
      <el-footer>
        总消耗:<span>{{ Sum.y }}龙元</span>
        <span>{{ Sum.p }}龙魄</span>
        <span>{{ Sum.m }}元宝</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Dragon from '@/data/dragon.js'
export default {
  name: 'Spend',
  data() {
    return {
      originList: Dragon,
      shopList: [{ name: '龙元', num: 1, limit: 3, req: [{ name: '元宝', num: 999 }] }],
      single: { m: 0, h: 0, p: 0 },
      Sum: { m: 0, h: 0, p: 0 }
    }
  },
  created() {
    console.log(Dragon)
  },
  methods: {
    handleChange(v) {
      console.log(v,1)
    },
    addToCart() {}
  }
}
</script>

<style lang="stylus" scoped>
.Spend
  .el-header
    box-shadow 0 0 4px 0 rgba(221,221,221,.8)
  .el-aside
    box-shadow 2px 2px 2px 0 rgba(102,102,102,.5)
    .el-scrollbar__wrap
      overflow-x hidden
  .el-main
    .el-card
      width 300px
      display inline-block
</style>
