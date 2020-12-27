<template>
  <div id="Tx">
    <el-row>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.remarks"
          :value="item.id">
        </el-option>
      </el-select>
      <el-button type="primary" @click="exportExcel">导出</el-button>
    </el-row>
    <div class="Tx-div">
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
          <template slot-scope="scope">
            {{scope.row.exportStatus == '0' ? '未导出' : '已导出'}}
          </template>
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
        value: '',
        options: [],
        timeType: '',
        num: 100,
        enableType: 0,
        tableData: []
      }
    },
    methods: {
        exportExcel(){
            this.$axios.get("/exportExcelAll?typeId="+this.value).then((res) => {
                if(res.data.data != null){
                    let bytes = window.atob(res.data.data);
                    let uintArr = new Uint8Array(bytes.length);
                    let len = bytes.length;
                    while(len--) {
                        uintArr[len] = bytes.charCodeAt(len);
                    }
                    let file = new Blob([uintArr], {type: 'mine'});
                    const download = document.createElement("a");
                    download.href = URL.createObjectURL(file);
                    download.download = "激活码.xls";
                    document.body.appendChild(download);
                    download.click();
                    document.body.removeChild(download);
                    this.getData();
                }else{
                    this.$message({
                        type: 'error',
                        message: '导出激活码数据为空'
                    })
                }
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
      },
      getMoneyTypes(){
        this.$axios.get("/moneyTypes").then(res => {
             if(res.data.code == 200){
                  this.options = res.data.data;
             }

          })
      }
    },
      created() {
       this.getData();
       this.getMoneyTypes();
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
