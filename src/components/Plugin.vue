<template>
  <div class="plugin">
    <div class="wrapper"  ref="wrapper">
			<div class="toptitle">
				<img src="../../static/image/cjkz.png" style="width:3.2rem;" />
			</div>
			<ul class="content">
				<router-link to="/" tag="li" class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+item.img+')'}]" v-for="(item,index) in list" :key="index">
					<p class="cardTitle">
						{{item.title}}
					</p>
				</router-link>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'plugin',
  data () {
    return {
      list: [{
						title: '索引列表',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../plugin/indexes'
					},
					{
						title: '微动画',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
						url: '../plugin/animation'
					},
					{
						title: '全屏抽屉',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
						url: '../plugin/drawer'
					},
					{
						title: '垂直导航',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url: '../plugin/verticalnav'
					}
				]
    }
  }
}
</script>
<style scoped>
	.plugin{
		margin-bottom: 1.3rem;
	}
	.toptitle{
		background-image:url(https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg);
		background-size: cover;
    background-position: center center;
    text-align: center;
    height: 1.4rem;
    padding: 0.3rem;
	}
	.content{
		display: block;
		padding: 0;
	}
	.cu-item{
		margin: 0.4rem;
    background-position: center;
    background-size: cover;
    border-radius: 0.18rem;
	}
	.cardTitle {
		color: #fff;
    padding: 1.2rem 1rem;
    font-size: 0.5rem;
    font-weight: 300;
    transform: skew(-10deg, 0deg);
    position: relative;
    text-shadow: 0 0 0.04rem rgba(0, 0, 0, 0.3);
    line-height: 0.8rem;
	}

	.cardTitle::before {
		content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.05rem;
    border-radius: 0.05rem;
    background-color: #fff;
    display: block;
    top: 0.8rem;
    left: 0.85rem;
    transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
    position: absolute;
    width: 1.85rem;
    border-radius: 0.07rem;
    height: 0.32rem;
    background-color: #fff;
    display: block;
    bottom: 1rem;
    left: 1.3rem;
    transform: skew(10deg, 0deg);
    opacity: 0.1;
	}
</style>
