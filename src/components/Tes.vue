<template>
    <div id="Tx2">
      <template>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </div>
</template>

<script>
  import Qs from 'qs'
  export default {
    name: 'Tx2',
    data(){
      return{
          options: [{
              value: '1',
              label: '1元 5次 24小时有效'
          }, {
              value: '2',
              label: '3元 30次 24小时有效'
          }, {
              value: '3',
              label: '5元 60次 24小时有效'
          }, {
              value: '4',
              label: '8元 50次 不限制时间'
          }, {
              value: '5',
              label: '25元 200次 不限制时间'
          }],
          value: ''
      }
    },
    methods: {

    },
    mounted(){

    }
  }

</script>

<style scoped>

</style>


