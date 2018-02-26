<template>
	<div class="footer">
		<ul>
			<li :class="pageName=='首页'?'nowPage':''">
				<router-link :to="{name:'首页'}">
					<i class="homeIcon"></i>
					<h6>首页</h6>
				</router-link>
			</li>
			<li :class="pageName=='分类'?'nowPage':''">
				<router-link :to="{name:'分类', params: { classifyId: 'all' }}">
					<i class="classifyIcon"></i>
					<h6>分类</h6>
				</router-link>
			</li>
			<li :class="pageName=='购物车'?'nowPage':''">
				<router-link :to="{name:'购物车'}">
					<i class="cartIcon"></i>
					<h6>购物车</h6>
				</router-link>
			</li>
			<li :class="pageName=='我的'?'nowPage':''">
				<router-link :to="{name:'我的'}">
					<i class="myIcon"></i>
					<h6>我的</h6>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script >
	export default{
		props:['pageName']
	}
</script>
<style lang="scss" scoped="scoped">
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 1000;
		width: 100%;
		height: 56px;
		background: #fff;
		border-top: 1px solid #eee;
		li{
			float: left;
			padding-top: 7px;
			width: 25%;
			box-sizing: border-box;
			text-align: center;
			a{
				display: block;
				i{
					display: inline-block;
					width: 20px;
					height: 20px;
					background-size: cover;
				}
			}
			.homeIcon{				
				background-image: url('../assets/img/home.png');				
			}
			.classifyIcon{
				background-image: url('../assets/img/classify.png');	
			}
			.cartIcon{
				background-image: url('../assets/img/cart.png');	
			}
			.myIcon{
				background-image: url('../assets/img/my.png');
			}
			h6{
				font-size: 14px;
				line-height: 18px;
			}
		}
		.nowPage{
			.homeIcon{
				background-image: url('../assets/img/homeOn.png');
			}
			.classifyIcon{
				background-image: url('../assets/img/classifyOn.png');	
			}
			.cartIcon{
				background-image: url('../assets/img/cartOn.png');	
			}
			.myIcon{
				background-image: url('../assets/img/myOn.png');
			}
			h6{
				color: #d81e06;
				font-weight: bold;
			}
		}
	}
</style>