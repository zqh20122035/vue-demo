<template>
	<div class="background">
		<Header title="背景" bgColor="bg-gradual-blue"></Header>
		<div class="cu-bar bg-white solid-bottom" style="font-size: 0.32rem;min-height: 1.2rem;margin-top: 1rem;">
			<p style="padding-left: 0.2rem;"><span class='cuIcon-title text-blue'></span>深色背景</p>
		</div>
		<ul class="grid col-3 padding-sm">
			<li class="padding-sm" v-for="(item,index) in colorList" :key="index" >
				<div :class="['padding radius text-center shadow-blur','bg-' + item.name]">
					<p class="text-lg" v-text="item.title"></p>
					<p class="margin-top-sm text-Abc" v-text="item.name"></p>
				</div>
			</li>
		</ul>
		<div class="cu-bar bg-white solid-bottom" style="font-size: 0.32rem;min-height: 1.2rem;border-bottom: 0.5px solid rgba(0,0,0,0.1);" >
			<p style="padding-left: 0.2rem;"><span class='cuIcon-title text-blue'></span>淡色背景</p>
		</div>
		<ul class="grid col-3 bg-white padding-sm">
			<li class="padding-sm" v-for="(item,index) in colorList" :key="index" v-if="index<12">
				<div :class="['padding radius text-center light','bg-' + item.name]">
					<p class="text-lg" v-text="item.title"></p>
					<p class="margin-top-sm text-Abc" v-text="item.name"></p>
				</div>
			</li>
		</ul>
		<div class="cu-bar bg-white solid-bottom" style="font-size: 0.32rem;min-height: 1.2rem;margin-top:0.5rem;" >
			<p style="padding-left: 0.2rem;"><span class='cuIcon-title text-blue'></span>渐变背景</p>
		</div>
		<ul class="grid col-2 padding-sm">
			<li class="padding-sm">
				<div class="bg-gradual-red padding radius text-center shadow-blur">
					<div class="text-lg">魅红</div>
					<div class="margin-top-sm text-Abc">#f43f3b - #ec008c</div>
				</div>
			</li>
			<li class="padding-sm">
				<div class="bg-gradual-orange padding radius text-center shadow-blur">
					<div class="text-lg">鎏金</div>
					<div class="margin-top-sm text-Abc">#ff9700 - #ed1c24</div>
				</div>
			</li>
			<li class="padding-sm">
				<div class="bg-gradual-green padding radius text-center shadow-blur">
					<div class="text-lg">翠柳</div>
					<div class="margin-top-sm text-Abc">#39b54a - #8dc63f</div>
				</div>
			</li>
			<li class="padding-sm">
				<div class="bg-gradual-blue padding radius text-center shadow-blur">
					<div class="text-lg">靛青</div>
					<div class="margin-top-sm text-Abc">#0081ff - #1cbbb4</div>
				</div>
			</li>
			<li class="padding-sm">
				<div class="bg-gradual-purple padding radius text-center shadow-blur">
					<div class="text-lg">惑紫</div>
					<div class="margin-top-sm text-Abc">#9000ff - #5e00ff</div>
				</div>
			</li>
			<li class="padding-sm">
				<div class="bg-gradual-pink padding radius text-center shadow-blur">
					<div class="text-lg">霞彩</div>
					<div class="margin-top-sm text-Abc">#ec008c - #6739b6</div>
				</div>
			</li>
		</ul>
		<div class="cu-bar bg-white solid-bottom" style="font-size: 0.32rem;min-height: 1.2rem;" >
			<p style="padding-left: 0.2rem;"><span class='cuIcon-title text-blue'></span>图片背景</p>
		</div>
		<div class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 5.5rem;">
			<div class="padding-xl text-white" style="padding:0.6rem;z-index: 6;">
				<p class="padding-xs text-xxl text-bold" style="line-height: 1.5rem;">
					钢铁之翼
				</p>
				<p class="padding-xs text-lg">
					Only the guilty need fear me.
				</p>
			</div>
		</div>
		<div class="cu-bar bg-white solid-bottom" style="font-size: 0.32rem;min-height: 1.2rem;margin-top:0.5rem ;" >
			<p style="padding-left: 0.2rem;"><span class='cuIcon-title text-blue'></span>透明背景(文字层)</p>
		</div>
		<div class="grid col-2">
			<div class="bg-img padding-bottom-xl" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 3.6rem;flex:1;">
				<div class="bg-shadeTop padding padding-bottom-xl" style="font-size: 0.36rem;padding: 0.5rem;">
					上面开始
				</div>
			</div>
			<div class="bg-img padding-top-xl flex align-end" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 3.6rem;flex:1;">
				<div class="bg-shadeBottom padding padding-top-xl flex-sub" style="font-size: 0.36rem;padding: 0.5rem;">
					下面开始
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../Header.vue"
	export default{
		data(){
			return{
				colorList:this.$store.getters.getColorList
			}
		},
		mounted(){
			console.log(this.$store.getters.getColorList)
		},
		components:{
			Header,
		}
	}
</script>

<style scoped>
	.padding-sm{
		padding:0.25rem;
	}
	.grid.col-3>li{
		width:calc(100% / 3);
		padding:0.25rem;
		z-index: 0;
	}
	.grid.col-2>li{
		width:calc(100% / 2);
	}
	.text-lg,.text-Abc{
		font-size: 0.36rem;
		line-height: 0.65rem;
	}
	.shadow-blur::before{
		top: 0.12rem;
		left: 0.12rem;
		filter: blur(0.1rem);
	}
	.padding-sm>.text-center{
		padding:0.4rem;
		border-radius: 0.08rem;
	}
	
</style>
