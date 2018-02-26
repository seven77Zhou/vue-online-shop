<template>
	<div class="cartPage">
		<!--头部导航条，调取公共组件-->
		<head-back headName = "购物车"></head-back>
		<section class="content">
			<div class="toLogin" v-if="ifLogin">
				登陆后享受更多优惠
				<router-link :to="{name:'登录'}">去登陆<i class="arrowRight"></i></router-link>
			</div>
			<ul>
				<li v-for="(item,index) in cartList">
					<div class="btn" :class="{'active':item.active}" @click="togglePay(item,index)"><span></span></div>
					<div class="proImg">
						<img v-lazy= "item.swiper[0].imgPath"/>
					</div>					
					<div class="info">
						<h6 class="oneLine">{{item.info.title}}</h6>
						<p class="type">{{item.info.chooseType}}</p>
						<p class="price">售价：<span>&yen;{{item.info.price}}</span></p>
						<span class="del" @click="delCartData(item)"><i class="delIcon"></i></span>
					</div>
				</li>
			</ul>
			<div class="empty" v-if="cartList.length==0 && !ifLogin">
				<p>购物车空空如也~</p>
				<router-link :to="{name:'分类'}">点我去选购商品</router-link>
			</div>
		</section>
		<!--底部-->
		<footer class="footer">
			<div class="allPrice">
				<p>共{{payNum}}件 金额：</p>
				<p><span>{{payAll}}</span>元</p>
			</div>
			<router-link class="shopping" :to="{name:'分类'}">继续购物</router-link>
			<span class="toPay" @click="toPay">去结算</span>
		</footer>
	</div>
</template>
<script > 
	//这边引入vue，是为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。
	import Vue from 'vue'
	import { MessageBox } from 'mint-ui';
	
	import headBack from '../components/headBack'
	
	import {getStorage} from '../assets/storage'
	
	export default{
		data(){
			return {
				cartList : this.$store.state.cart.oldProList,//vuex中保存的原有的购物车列表，刷新即清空
				payNum : this.$store.state.cart.productsNum,//支付总数
				payAll : this.$store.state.cart.productsPay,//支付总金额
				ifLogin: true//是否已登录，检查本地存储
			}
		},
		created(){
			this.ifLogin = !getStorage('user')
		},
		components:{
			headBack
		},
		methods:{
			delCartData:function(item){
				MessageBox.confirm('确认删除该商品？').then(action => {
					//跟据商品id和商品价格同时限定删除条件
					this.$store.commit('DEL_PRODUCT',{id:item.info.id,price:item.info.price});
					//如果删除已选商品，那么需要减掉支付总金额，商品数量
					if(item.active){
						this.$store.commit('DEL_PAY',item.info.price);
						this.payNum = this.$store.state.cart.productsNum;
						this.payAll = this.$store.state.cart.productsPay;
					}
				}).catch(function(err){
				});
			},
			togglePay:function(item,index){	
				if(item.active){
					this.$store.commit('DEL_PAY',item.info.price);
					Vue.set(item,'active',false);//为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。 
				}else{
					this.$store.commit('ADD_PAY',item.info.price);
					Vue.set(item,'active',true);
				}
				this.payNum = this.$store.state.cart.productsNum;
				this.payAll = this.$store.state.cart.productsPay;
		    },
			toPay:function(){
				let payList = [];
				if(this.payNum!=0){
					for(var i in this.cartList){
						this.cartList[i].active ? payList.push(this.cartList[i]):''
					}
					this.$store.commit('ADD_PAYLIST',payList);
					this.$router.push({name:'支付'})
				}
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
.content{	
	overflow-x: hidden;
	.toLogin{
		margin: 10px 0;
		background: #fff;
		padding: 0 20px;
		height:50px;
		line-height: 50px;
		border-bottom: 1px solid #eee;
		color:#666;
		a{
			float: right;
			font-size: 16px;
			color: #666;
			i{
				margin-left: 5px;
			}
		}
	}
	ul{
		margin-bottom: 56px;
		background: #fff;
		li{
			overflow: hidden;
			padding: 10px;
			height:110px;
			box-sizing: border-box;
			border-bottom: 1px solid #eee;
			.btn{
				position: relative;
				float: left;
				width:60px;
				height:100%;
				span{
					content: "";
					position: absolute;
					left: 50%;
					top: 50%;
					margin-top: -10px;
					margin-left: -10px;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background: #ccc;
				}
				span:before{
					content: "";
					display: inline-block;
					margin-left: 8px;
					position: relative;
					top: -2px;
					width: 4px;
					height: 9px;
					border-bottom: 1px solid #fff;
					border-right: 1px solid #fff;
					-webkit-transform: rotate(45deg);
					transform: rotate(45deg);
				}
			}
			.btn.active{
				span{
					background: #ad5;
				}
			}
			.proImg{
				float: left;
				width: 90px;
				img{
					width: 100%;
					vertical-align: middle;
				}
			}
			.info{
				position: relative;
				float: left;
				width: -webkit-calc(100% - 150px);
				width: calc(100% - 150px);
				padding-left: 10px;
				box-sizing: border-box;
				h6{
					padding: 7px 0 8px;
					color: #333;
				}
				.type{
					padding-bottom: 8px;
					font-size: 14px;					
				}
				.price{
					span{
						color: #f63;
					}
				}
				.del{
					position: absolute;
					right: 20px;
					bottom: 0;
					z-index: 20;
					width: 20px;
					height: 20px;
					.delIcon{
						display: inline-block;
						width: 20px;
						height: 20px;
						background: url(../assets/img/delete.png);
						background-size: cover;
					}
				}
			}
		}
	}
	.empty{
		text-align: center;
		p{
			padding: 12vh 0;
			font-size: 22px;
		}
		a{
			color: #f63;
			font-size: 18px;
			font-weight: bold;
		}
	}	
}
.footer{
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 1000;
	display: -webkit-flex;
	display: flex;
	width: 100%;
	height: 56px;
	background: #fff;
	border-top: 1px solid #eee;
	overflow: hidden;
	.allPrice{
		flex: 3;
		padding-top: 6px;
		text-align: right;
		line-height: 22px;
		font-size: 14px;
		p{
			padding-right: 15px;
			span{
				color: #f63;
				font-size: 16px;
			}
		}
	}
	a,.toPay{
		flex: 2;
		text-align: center;
		line-height: 56px;
		color: #fff;
	}
	.shopping{
		background: #ccc;
	}
	.toPay{
		background: #f60;
	}
}	
</style>