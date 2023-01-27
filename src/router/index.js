import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'
import Home from '../components/home'
import Welcome from '../components/welcome'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		redirect: '/welcome',
		children:[
			{
				path: '/welcome',
				component: Welcome
			},
			{
				path: '/users',
				component: () => import('../components/users/user')
			},
			{
				path: '/rights',
				component: () => import('../components/power/Rights')
			},
			{
				path: '/roles',
				component: () => import('../components/power/Roles')
			},
			{
				path: '/categories',
				component: () => import('../components/goods/Cate')
			},
			{
				path: '/params',
				component: () => import('../components/goods/Params')
			},
			{
				path: '/goods',
				component: () => import('../components/goods/List')
			},
			{
				path: '/goods/add',
				component: () => import('../components/goods/Add')
			},
			{
				path: '/orders',
				component: () => import('../components/order/Orders')
			},
			{
				path: '/reports',
				component: () => import('../components/report/Report')
			}
		]
	}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	if (to.path === '/login') return next();
	const tokenStr = window.sessionStorage.getItem('token')
	if (!tokenStr) next('/login')
	next()
})
// 1.27

export default router
