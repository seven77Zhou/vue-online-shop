
<template >
	<div class="homeBanner">
		<router-link :to="{ name: '详情页'}">
			<img :src="sectionData.banner"/>
		</router-link>	
	</div>
</template>
<script>
	export default{
		props:['sectionData']
	}
</script>
<style scoped="scoped">
	img{
		width: 100%;
	}
</style>
