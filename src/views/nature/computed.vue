<template>
  <div class="computed">
    <h3>Tips:经验石与银两兑换比例为1：500</h3>
    <section>
      <el-card v-for="(item, index) in dataList" :key="index" :header="item.title" :style="{backgroundColor : item.bg}">
        <el-table :data="item.data" border :style="{backgroundColor : item.bg}" stripe>
          <el-table-column label="级别" width="40">
          <template slot-scope="scope">
            <span>{{scope.row.level}}</span>
          </template>
        </el-table-column>
        <el-table-column label="升至下级需要经验石">
          <template slot-scope="scope">
            <span>{{scope.row.next|numberLevel}}</span>
          </template>
        </el-table-column>
        <el-table-column label="升至本级总计经验石">
          <template slot-scope="scope">
            <span>{{scope.row.currentAll|numberLevel}}</span>
          </template>
        </el-table-column>
        <el-table-column label="所需银两">
          <template slot-scope="scope">
            <span>{{scope.row.cost|numberLevel}}</span>
          </template>
        </el-table-column>
        </el-table>
      </el-card>
    </section>

  </div>
</template>
<script>
  export default{
    name:'Computed',
    data(){
      return{
        dataList:[
          {title:'橙色',bg:'rgba(255,166,49,.2)',step:960,data:[]},
          {title:'紫色',bg:'rgba(148,0,211,.2)',step:480,data:[]},
          {title:'蓝色',bg:'rgba(30,144,255,.2)',step:240,data:[]},
          {title:'绿色',bg:'rgba(34,139,34,.2)',step:120,data:[]},
          {title:'白色',bg:'rgba(192,192,192,.2)',step:60,data:[]}
        ]
      }
    },
    created() {
      this.init()
    },
    methods:{
      init(){
        this.dataList = this.dataList.map(i => {
          i.data = this.creatData(i.step,20)
          return i
        })
      },
      creatData(a,n){
        let tempArr = []
        for(let i = 0; i < n; i ++){
          let obj = {}
          obj['level'] = i + 1
          obj['next'] = a * Math.pow(2, i)
          obj['currentAll'] = a * (Math.pow(2, i) - 1)
          obj['cost'] = obj.currentAll * 500
          tempArr.push(obj)
        }
        return tempArr
      }
    }
  }
</script>

<style scoped lang="stylus">
h3
  margin-top 0
section
  display flex
  justift-content space-around
  .el-card
    min-width: 420px
    >>> .el-card__header,
    >>> .el-card__body
      padding 8px 4px
.el-table >>> th,
.el-table >>> td
  padding 8px 0
  background-color transparent
.el-table >>> tr
  background-color transparent
</style>
