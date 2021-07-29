<template>
  <div class="attr">
    <el-card v-for="(item, index) in natureList" :key="index">
      <el-button type="primary" icon="el-icon-minus" @click="Minus(item)"></el-button>
      <el-input style="width:60px" v-model="item.level"></el-input>级
      <el-button type="primary" icon="el-icon-plus" @click="Plus(item)"></el-button>
      {{ item.name }}的{{ item.type }}是{{ item.attr }}
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Attr',
  data() {
    return {
      natureList: [
        {
          id: '34246',
          name: '玲珑珍命',
          attr: '1440',
          character: 4,
          type: '生命',
          level: 1
        },
        {
          id: '35112',
          name: '百步穿杨',
          attr: '4%',
          character: 4,
          type: '命中',
          level: 1,
          step: 4
        }
      ]
    }
  },
  methods: {
    Plus(o) {
      console.log(o)
      let tempObj = this.$utils.deepCopy(o)
      tempObj.attr =
        tempObj.attr.indexOf('%') > -1
          ? parseInt(tempObj.attr.slice(0, -1))
          : parseInt(tempObj.attr)
      console.log(tempObj)
      tempObj.level++
      tempObj.attr += tempObj.step
    },
    Minus(o) {
      console.log(o)
    }
  }
}
</script>
<style lang="stylus" scoped></style>
