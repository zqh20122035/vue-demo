<template>
  <div class="component-navbar">
			<div class="wrapper"  ref="wrapper">
				<img src="../../static/image/componentBg.png" class="response">
				<ul class="content">
					<router-link to="/" tag="li" class="nav-li" :class="'bg-'+item.color"
					 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
						<p class="nav-title">{{item.title}}</p>
						<p class="nav-name">{{item.name}}</p>
						<span :class="['uni-text','cuIcon-'+item.cuIcon]"></span>
					</router-link>
				</ul>
			</div>
  </div>
</template>

<script>
export default {
  name: 'componentNavbar',
  data () {
    return {
      elements: [{
					title: '操作条',
					name: 'bar',
					color: 'purple',
					cuIcon: 'vipcard'
				},
				{
					title: '导航栏 ',
					name: 'nav',
					color: 'mauve',
					cuIcon: 'formfill'
				},
				{
					title: '列表',
					name: 'list',
					color: 'pink',
					cuIcon: 'list'
				},
				{
					title: '卡片',
					name: 'card',
					color: 'brown',
					cuIcon: 'newsfill'
				},
				{
					title: '表单',
					name: 'form',
					color: 'red',
					cuIcon: 'formfill'
				},
				{
					title: '时间轴',
					name: 'timeline',
					color: 'orange',
					cuIcon: 'timefill'
				},
				{
					title: '聊天',
					name: 'chat',
					color: 'green',
					cuIcon: 'messagefill'
				},
				{
					title: '轮播',
					name: 'swiper',
					color: 'olive',
					cuIcon: 'album'
				},
				{
					title: '模态框',
					name: 'modal',
					color: 'grey',
					cuIcon: 'squarecheckfill'
				},
				{
					title: '步骤条',
					name: 'steps',
					color: 'cyan',
					cuIcon: 'roundcheckfill'
				}
			],
    }
  }
}
</script>
<style scoped>
	@import "../../static/css/list.css";
	.component-navbar{
		margin-bottom: 1.2rem;
	}
	.response{
		width:100%;
		height:auto;
	}
</style>
