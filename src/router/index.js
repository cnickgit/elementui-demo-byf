import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Tx from '@/components/Tx'
import Tes from '@/components/Tes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主要菜单',
      component: Home,
      iconCls: 'el-icon-platform-eleme',
      children: [
        { path: '/Tx', component: Tes, name: '新增token' },
        { path: '/Tes', component: Tx, name: 'token列表' }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      leaf: true,//只有一个节点
      component: Home,
      iconCls: 'el-icon-s-home',
      children: [
        { path: '/HelloWorld', component: HelloWorld, name: '单独的' },
      ]
    },
    {
      path: '*',
      redirect: '/HelloWorld',
      hidden:true //控制是否在左边菜单栏目展示
    },
  ]
})
