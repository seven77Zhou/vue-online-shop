<template>
	<div class="loading">
		<div class="loader">
			<div class="loadingCir">
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			</div>
		</div>
		<p class="loadingText">加载中...</p>
	</div>
</template>
<style lang="scss" scoped="scoped">
	.loading{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.3);
		display: flex;
		align-items: center;
		justify-content: center;
		.loadingText{
			position: absolute;
			top: 52%;
			left: 0;
			width: 100%;
			text-align: center;
			color: #333;
			font-size: 18px;
		}
	}
	.loader {
		width: 15%;
		height: 200px;
		box-sizing: border-box;
		margin-left: 15%;
		margin-top: 100px;
		.loadingCir {
			position: relative;
		}
		.loadingCir i {
			display: block;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-color: #000;
			position: absolute;
		}
		.loadingCir i:nth-child(1) {
			top: 25px;
			left: 0;
			-webkit-animation: loadingCir 1s ease 0s infinite;
		}
		.loadingCir i:nth-child(2) {
			top: 17px;
			left: 17px;
			-webkit-animation: loadingCir 1s ease -0.12s infinite;
		}
		.loadingCir i:nth-child(3) {
			top: 0px;
			left: 25px;
			-webkit-animation: loadingCir 1s ease -0.24s infinite;
		}
		.loadingCir i:nth-child(4) {
			top: -17px;
			left: 17px;
			-webkit-animation: loadingCir 1s ease -0.36s infinite;
		}
		.loadingCir i:nth-child(5) {
			top: -25px;
			left: 0;
			-webkit-animation: loadingCir 1s ease -0.48s infinite;
		}
		.loadingCir i:nth-child(6) {
			top: -17px;
			left: -17px;
			-webkit-animation: loadingCir 1s ease -0.6s infinite;
		}
		.loadingCir i:nth-child(7) {
			top: 0px;
			left: -25px;
			-webkit-animation: loadingCir 1s ease -0.72s infinite;
		}
		.loadingCir i:nth-child(8) {
			top: 17px;
			left: -17px;
			-webkit-animation: loadingCir 1s ease -0.84s infinite;
		}
		@-webkit-keyframes loadingCir{
			50%{ transform:scale(0.4); opacity:.4;}
			100%{ transform:scale(1); opacity:1;}
		}
	}
</style>