<template>
  <div class="active">
    <el-card v-for="(item, index) in dataList" :key="index">
      <template #header>
        <div>
          {{ item.prize.name }}
        </div>
      </template>
      <div v-for="(i, j) in item.required" :key="j">{{ i.name }} {{ i.num }}</div>
      <template #footer>
        测试
      </template>
    </el-card>
  </div>
</template>

<script>
import exchange from '@/data/exchange'
export default {
  name: 'Active',
  data() {
    return {
      dataList: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.dataList = exchange
    }
  }
}
</script>

<style lang="stylus" scoped>
.active
  display flex
  flex-wrap wrap
  justify-content space-around
  .el-card
    min-width 180px
    margin 10px
</style>
