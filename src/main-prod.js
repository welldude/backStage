import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

import './assets/fonts/iconfont.css'
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'
import VueQuillEditor from 'vue-quill-editor'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {TimelineItem, Timeline,Upload,Checkbox,CheckboxGroup,Step,Steps,TabPane,Tabs,Alert,Cascader,Option,Select,Tree,Tag,MessageBox,Dialog,Pagination, Tooltip, Switch, TableColumn, Row, Col, Card, Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu, Submenu,  MenuItem, Breadcrumb, BreadcrumbItem, Table } from 'element-ui'
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
axios.interceptors.request.use(config => {
	NProgress.start()
	config.headers.Authorization = window.sessionStorage.getItem('token')
	return config
})
axios.interceptors.response.use(config => {
	NProgress.done()
	return config
})
Vue.config.productionTip = false
// axios方法挂载到全局
Vue.prototype.$http = axios
// 能否简写优化？
const plugins = {TimelineItem,Timeline,VueQuillEditor,Upload,Checkbox,CheckboxGroup,Step,Steps,TabPane,Tabs,Alert,Cascader,Option,Select,Tree,Tag,Dialog, Pagination, Tooltip, Switch, TableColumn, Row, Col, Card, Button, Form, FormItem, Input, Container, Header, Aside, Main, Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, Table }
Object.values(plugins).forEach(item => {
	Vue.use(item)
})
// 全局注册TreeTable组件
Vue.component('tree-table', TreeTable)

// 时间转化器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
