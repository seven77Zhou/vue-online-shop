<template>
	<div class="detail">
		<!--返回上页按钮-->
		<div class="back" @click="$router.go(-1)">
	        <i class="iconBack"></i>
	    </div>
	    <!--产品详情轮播图-->
		<detail-swiper :swiperArr = "datas.swiper"></detail-swiper>
		<!--产品介绍-->
		<div class="proInfo">
			<h5>{{datas.info.title}}</h5>
			<p class="price">&yen;{{datas.info.price}}</p>
			<p class="proIntro">{{datas.info.intro}}</p>
			<ul class="types">
				<li v-for="(item,index) in datas.info.types" :class="index==typeActive?'on':''" @click="chooseType(index)">
					{{item}}
				</li>
			</ul>
			<ul class="detailListImg">
				<li v-for="(item,index) in datas.detail">
					<img v-lazy= "item.imgPath"/>
				</li>
			</ul>
		</div>
		<base-line></base-line>
		<detail-footer></detail-footer>
	</div>
</template>
<script >
	//引入mock模拟数据
	import detail from '../http/mock.js'
	//引入组件
	import detailSwiper from '../components/detail/swiper'
	import baseLine from '../components/baseLine'
	import detailFooter from '../components/detail/footer'
	
	export default{
		data(){
			return {
				datas:{
					swiper:[],
					info:{},
					detail:[]
				},
				typePrice:[388,578,888,1288],
				typeActive:0
			}
		},
		beforeCreate(){
			//请求mock模拟数据，这边的$http是在main.js中定义好的axios异步请求
			this.$http({
				method: 'post',
		      	url: '/detailPage'
			}).then((response) => {
				this.datas = response.data;
				//将请求的数据存入state的activePro中
				this.$store.commit('SET_PRODUCT', response.data);
			})
		},
		methods:{
			chooseType: function(index){
				this.datas.info.price = this.typePrice[index];
				this.datas.info.chooseType = this.datas.info.types[index] ; //设置当前所选择的商品数据
				this.typeActive = index;
			}
		},
		components:{
			detailSwiper,
			baseLine,
			detailFooter
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.detail{
		padding-bottom: 56px;
		.back{
			position: absolute;
			top: 15px;
			left: 15px;
			z-index:1000;
			padding:10px ;
			width:20px;
			height:20px;
			.iconBack{
				display: inline-block;
				width: 10px;
				height: 10px;
				border-bottom: 1px solid #fff;
				border-right: 1px solid #fff;
				-webkit-transform: rotate(135deg);
				transform: rotate(135deg);
			}
		}
		.proInfo{
			background: #fff;
			padding-top: 5px;
			h5{
				padding: 10px;
				color: #333;
				font-size: 18px;
				line-height: 24px;
			}
			.price{
				padding:0 10px;
				font-size: 16px;
				color: #f63;
				font-weight: bold;
			}
			.proIntro{
				padding: 10px;
				font-size: 14px;
				line-height: 20px;
			}
			.types{
				padding: 10px 10px 20px;
				overflow: hidden;
				li{
					float: left;
					margin-right: 15px;
					padding: 5px 10px;
					border: 1px solid #666;
					color: #666;
				}
				li.on{
					color: #f63;
					border: 1px solid #f63;
				}
			}
			.detailListImg{
				img{
					width: 100%;
					vertical-align: middle;
				}
			}
		}
	}
</style>