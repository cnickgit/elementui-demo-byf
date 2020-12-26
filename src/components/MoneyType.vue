<template>
    <div>
      <el-table :data="tableData" stripe class="table-size">
        <el-table-column prop="money" label="金币" width="auto">
        </el-table-column>
        <el-table-column prop="queryNum" label="查询次数" width="auto">
        </el-table-column>
        <el-table-column prop="timeType" label="时间类型" width="auto">
          <template slot-scope="scope">
            {{scope.row.timeType == '1' ? '24小时有效' : '不限时间'}}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="修改token" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="金币" :label-width="formLabelWidth">
            <el-input v-model="form.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="查询次数" :label-width="formLabelWidth">
            <el-input v-model="form.queryNum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="时间类型" :label-width="formLabelWidth">
            <el-select v-model="form.timeType" placeholder="请选择活动区域">
              <el-option label="24小时有效" value="1"></el-option>
              <el-option label="不限时间" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateType">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "MoneyType",
        data(){
          return {
            tableData: [],
            form: {
              money: 0,
              queryNum: 0,
              timeType: '',
            },
            dialogTableVisible: false,
            dialogFormVisible: false,
            formLabelWidth: '120px'
          }
        },
        created() {
          this.getMoneyTypes();
        },
        methods: {
          updateType(){
            this.$axios.post("/addMoneyType",this.form).then(res => {
              console.log("res:",res)
              if(res.data.code == 200){
                this.$message(res.data.data);
                this.dialogFormVisible = false;
                this.getMoneyTypes();
              }
            })
          },
          edit(id){
            this.$axios.get("/moneyType/"+id).then(res => {
              console.log("res:",res);
              if(res.data.code == 200){
                this.form = res.data.data;
              }
            })
            this.dialogFormVisible = true;

          },
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
