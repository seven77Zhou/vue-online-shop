<template>
	<div class="head">
		<span class="returnBox" @click="$router.push('/')"><i class="backArrow"></i></span>
		<h3>{{headName}}</h3>
	</div>
</template>
<script >
	export default{
		props:['headName']
	}
</script>
<style lang="scss" scoped="scoped">
.head{
	height: 50px;
	line-height: 50px;
	background: #fff;
	border-bottom: 1px solid #eee;
	.returnBox{
		position: absolute;
		left: 10px;
		top: 0;
		z-index: 10;
		padding-left: 10px;
		width: 20px;
		height: 50px;
		.backArrow{
			display: inline-block;
			width: 10px;
			height: 10px;
			border-bottom: 1px solid #333;
			border-right: 1px solid #333;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}
	}
	h3{
		text-align: center;
		font-weight: bold;
	}
}
</style>