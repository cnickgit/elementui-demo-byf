<template>
  <div class="Tx-div">
    <el-table :data="tableData" stripe class="table-size">
      <!--        <el-table-column prop="id" label="id" width="auto">-->
      <!--        </el-table-column>-->
      <el-table-column prop="account" label="账号" width="auto">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="auto">
      </el-table-column>
      <el-table-column prop="maxTimes" label="上限" width="auto">
      </el-table-column>
      <el-table-column prop="leaveNum" label="剩余次数" width="auto">
      </el-table-column>
      <el-table-column prop="useStatus" label="使用状态" width="auto">
        <template slot-scope="scope">
          {{scope.row.useStatus == '0' ? '待使用' : (scope.row.useStatus == '1' ? '已使用' : '停用')}}
        </template>
      </el-table-column>
      <el-table-column prop="queryNum" label="查询次数" width="auto">
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
        name: "ZyjUser40001",
        data() {
            return {
                tableData: [],
                port: '40001'
            }
        },
        created() {
            this.getZyjUser();
        },
        methods: {
            getZyjUser() {
                this.$axios.get("/user/zyjUsersPort/" + this.port).then(res => {
                    console.log("res:", res)
                    this.tableData = res.data.data
                })
            }
        }
    }
</script>

<style scoped>

</style>
