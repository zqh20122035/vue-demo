
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //这里能够跟踪路径的变化
  console.log(from);
  console.log(to);
	
	let nameRouter = to.name
	store.commit("changeSelected",nameRouter)
	if(nameRouter == 'Basic' || nameRouter == 'Component' || nameRouter == 'Plugin'){
		store.commit("FootShow")
	}else{
		store.commit("FootHide")
	}
	
  //最后通过钩子继续页面的跳转
  next();
});

new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
