<template>
	<div class="classifyCon" ref="wrapper">
		<ul>
			<li v-for="(item,index) in classifyData.list">
				<router-link :to="{name:'详情页'}">
					<img v-lazy="item.imgPath"/>
					<p>{{item.title}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		props:['classifyData'],
		beforeCreate(){
			this.$nextTick(() => {
				if (!this.scroll) {
		        	this.scroll = new BScroll(this.$refs.wrapper, {click: true })
		        }
		    })
		}
	}
</script>
<style lang="scss" scoped="scoped">
.classifyCon{
	position: absolute;
	right: 0;
	top: 0;
	overflow: hidden;
	width: 75%;
	height: 100%;
}
ul{
	overflow: hidden;
	padding:10px 5px;
	box-sizing: border-box;
	background: #f2f2f2;
	li{
		float: left;
		width: 25%;
		padding: 5px;
		box-sizing: border-box;
		background: #f2f2f2;
		img{
			width: 100%;
		}
		p{
			font-size: 14px;
			text-align: center;
			line-height: 24px;
		}
	}
}
	
</style>