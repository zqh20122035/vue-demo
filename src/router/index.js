import Vue from 'vue'
import Router from 'vue-router'
import Basic from '@/components/Basic'
import Component from '@/components/Component'
import Plugin from '@/components/Plugin'

//Basic的子目录页面
import Icon from '@/components/basics/Icon'
import Background from '@/components/basics/Background'
import Avatar from '@/components/basics/Avatar'
import Button from '@/components/basics/Button'
import Layout from '@/components/basics/Layout'
import Loading from '@/components/basics/Loading'
import Progress from '@/components/basics/Progress'
import Shadow from '@/components/basics/Shadow'
import Tag from '@/components/basics/Tag'
import Text from '@/components/basics/Text'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {	path: '/',name: 'Basic',component: Basic,redirect:'/basic',children:[
			  { path: 'basic',name: 'Basic',component: Basic }
			]
		},
		{ path: '/basic/icon',name: 'icon',component: Icon },
		{ path: '/basic/background',name: 'background',component: Background },
		{ path: '/basic/avatar',name: 'avatar',component: Avatar },
		{ path: '/basic/button',name: 'button',component: Button },
		{ path: '/basic/layout',name: 'layout',component: Layout },
		{ path: '/basic/loading',name: 'loading',component: Loading },
		{ path: '/basic/progress',name: 'progress',component: Progress },
		{ path: '/basic/shadow',name: 'shadow',component: Shadow },
		{ path: '/basic/tag',name: 'tag',component: Tag },
		{ path: '/basic/text',name: 'text',component: Text },
		{	path: '/component',name: 'Component',component: Component },
		{	path: '/plugin',name: 'Plugin',component: Plugin },
		{path:'*',redirect:'/'}
  ]
})
