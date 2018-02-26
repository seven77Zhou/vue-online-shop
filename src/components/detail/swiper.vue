
<template >
	<div class="detailSwipeBox">
		<mt-swipe :auto="5000" v-if="swiperArr">
		  <mt-swipe-item v-for="(item,index) in swiperArr">
		  	<img :src="item.imgPath"/>
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
	.detailSwipeBox{
		/*vw:相对于视口的宽度。视口被均分为100单位的vw,这里是为例实现移动端常出现的，高度随宽度变化*/
		height:100vw;
		img{
			width: 100%;
		}
	}
</style>