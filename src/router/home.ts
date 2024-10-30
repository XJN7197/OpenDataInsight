const Home = () => import('@/pages/home/index.vue');

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: '开源数据可视化-主页'
		}
	}
];

export default routes;
