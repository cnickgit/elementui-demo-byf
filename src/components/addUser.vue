<template>
<div>
  <el-form ref="user" :model="user" label-width="80px">
    <el-form-item label="账号">
      <el-input label-width="80px" v-model="user.account"></el-input>
    </el-form-item>
    <el-form-item label-width="80px" label="密码">
      <el-input v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    export default {
        name: "addUser",
        data(){
          return {
            user: {
              account: '',
              password: ''
            }
          }
        },
      methods: {
        submit(){
          this.$axios.post("/user/add",this.user).then(res => {
            console.log("res",res);
            if(res.data.code === 200){
              this.$message(res.data.data);
            }else{
              this.$message('添加失败');
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
