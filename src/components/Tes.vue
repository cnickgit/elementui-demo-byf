<template>
    <div id="Tx2">
      <el-form ref="form" :model="form" label-width="80px">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.remarks"
            :value="item.id">
          </el-option>
        </el-select>
        <el-form-item label="生成次数">
          <el-input  v-model="num"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import Qs from 'qs'
  export default {
    name: 'Tx2',
    data(){
      return{
          form: {},
          value: '',
          options: [],
          num: 100
      }
    },
    methods: {
        submit(){
            this.$axios.get("/addToken?typeId="+this.value+"&num="+this.num).then(res => {
              console.log("res.data:",res.data)
                this.$message(res.data.data);
            })
        },
        getMoneyTypes(){
          this.$axios.get("/moneyTypes").then(res => {
            if(res.data.code == 200){
              this.options = res.data.data;
            }

          })
        }
    },
    mounted(){
        this.getMoneyTypes();
    }
  }

</script>

<style scoped>

</style>


