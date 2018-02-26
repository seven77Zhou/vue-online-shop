<template>
	<div class="paySuccess">
		<img width="40" src="../assets/img/success.png"/>
		<p class="title"><span>支付成功</span></p>
		<p>即将清空购物车数据...</p>
		<p class="leftTime"><span>{{backTime}}</span>秒之后返回首页</p>
	</div>
</template>
<script>

	export default{
		data(){
			return {
				backTime : 5 //规定几秒后返回首页
			}
		},
		created(){
			this.time();
			this.$store.commit('ADD_ORDERLIST');
		},
		methods:{
			time : function(){
				var _this = this;
				var timer = setInterval(function(){
					if(_this.backTime ==0){					
						clearInterval(timer);
						//清空购物车数据
						_this.$store.commit('DEL_CART');
						//返回首页
						_this.$router.push({name:'首页'})
					}else{
						_this.backTime--;
					}
					
				},1000)
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
.paySuccess{
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	p{
	 	padding: 15px 0;
	}
	.title{
		padding-top: 8px;
		img{
			vertical-align: middle;
		}
		span{
			display: inline-block;
			vertical-align: middle;
			font-size: 18px;
			font-weight: bold;
		}
	}
	.leftTime{
		span{
			margin-right: 5px;
			color: #f63;
			font-weight: bold;
			font-size: 18px;
		}
	}
}
</style>