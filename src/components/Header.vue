<template>
    
    <el-header>
      <el-button v-show="showBack" @click="goBack">返回</el-button>
      {{title}}
    </el-header>
</template>
<script>
  export default{
    name:'Header',
    props:{
      title:{
        type:String,
        required: false,
        default:'霸气江湖'
      },
      showBack:{
        type:Boolean,
        required: false,
        default:false
      }
    },
    data(){
      return{

      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>
