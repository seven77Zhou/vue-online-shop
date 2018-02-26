<template>
  <div class="home" >
  	<header class="homeHead">
  		<h2>七哥商城</h2>
  		<span class="search_btn_box"><img width="20" src="../assets/img/search.png" /></span>
  	</header>
  	<div>
  		<home-swiper :swiperArr = "datas.swiper"></home-swiper>
  		<ul class="homeService">
  			<li>
  				<span></span>
  				<span>自营品牌</span>
  			</li>
  			<li>
  				<span></span>
  				<span>无忧退货</span>
  			</li>
  			<li>
  				<span></span>
  				<span>48小时快速退款</span>
  			</li>
  		</ul>
		<section  class="section1">
			<section-title sectionNumber="section1"></section-title>
			<ul>
				<li v-for="(item,index) in datas.section1.listImg">
					<router-link :to="{name:'详情页'}">
						<img width="100%" v-lazy= "item.imgPath" />
					</router-link>					
				</li>
			</ul>
			<homeBanners :sectionData="datas.section1"></homeBanners>
		</section>
		<section  class="section2">
			<div class="section2Pro">
				<ul>
					<li v-for="(item,index) in datas.section2.listImg">
					<router-link :to="{name:'详情页'}">
						<img v-lazy= "item.imgPath" />
						<h6 class="textCenter">{{item.title}}</h6>
						<p class="oneLine font12">产品描述描述描述描述</p>
						<p class="price">&yen;{{item.price}}</p>
					</router-link>					
				</li>
				</ul>
			</div>
			<homeBanners :sectionData="datas.section2"></homeBanners>
		</section>
		<section class="section3">
			<ul>
				<li v-for="(item,index) in datas.section3.listImg">
					<router-link :to="{name:'详情页'}">
						<div class="proDetail">
							<h6>{{item.title}}</h6>
							<p>距离开抢还有：</p>
							<p class="time"><span>{{dom[index].num1||'00'}}</span> : <span>{{dom[index].num2||'00'}}</span> : <span>{{dom[index].num3||'00'}}</span></p>
						</div>
						<div class="proImg">
							<img v-lazy= "item.imgPath"/>
							<span class="price">&yen;{{item.price}}</span>
						</div>
					</router-link>	
				</li>
			</ul>
			<homeBanners :sectionData="datas.section3"></homeBanners>
		</section>
		<section class="section4">
			<section-title sectionNumber="section4"></section-title>
			<ul>
				<li v-for="(item,index) in datas.section4.listImg">
					<router-link :to="{name:'详情页'}">
						<div class="proImg">
							<img v-lazy= "item.imgPath"/>
							<span class="oneLine">{{item.detail}}</span>
						</div>
						<div class="proDetail">
							<h6 class="oneLine">{{item.title}}</h6>
							<p>&yen;{{item.price}}</p>
						</div>
					</router-link>	
				</li>
			</ul>
			<homeBanners :sectionData="datas.section4"></homeBanners>
		</section>
		<base-line></base-line>
  	</div>
 		<myfooter pageName="首页"></myfooter>
  </div>
