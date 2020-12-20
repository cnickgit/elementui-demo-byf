<template>
  <div id="Tx">
    <div class="Tx-div">
      <el-row>
        <el-button type="primary" @click="exportExcel">导出</el-button>
      </el-row>
      <el-table :data="tableData" stripe class="table-size">
<!--        <el-table-column prop="id" label="id" width="auto">-->
<!--        </el-table-column>-->
        <el-table-column prop="code" label="激活码" width="auto">
        </el-table-column>
        <el-table-column prop="money" label="金钱" width="auto">
        </el-table-column>
        <el-table-column prop="prescription" label="次数" width="auto">
        </el-table-column>
        <el-table-column prop="typeRemarks" label="说明" width="auto">
        </el-table-column>
        <el-table-column prop="exportStatus" label="导出状态" width="auto">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="primary" @click="enableZyj(scope.row.code)">启用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tx',
    data() {
      return {
        num: 100,
        enableType: 0,
        tableData: []
      }
    },
    methods: {
      exportExcel(){
        this.$axios({
          url:"/exportExcelAll?num="+this.num,
          method:'get',
          responseType: 'blob',
        }).then((res) => {
          let fileName = '激活码'

          const link = document.createElement('a')

          let blob = new Blob([res], { type: 'application/octer-stream' });

          link.style.display = 'none'

          link.href = URL.createObjectURL(blob);

          link.setAttribute('download', fileName + '.xlsx');

          document.body.appendChild(link);

          link.click();

          document.body.removeChild(link);
        })
      },
      enableZyj(code){
        this.$axios.get("/enableToken?code="+code).then((res) => {
          this.$message(res.data.data)
          this.getData();
        })
      },
      getData(){
        this.$axios.get("/tokens?enableType="+this.enableType).then((res) => {
          this.tableData = res.data.data;
        })
      }
    },
      created() {
       this.getData();
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
