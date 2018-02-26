<template>
	<div class="footer">
		<router-link :to="{name:'首页'}">
			<i class="homeIcon"></i>
		</router-link>
		<router-link :to="{name:'购物车'}">
			<span class="nums" v-if="getProNum!=0">{{getProNum}}</span>
			<i class="cartIcon"></i>
		</router-link>
		<div class="addCart" @click="addCart">
			加入购物车
		</div>
	</div>
</template>
<script >
	import { MessageBox } from 'mint-ui';
	export default{
		computed: {
			//获取已加入购物车的商品数量
			getProNum:function(){
				return this.$store.state.cart.oldProList.length;
			},
			//获取当前页面商品信息
			getProNow:function(){
				return this.$store.state.cart.activePro
			}
		},
		methods:{
			//加购物车
			addCart:function(){
				MessageBox.confirm(
					`商品名称:<span>${this.getProNow.info.title}</span></br>`+
					`商品价格:${this.getProNow.info.price}</br>`+
					`商品规格:${this.getProNow.info.chooseType}</br>`
				).then(action => {
				  this.$store.commit('ADD_PRODUCT')
				}).catch(function(err){
					//console.log(err)
				});
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 56px;
		border-top: 1px solid #ddd;
		background: #fff;
		line-height: 56px;
		a{
			position: relative;
			float: left;
			width: 25%;
			border-right: 1px solid #eee;
			text-align: center;
			box-sizing: border-box;
			.nums{
				position: absolute;
				left: 55%;
				top: 5px;
				width: 18px;
				height: 18px;
				background: #f63;
				color: #fff;
				text-align: center;
				font-size: 12px;
				line-height: 18px;
				border-radius: 50%;
				-webkit-transform: scale(0.8);
				transform: scale(0.8);
			}
		}
		i{
			display: inline-block;
			width: 20px;
			height: 20px;
			background-size: cover;
			vertical-align: middle;
		}
		.homeIcon{
			background-image: url('../../assets/img/home.png');	
		}
		.cartIcon{
			background-image: url('../../assets/img/cart.png');	
		}
		.addCart{
			margin-left: 50%;
			background: #f63;
			text-align: center;
			color: #fff;
		}
	}
</style>