import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Tx from '@/components/Tx'
import Tes from '@/components/Tes'
import Enable from '@/components/Enable'
import Expired from '@/components/Expired'
import AddUser from '@/components/addUser'
import ZyjUser from '@/components/ZyjUser'
import AddMoneyType from '@/components/AddMoneyType'
import MoneyType from '@/components/MoneyType'

Vue.use(Router)

export default new Router({
  base: '/backstorge/',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: '主要菜单',
      component: Home,
      iconCls: 'el-icon-platform-eleme',
      children: [
        { path: '/AddMoneyType', component: AddMoneyType, name: '新增金额类型' },
        { path: '/MoneyType', component: MoneyType, name: '金币类型' },
        { path: '/Tx', component: Tes, name: '新增token' },
        { path: '/AddUser', component: AddUser, name: '新增用户' },
        { path: '/ZyjUser', component: ZyjUser, name: '照妖镜用户' },
        { path: '/Tes', component: Tx, name: '未启用token列表' },
        { path: '/Enable', component: Enable, name: '已启用token列表' },
        { path: '/Expired', component: Expired, name: '已过期token列表' },
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
