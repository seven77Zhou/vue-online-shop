
<template >
	<h3>
		{{sectionNumber}}
		<span class="moreBtnBox"><i class="arrowRight"></i></span>
	</h3>
</template>
<script>
	export default{
		props:['sectionNumber']
	}
</script>
<style lang="scss"  scoped="scoped">
	h3{
		position:relative;
		padding:10px 0;
		font-size:18px;
		text-align: center;
		color:#333;
		.moreBtnBox{
			position:absolute;
			right:10px;
			top:0;
			padding-top:8px;
			width:40px;
			height:38px;
			box-sizing:border-box;
		}
	}
</style>
