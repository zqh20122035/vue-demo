<template>
  <div id="app">
    <router-view/>
	<footer-header v-if="footShow"></footer-header>
  </div>
</template>

<script>
import "../static/css/reset.css"
import "../static/css/main.css";
import "../static/css/animation.css";
import "../static/css/icon.css";
import FooterHeader from "./components/FooterHeader"
export default {
  name: 'App',
	data(){
		return{
			footShow:this.$store.getters.getFootShow //底部导航栏是否显示
		}
	},
	created() {
		
	},
	mounted(){
	},
	watch: { // 监听路由变化
		$route (to, from) {
			this.footShow = this.$store.getters.getFootShow;
			// let ThisPage = to.name;
			// if (ThisPage === 'Basic' || ThisPage === 'Component' || ThisPage === 'Plugin') {
			// 	this.footShow = true;
			// 	this.$store.dispatch("doChangeSelected",ThisPage)
			// } else {
			// 	this.footShow = false;
			// }
		}
	},
	methods: {
	 
	},
	components:{
		"footer-header":FooterHeader
	},
}
</script>

<style>
#app {
  padding:0;
	margin:0;
	width:100%;
	height:100vh;
	background-color: #f1f1f1;
}
</style>
