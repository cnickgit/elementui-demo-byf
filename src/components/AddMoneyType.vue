<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="金额">
        <el-input v-model="form.money"></el-input>
      </el-form-item>
      <el-form-item label="查询次数">
        <el-input v-model="form.queryNum"></el-input>
      </el-form-item>
      <el-form-item label="时间类型">
        <el-select v-model="form.timeType" placeholder="请选择时间类型">
          <el-option label="24小时有效" value="1"></el-option>
          <el-option label="不限时间" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
    export default {
        name: "AddMoneyType",
      data() {
        return {
          form: {
            name: '',
            queryNum: 0,
            timeType: '',
          }
        }
      },
      methods: {
        onSubmit() {
          this.$axios.post("/addMoneyType",this.form).then(res => {
              if(res.data.code == 200){
                this.$message(res.data.data)
              }
          })
        }
      }
    }
</script>

<style scoped>

</style>
