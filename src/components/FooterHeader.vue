<template>
	<div id="footer-header">
		<div class="footer">
			<div v-for="(item,index) in MenuList" :key="index" class="footer-flex" @click="toggleNabbar(item)">
				<img :src="item.selected?item.iconActive:item.icon">
				<span v-text="item.text" :style="{color:item.selected?'#39b54a':'#aaaaaa'}"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'FooterHeader',
		data(){
			return{
				MenuList:this.$store.getters.getMenuList
				
			}
		},
		methods:{
			toggleNabbar(obj){
				this.$router.push({ path: obj.path })
			}
		}
	}
</script>

<style scoped lang="scss">
	.flexstyle{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#footer-header{
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 1024;
		background: #fff;
		-webkit-box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
		box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
		
		.footer{
			@extend .flexstyle;
			height:1.2rem;
			
			.footer-flex{
				@extend .flexstyle;
				flex:1;
				flex-direction: column;
				color: #aaaaaa;
				
				img{
					width:0.56rem;
					height:0.56rem;
					margin-bottom: 0.05rem
				}
				
				span{
					font-size: 0.28rem;
				}
			}
		}
	}
	
</style>
