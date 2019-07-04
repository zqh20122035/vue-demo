const state = {
	//设置底部导航栏数据
	MenuList:[
			{	text:'元素',name:'Basic',path:'/basic',selected:true,icon:require('../../static/image/tabbar/basics.png'),iconActive:require('../../static/image/tabbar/basics_cur.png') },
			{	text:'组件',name:'Component',path:'/component',selected:false,icon:require('../../static/image/tabbar/component.png')	,iconActive:require('../../static/image/tabbar/component_cur.png') },
			{	text:'扩展',name:'Plugin',path:'/plugin',selected:false,icon:require('../../static/image/tabbar/plugin.png')	,iconActive:require('../../static/image/tabbar/plugin_cur.png') }
		],
	footShow:true
}

const getters = {
	//获取属性状态
	getMenuList:state => state.MenuList,
	getFootShow:state => state.footShow
}

const mutations = {
	//改变属性状态
	changeSelected(state,name){
		for(var i=0; i< state.MenuList.length; i++){
			if(state.MenuList[i].name == name){
				state.MenuList[i].selected = true
			}else{
				state.MenuList[i].selected = false
			}
		}
	},
	FootShow(state){
		state.footShow = true
	},
	FootHide(state){
		state.footShow = !state.footShow
	}
}

const actions = {
	doChangeSelected(context,name){
		context.commit("changeSelected",name)
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}