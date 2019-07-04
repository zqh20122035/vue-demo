<template>
  <div class="header-nav">
	  <div :class="['top-header',bgColor]">
		  <span class="cuIcon-back" @click="backPrePage()">返回</span>
		  <p>{{title}}</p>
	  </div>
	
  </div>
</template>

<script>
export default {
    name: 'header-nav',
    props:['title','bgColor'],
    data () {
        return {
      
		}
	},
	methods:{
		backPrePage(){
			console.log("ks")
			this.$router.back(-1);
		}
	}
}
</script>
<style scoped>
	.header-nav{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}
	.top-header{
		height: 1rem;
		line-height: 1rem;
		font-size: 0.42rem;
		position: relative;
	}
	.top-header span{
		position: absolute;
		left: 0.3rem;
	}
	.top-header p{
		width: 100%;
		text-align: center;
	}
</style>
