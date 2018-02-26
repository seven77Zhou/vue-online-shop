<template>
	<div class="pay">
		<div class="content">
			<!--头部导航条，调取公共组件-->
			<head-back headName = "支付"></head-back>
			<section class="info">
				<p>收货人：{{personName}} <span>{{personPhone}}</span></p>
				<p class="address">收货地址：{{personAddress}}</p>
			</section>
			<section class="orderList">
				<h5>订单列表</h5>
				<ul>
					<li v-for="(item,index) in payList">
						<img v-lazy= "item.swiper[0].imgPath"/>
						<div class="orderInfo">
							<h6 class="oneLine">{{item.info.title}} <span>({{item.info.chooseType}})</span></h6>
							<p>{{item.info.price}}元</p>
						</div>
					</li>
				</ul>
				<p class="allPay">共需支付： <span>{{pay}}</span> 元</p>
			</section>
		</div>
		<footer>
			<router-link :to="{name:'支付成功'}">立即支付</router-link>
		</footer>
	</div>
</template>
<script>
import headBack from '../components/headBack'
	export default{
		data(){
			return {
				personName : this.$store.state.user.orderName,//收货人
				personPhone: this.$store.state.user.orderPhone,//电话
				personAddress: this.$store.state.user.orderAddress,//地址
				payList : this.$store.state.cart.payList,//所有支付商品
				pay : this.$store.state.cart.productsPay//支付总价
			}
		},
		components:{
			headBack
		}
	}
</script>
<style lang="scss" scoped="scoped">

.pay{
	height: 100%;
	.content{
		min-height: -webkit-calc(100% - 90px);
		min-height: calc(100% - 90px);
	}
	.info{
		margin-top: 10px;
		padding: 10px;
		color: #666;
		line-height: 28px;
		background: #fff;
		border-bottom: 1px solid #eee;
		p{
			padding: 5px 10px;
			span{
				float: right;
			}
		}
		.address{
			font-size: 14px;
			line-height: 22px;
		}
	}
	.orderList{
		margin-top: 10px;
		margin-bottom: 90px;
		background: #fff;
		border-bottom: 1px solid #eee;
		h5{
			padding: 10px 20px;
			font-size: 14px;
			font-weight: bold;
			border-bottom: 1px solid #eee;
		}
		li{
			height: 100px;
			padding: 10px 20px;
			box-sizing: border-box;
			img{
				float: left;
				width: 80px;
			}
			.orderInfo{
				margin-left: 90px;
				h6{
					padding: 10px 0;
					color: #333;
					span{
						color: #999;
						font-size: 14px;
					}
				}
				p{
					padding: 5px 0;
					color: #f63;
				}
			}
		}
		.allPay{
			padding: 10px 20px;
			border-top: 1px solid #eee;
			text-align: right;
			font-size: 16px;
			line-height: 24px;
			span{
				color: #f63;
			}
		}
	}
}
footer{
	margin-top: -70px;
	margin-left: 20px;
	margin-right: 20px;
	height: 50px;
	background: #fa0;
	border-radius: 6px;
	text-align: center;
	line-height: 50px;
	letter-spacing: 2px;
	
	a{
		color: #fff;
		display: block;
	}
}
</style>