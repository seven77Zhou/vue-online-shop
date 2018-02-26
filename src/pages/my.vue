<template>
	<div class="my">
		<header class="header">
			<img src="../assets/img/avatar.jpg"/>
			<div class="myInfo">
				<p>欢迎你! <span>{{user.userName}}</span></p>				
			</div>			
		</header>
		<section class="myPageCon">
			<div class="myOrder">
				<router-link :to="{name:'订单详情'}">
					<span>我的订单</span>
					<span class="arrow"><i class="arrowRight666"></i></span>
				</router-link>				
			</div>
			<ul class="orderStatus">
				<li>
					<span class="payIcon"></span>
					<p>待付款</p>
				</li>
				<li>
					<span class="getIcon"></span>
					<p>待收货</p>
				</li>
				<li>
					<span class="returnIcon"></span>
					<p>7天无理由退换</p>
				</li>
			</ul>
			
			<div class="others">
				<ul>
					<li>
						<span>我的卡券</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
					<li>
						<span>会员中心</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
					<li>
						<span>我的闲置</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
				</ul>
				<ul>
					<li>
						<span>我的问答</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
					<li>
						<span>我的评价</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
				</ul>
				<ul>
					<li>
						<span>在线客服</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
					<li>
						<span>设置</span>
						<span class="arrow"><i class="arrowRight666"></i></span>
					</li>
				</ul>
			</div>
		</section>
		<my-footer pageName="我的"></my-footer>
	</div>
</template>
<script >
	import {getStorage} from '../assets/storage'
	
	import myFooter from '../components/footer'
	export default{
		data(){
			return {
				user:{
					userName:''
				}
			}
		},
		created(){
			if(!JSON.parse( getStorage('user'))){
				this.$router.push('/login');
				return
			}
			
			this.user =JSON.parse( getStorage('user'));
			
			
		},
		components:{
			myFooter
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.header{
		padding: 20px;
		background: #2bb;
		text-align: center;
		img{
			width: 70px;
			border-radius: 50%;
			border: 3px solid rgba(255,255,255,.7);
			vertical-align: middle;
		}
		.myInfo{
			color: #fff;
			p{
				padding-top: 10px;
				span{
					font-weight: bold;
					font-size: 18px;
				}
			}
		}
	}
	.arrowRight666{
		display: inline-block;
		width: 8px;
		height: 8px;
		border-top: 1px solid #666;
		border-left: 1px solid #666;
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
		vertical-align: middle;
	}
	.myPageCon{
		.myOrder{
			padding: 0 20px;
			height: 50px;
			background: #fff;
			border-bottom: 1px solid #eee;
			line-height: 50px;
			a{
				display: block;
			}
			.arrow{
				float: right;
			}
		}
		.orderStatus{
			overflow: hidden;
			li{
				float: left;
				padding: 10px 0;
				width: 33.33%;
				text-align: center;
				box-sizing: border-box;
				p{
					font-size: 14px;
				}
				.payIcon{
					display: inline-block;
					width: 20px;
					height: 20px;
					background: url(../assets/img/pay.png);
					background-size: cover;
				}
				.getIcon{
					display: inline-block;
					width: 20px;
					height: 20px;
					background: url(../assets/img/shouhuo.png);
					background-size: cover;
				}
				.returnIcon{
					display: inline-block;
					width: 20px;
					height: 20px;
					background: url(../assets/img/7.png);
					background-size: cover;
				}
			}
			li+li{
				border-left: 1px solid #eee;
			}
		}
		.others{
			margin-bottom: 56px;
			ul{
				background: #fff;
				margin-top: 20px;
				border-bottom: 1px solid #eee;
				li{
					border-top: 1px solid #eee;
					height: 40px;
					padding: 0 20px;
					line-height: 40px;
					.arrow{
						float: right;
					}
				}
			}
		}
	}
	
</style>