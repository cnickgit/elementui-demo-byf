<template>
  <div id="Tx">
    <div class="Tx-div">
      <el-table :data="tableData" stripe class="table-size">
        <el-table-column prop="code" label="激活码" width="auto">
        </el-table-column>
        <el-table-column prop="money" label="金钱" width="auto">
        </el-table-column>
        <el-table-column prop="endTime" label="过期时间" width="auto">
        </el-table-column>
        <el-table-column prop="remainingTimes" label="剩余次数" width="auto">
        </el-table-column>
        <el-table-column prop="prescription" label="次数" width="auto">
        </el-table-column>
        <el-table-column prop="typeRemarks" label="说明" width="auto">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Enable',
        data() {
            return {
                enableType: 1,
                tableData: []
            }
        },
        methods: {
        },
        created() {
            this.$axios.get("/tokens?enableType="+this.enableType).then((res) => {
                this.tableData = res.data.data;
            })
        }
    }

</script>

<style scoped lang="scss">
  .Tx{
    width: 100%;
    // display: flex;
    margin: 0;
    padding: 0;
    height: auto;
  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .Tx-div{
    width: 98%;
  }
  @media screen and (max-width: 1000px) {
    .Tx-div{
      overflow: hidden;
    }
    .table-size{
      font-size: 12px;
    }
  }
</style>
