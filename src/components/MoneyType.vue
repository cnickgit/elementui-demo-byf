<template>
    <div>
      <el-table :data="tableData" stripe class="table-size">
        <el-table-column prop="money" label="金币" width="auto">
        </el-table-column>
        <el-table-column prop="queryNum" label="查询次数" width="auto">
        </el-table-column>
        <el-table-column prop="timeType" label="时间类型" width="auto">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "MoneyType",
        data(){
          return {
            tableData: []
          }
        },
        created() {
          this.getMoneyTypes();
        },
        methods: {
          getMoneyTypes(){
            this.$axios.get("/moneyTypes").then(res => {
              if(res.data.code == 200){
                this.tableData = res.data.data;
              }

            })
          }
        }
    }
</script>

<style scoped>

</style>
