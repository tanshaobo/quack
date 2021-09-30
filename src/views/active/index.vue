<template>
  <div class="activity">
    <el-scrollbar>
      <main>
        <el-card v-for="(item, index) in dataList" :key="index">
          <template #header>
            <div>
              {{ item.prize.name }}
            </div>
          </template>
          <div class="card__main">
            <div v-for="i in item.coin" :key="i.id" class="card__item">
              <span>
                {{ i.name }}
              </span>
              <span>
                {{ i.num }}
              </span>
              <span>
                {{ i.sum }}
              </span>
            </div>
            <div class="form-box">
              <el-input
                v-model="item.currentNum"
                size="small"
                @input="changeNum(index, 'input', $event)"
              >
                <el-button
                  slot="prepend"
                  size="small"
                  type="plain"
                  @click="changeNum(index, 'minus')"
                  @dblclick.native="changeNum(index, 'minus', 0)"
                >
                  -
                </el-button>
                <el-button
                  slot="append"
                  size="small"
                  type="plain"
                  @click="changeNum(index, 'sum')"
                  @dblclick.native="changeNum(index, 'sum', item.times)"
                >
                  +
                </el-button>
              </el-input>
            </div>
          </div>
        </el-card>
      </main>
    </el-scrollbar>

    <footer>
      <label>总计：</label>
      <dl>
        <dd v-for="item in sum" :key="item.id">
          <span>{{ item.name }}</span>
          <span>{{ item.num }}</span>
        </dd>
      </dl>
    </footer>
  </div>
</template>

<script>
import exchange from '@/data/exchange'
export default {
  name: 'Active',
  data() {
    return {
      dataList: [],
      sum: {
        ly: { name: '龙元', id: 'ly', num: 0 },
        lp: { name: '龙魄', id: 'lp', num: 0 },
        yb: { name: '元宝', id: 'yb', num: 0 }
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.dataList = exchange.map(item => {
        item.currentNum = 0
        item.coin = {}
        item.required.forEach(i => {
          i.sum = 0
          item.coin[i.id] = i
        })
        return item
      })
    },
    // 获取每项变更
    changeNum(index, key, number) {
      switch (key) {
        case 'sum':
          if (this.dataList[index].currentNum == this.dataList[index].times || number) {
            this.dataList[index].currentNum = this.dataList[index].times
          } else {
            this.dataList[index].currentNum += 1
          }
          break
        case 'minus':
          if (this.dataList[index].currentNum == 0 || number != undefined) {
            this.dataList[index].currentNum = 0
          } else {
            this.dataList[index].currentNum -= 1
          }
          break
        default:
          if (Number(number) > this.dataList[index].times) {
            this.dataList[index].currentNum = this.dataList[index].times
          } else if (Number(number) < 0) {
            this.dataList[index].currentNum = 0
          } else {
            this.dataList[index].currentNum = Number(number)
          }
          break
      }
      this.getSingleSum(index)
      this.getAllSum()
    },
    // 计算单项花费
    getSingleSum(index) {
      for (let i in this.dataList[index].coin) {
        this.dataList[index].coin[i].sum =
          this.dataList[index].coin[i].num * this.dataList[index].currentNum
      }
    },
    // 计算总花费
    getAllSum() {
      for (let key in this.sum) {
        this.sum[key].num = this.dataList.reduce(
          (i, item) => (item.coin[key] ? i + item.coin[key].sum : i),
          0
        )
      }
    },
    change(v, s) {
      console.log(v, s)
    }
  }
}
</script>

<style lang="stylus" scoped>
.activity
  .el-scrollbar
    height: calc(100vh - 210px)
    main
      display flex
      flex-wrap wrap
      justify-content space-around
      .el-card
        min-width 140px
        margin 10px
        background-image: radial-gradient( circle 879px at 10.4% 22.3%,  rgba(255,235,238,1) 0%, rgba(186,190,245,1) 93.6% );
        >>> .el-card__header
          padding 10px
        >>> .el-card__body
          padding 10px
        .card__main
          .card__item
            display flex
            justify-content space-between
  footer
    display flex
    height 60px
    line-height 60px
    background-image: linear-gradient( 110.5deg,  rgba(248,196,249,0.66) 22.8%, rgba(253,122,4,0.15) 64.6% );
    label
      flex-grow 1
    dl
      flex-grow 3
      display flex
      margin 0
      dd
        margin 0
        flex-grow 1
        display flex
        justify-content space-around
</style>
