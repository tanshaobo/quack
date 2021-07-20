<template>
  <div class="nature-class">
    <el-card class="box-card" v-for="(item,index) in natureList" :key="index">
      <div slot="header" class="clearfix">
        <span>{{item.color}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-table :data="item.children">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="属性" prop="attr"></el-table-column>
      </el-table>
    </el-card>

  </div>

</template>
<script>
  export default{
    name:'NatureClass',
    data(){
      return{
        natureList:[
          {level:'5',color:'橙色'},
          {
            level:'4',
            color:'紫色',
            children:[
              {
                "id":"34246",
                "name":"玲珑珍命",
                "attr":"1440",
                "character":4,
                "type":"生命"
              },
              {
                "id":"35112",
                "name":"百步穿杨",
                "attr":"4%",
                "character":4,
                "type":"命中"
              }
            ]
        },
          {level:'1',color:'白色'},
          {level:'2',color:'绿色'},
          {level:'3',color:'蓝色'}
        ]
      }
    }
  }
</script>
<style lang='stylus'>
.nature-class
  columns 300px 5
  .box-card
    display inline-block
</style>
