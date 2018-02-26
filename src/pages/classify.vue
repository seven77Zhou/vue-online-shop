<template>
	<div class="classify">
		<head-back headName="商品分类">	</head-back>
		<section class="content">
			<!--分类列表-->
			<div class="classifyTitle"  ref="wrapper">
				<ul>
					<li v-for="(item,index) in classifyData.products" :class="{'active':index==nowIndex}" @click="classifyCon(item,index)">					
						<router-link :to="{path:'/classify/'+item.title}" >{{item.title}}</router-link>
					</li>
				</ul>				
			</div>
			<!--分类列表对应该主题下的分类-->
			<div class="classifyConBox">
				<router-view :classifyData="classifyConList"></router-view>
			</div>
		</section>
	</div>
</template>
<script>
	//引入mock模拟数据
	import detail from '../http/mock.js'
	//引入better-scroll插件
	import BScroll from 'better-scroll'
	//商品分类箭头直接返回首页
	import headBack from '../components/classify/headBack'
	export default{
		data(){
			return {
				classifyData:{},//商品分类总表
				nowIndex : this.$store.state.cart.classifyIndex,
				classifyConList : this.$store.state.cart.classifyList//右边的分类详细列表
			}
		},
		beforeCreate(){			
			this.$http({
				method: 'post',
		      	url: '/classifyPage'
			}).then((response) => {
				this.classifyData = response.data;
				//每次请求数据，将商品分类列表对应到当前商品分类的index
				this.$store.commit('CHANGE_CLASSIFY_LIST',response.data.products[this.nowIndex]);
				this.classifyConList = this.$store.state.cart.classifyList;
				//better-scroll惯性滚动
				this.$nextTick(() => {
					if (!this.scroll) {
			        	this.scroll = new BScroll(this.$refs.wrapper, {click: true })
			        }
			    })
			})	
		},
		methods:{
			classifyCon:function(item,index){
				//修改当前分类对应的商品分类列表
				this.$store.commit('CHANGE_CLASSIFY_LIST',item);
				//点击商品分类后，修改当前商品分类index
				this.$store.commit('CHANGE_CLASSIFY_index',index);
				this.nowIndex = this.$store.state.cart.classifyIndex;
				this.classifyConList = this.$store.state.cart.classifyList;
			}
		},
		components:{
			headBack
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.classify{
		height: 100%;
		background: #fff;
	}
	.content{
		position: relative;
		height: calc(100% - 51px);
	}
	.classifyTitle{
		float: left;
		width: 25%;
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
     	height: 100%;
		li{
			position: relative;
			padding-left: 20px;
			height: 50px;
			line-height: 50px;
			overflow: hidden;
		}
		li.active{
			background: #f2f2f2;
		}
		li:before{
			content: "";
			position: absolute;
			left: 0;
			top:0;
			width: 2px;
			height: 100%;
			background: #fa2;
			-webkit-transform: translate3d(0,-100%,0);
			transform: translate3d(0,-100%,0);
			-webkit-transition: all .3s;
			transition: all .3s;
		}
		li.active:before{
			-webkit-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}
	}
	.classifyConBox{
		margin-left: 25%;
		background: #f2f2f2;
		height: 100%;
	}
</style>