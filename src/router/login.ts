const Login = () => import('@/pages/login/index.vue');

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: '开源数据可视化-登录页'
		}
	}
];

export default routes;
