<template>
  <div class="Tx-div">
    <el-table :data="tableData" stripe class="table-size">
      <!--        <el-table-column prop="id" label="id" width="auto">-->
      <!--        </el-table-column>-->
      <el-table-column prop="account" label="账号" width="auto">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="auto">
      </el-table-column>
      <el-table-column prop="obj.userDayHasQueryNum" label="今日已查" width="auto">
      </el-table-column>
      <el-table-column prop="obj.userDayHasQueryNumYes" label="昨日已查" width="auto">
      </el-table-column>
      <el-table-column prop="obj.qinf" label="描述" width="auto">
      </el-table-column>
<!--      <el-table-column-->
<!--        fixed="right"-->
<!--        label="操作"-->
<!--        width="100">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="primary" @click="enableZyj(scope.row.code)">启用</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "ZyjUser",
        data(){
          return {
            tableData: []
          }
        },
      created() {
          this.getZyjUser();
      },
      methods: {
          getZyjUser(){
            this.$axios.get("/myRecord").then(res => {
              console.log("res:",res)
                this.tableData =res.data.data
            })
          }
        }
    }
</script>

<style scoped>

</style>