</template>
<script>
	//引入mock模拟数据
	import index from '../http/mock.js'
	//引入组件
	import homeSwiper from '../components/home/swiper'
	import homeBanners from '../components/home/homeBanners'
	import sectionTitle from '../components/home/sectionTitle'
	import baseLine from '../components/baseLine'
	import myfooter from '../components/footer'
	
	import { Lazyload } from 'mint-ui';
	export default {
		data(){
			return {
				datas:{
					swiper:[],
					section1:{},
					section2:{},
					section3:{},
					section4:{}
				},
				dom: [{
		          num1: '',
		          num2: '',
		          num3: ''
		         }, {
		          num1: '',
		          num2: '',
		          num3: ''
		         }, {
		          num1: '',
		          num2: '',
		          num3: ''
		         }, {
		          num1: '',
		          num2: '',
		          num3: ''
		         }]
			}
		},
		beforeCreate() {
			//请求mock模拟数据，这边的$http是在main.js中定义好的axios异步请求
			this.$http({
		      method: 'post',
		      url: '/indexPage'
		   }).then((response) => {
		      this.datas = response.data;
		     //计算倒计时，调用计算方法setTime，通过改变data中的dom值，改变页面中的时间
		      for(var i=0;i<response.data.section3.listImg.length;i++){
		      	this.setTime(response.data.section3.listImg[i].time,this.dom[i])
		      }	      
	    }).catch(function(error) {
	      alert(error)
	    })
		},
		mounted(){
		},
		methods: {
			//section3部分，倒计时逻辑计算
			setTime:function(endTime,dom){
				let end = new Date(endTime).getTime();
				let now = 0;
				let leftTime = 0;
				let hour = '';
				let minute = '';
				let second = '';
				setInterval(() => {
					now = new Date().getTime();
					if(now >= end){
						hour = '00';
						minute = '00';
	             		second = '00';
	             		return;
					}else{
						leftTime = parseInt(end-now);
						second = parseInt(leftTime / 1000 % 60);
						minute = parseInt(leftTime / 1000 / 60 % 60);
						hour = parseInt(leftTime / 1000 / 60 / 60 % 24 );
						second = checkTime(second);
						minute = checkTime(minute);
						hour = checkTime(hour);
					}					
					dom.num1 = hour;
		            dom.num2 = minute;
		            dom.num3 = second;
				},1000)		
				function checkTime(i){ //将0-9的数字前面加上0
					  if(i<10) 
					  { 
					    i = "0" + i; 
					  } 
					  return i; 
				} 
			}
		},
		components:{
			homeSwiper,
			homeBanners,
			sectionTitle,
			baseLine,
			myfooter
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.home{
		padding-bottom: 56px;
	}
	.homeHead{
		position:relative;
		height: 50px;
		background: #fff;
		line-height: 50px;
		h2{
			text-align: center;
			font-size: 20px;
			color:#333;
		}
		.search_btn_box{
			position:absolute;
			right:10px;
			top:0;
			z-index:20;
			width:40px;
			height:100%;
			text-align: center;
		}
		
	}
	.homeService{
		padding: 10px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #eee;
		font-size: 14px;
	}
	.section1{
		margin-top: 20px;
		overflow:hidden;
		background: #fff;
		border-top: 1px solid #eee;
		ul{
			padding:7px 10px 17px;
			overflow:hidden;
		}
		li{
			float:left;
			width:50%;
			padding:3px;
			box-sizing:border-box;
			a{
				display:block;
			}
		}
	}
	.section2{		
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #eee;
		background: #fff;
		.section2Pro{
			overflow-x: auto;
			/*原生滑动,创建了带有硬件加速的系统级控件，所以效率很高。但是这相对是耗更多内存的，最好在产生了非常大面积的overflow时才应用*/
    			-webkit-overflow-scrolling: touch;
			ul{
				overflow: hidden;
				padding-left: 10px;
				width: 320vw;
			}
			li{
				margin-right: 20px;
				padding: 20px 0;
				float: left;
				width: 26vw;
				img{
					width: 100%;
					background: #666;
					vertical-align: middle;
				}
				h6{
					padding: 6px 0;
					font-weight: bold;
				}
				.price{
					padding: 5px 0;
					text-align: right;
					color: #f63;
					font-size: 16px;
					font-weight: bold;
				}
			}
		}
	}
	.section3{
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #eee;
		background: #fff;
		li{
			a{
				-webkit-display:flex;
				display: flex;
				padding: 20px;
				box-sizing: border-box;
				.proDetail{
					width: 50%;
					h6{
						padding: 10px 0;
						font-size: 18px;
						font-weight: bold;
					}
					p{
						padding-bottom: 6px;
						
					}
					.time{
						font-weight: bold;
						
						span{
							width: 26px;
							height: 26px;
							display: inline-block;
							background: #555;
							text-align: center;
							line-height: 26px;
							color: #fff;
							border-radius: 2px;
							font-size: 14px;
						}
					}
					
				}
				.proImg{
					position: relative;
					width: 50%;
					img{
						width: 100%;
						background: #666;
						vertical-align: middle;
					}
					.price{
						position: absolute;
						bottom: 0;
						right: 0;
						padding: 2px 4px;
						background: #fa0;
						font-size: 12px;
						color: #fff;
					}
				}
			}
		}
	}
	.section4{
		margin-top: 20px;
		padding-top: 10px;
		border-top: 1px solid #eee;
		background: #fff;
		ul{
			overflow: hidden;
		}
		li{
			float: left;
			padding: 10px 10px;
			width: 50%;
			overflow: hidden;
			box-sizing: border-box;
			.proImg{
				position: relative;
				img{
					width: 100%;
					background: #666;
				}
				span{
					position: absolute;
					left: 0;
					bottom: 0;
					padding: 0 10px;
					width: 100%;
					height: 24px;
					line-height: 24px;
					background: rgba(0,0,0,0.3);
					box-sizing: border-box;
					color: #fff;
					font-size: 12px;
				}
			}
			.proDetail{
				h6{
					padding: 5px 0;
					height: 28px;
					line-height: 28px;
					font-size: 18px;
				}
				p{
					color: #f36;
				}
			}
		}
	}
</style>