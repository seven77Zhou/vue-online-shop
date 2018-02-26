<template>
	<div class="orderDetail">
		<head-back headName="订单详情"></head-back>
		<section class="orderDetail">		
			<div class="orderBox" v-for="(item,key) in detail">
				<h6>订单编号：myorder-{{key}}</h6>
				<ul>
					<li v-for="(itemInner,keyInner) in item">
						{{itemInner.info.title}}
						<p>&yen;{{itemInner.info.price}}</p>
					</li>
				</ul>
			</div>
		</section>
		
	</div>
</template>
<script>
	import headBack from '../components/headBack'
	export default{
		data(){
			return {
				detail:this.$store.state.cart.oldOrderData
			}
		},
		created(){
			console.log(this.detail)
		},
		components:{
			headBack
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.orderDetail{
		.orderBox{
			margin-top: 20px;
			h6{
				padding: 10px 20px;
				background: #fff;
				font-size: 14px;
			}
			ul{
				border-top: 1px solid #eee;
			}
			li{
				padding: 10px 20px;
				line-height: 24px;
				border-bottom: 1px solid #eee;
				p{
					color: #f63;
					font-size: 14px;
				}
			}
		}
	}
</style>