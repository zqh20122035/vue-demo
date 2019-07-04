<template>
    <div class="basic">
		<div class="wrapper"  ref="wrapper">
			<img src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png" class="response">
			<ul class="content">
				<router-link :to="{name:item.name}" tag="li" class="nav-li" :class="'bg-'+item.color"
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
import Bscroll from 'better-scroll'
export default {
  name: 'basic',
  data () {
    return {
      elements: [{
					title: '布局',
					name: 'layout',
					color: 'cyan',
					cuIcon: 'newsfill'
				},
				{
					title: '背景',
					name: 'background',
					color: 'blue',
					cuIcon: 'colorlens'
				},
				{
					title: '文本',
					name: 'text',
					color: 'purple',
					cuIcon: 'font'
				},
				{
					title: '图标 ',
					name: 'icon',
					color: 'mauve',
					cuIcon: 'cuIcon'
				},
				{
					title: '按钮',
					name: 'button',
					color: 'pink',
					cuIcon: 'btn'
				},
				{
					title: '标签',
					name: 'tag',
					color: 'brown',
					cuIcon: 'tagfill'
				},
				{
					title: '头像',
					name: 'avatar',
					color: 'red',
					cuIcon: 'myfill'
				},
				{
					title: '进度条',
					name: 'progress',
					color: 'orange',
					cuIcon: 'icloading'
				},
				{
					title: '边框阴影',
					name: 'shadow',
					color: 'olive',
					cuIcon: 'copy'
				},
				{
					title: '加载',
					name: 'loading',
					color: 'green',
					cuIcon: 'loading2'
				},
			],
    }
  },
	mounted(){
		// this.scroll = new Bscroll(this.$refs.wrapper,{
		// 	scrollY: true,
		// 	click: true,
		// 	bounce: false,
		// 	scrollbar: true,
		// 	preventDefault: false,
		// 	tap: true,
		// 	mouseWheel: true
		// });
	}
}
</script>
<style scoped>
	@import "../../static/css/list.css";
	.basic{
		margin-bottom: 1.2rem;
	}
	.response{
		width:100%;
		height:auto;
	}
</style>
