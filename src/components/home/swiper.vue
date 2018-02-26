
<template >
	<div class="homeSwipeBox">
		<mt-swipe :auto="5000" v-if="swiperArr">
		  <mt-swipe-item v-for="(item,index) in swiperArr">
		  	<router-link :to="{name:'详情页'}">
		  		<img :src="item.imgPath"/>
		  	</router-link>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	export default{
		props:['swiperArr']
	}
</script>
<style lang="scss" scoped="scoped">
	.homeSwipeBox{
		/*vw:相对于视口的宽度。视口被均分为100单位的vw,这里是为例实现移动端常出现的，高度随宽度变化*/
		height:50vw;
		img{
			width: 100%;
		}
	}
</style>