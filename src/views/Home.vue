<template>
  <div class="home">
    <el-container>
      <el-header>
        <h2>霸气江湖</h2>
      </el-header>
      <el-main>
        <el-button type="primary" size="medium" @click="goNature">卦石</el-button>
        <el-button type="primary" size="medium" @click="goSpend">元宝花费</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data(){
    return {

    }
  },
  methods:{
    goSpend(){
      this.$router.push({
        name:'Spend'
      })
    },
    goNature(){
      this.$router.push({
        name:'Nature'
      })
    }
  }
}
</script>
<style lang="stylus">
  .home
    width 100%
</style>
