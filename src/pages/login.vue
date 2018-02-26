<template>
	<div class="login">
		<head-back headName="登录"></head-back>
		<section class="loginBox">
			<form action="" method="post">
				<div class="list">
					<input type="text" placeholder="用户名" v-model="userName"/>
				</div>
				<div class="list">
					<input type="text" placeholder="手机号" v-model="phoneNumber"/>
				</div>
				<div class="list">
					<input type="password" v-model="password" placeholder="密码" />
				</div>
				<p class="tips">Tip : 请填写11位手机号码，密码不得低于6位</p>
				<span class="loginBtn" @click="login">立即登录</span>
			</form>
		</section>
	</div>
</template>
<script>
	import headBack from '../components/headBack'
	import { Toast } from 'mint-ui';
	import {setStorage,getStorage} from '../assets/storage'
	export default{
		data(){
			return {
				userName:'',
				phoneNumber:'',
				password:''
			}
		},
		methods:{
			login:function(){
				if(this.userName =='' || this.phoneNumber == '' || this.password == ''){
					Toast({
					  message: '用户名 / 手机号 / 密码不能为空',
					  duration: 3000
					});
				}else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phoneNumber))){
					Toast({
					  message: '请检查手机号是否填写正确',
					  duration: 3000
					});
				}else if(this.password.length < 6 ){
					Toast({
					  message: '密码需要6位或6位以上',
					  duration: 3000
					})
				}else{
					//将用户名，手机号，密码存入本地存储
					let newUser = {userName: this.userName ,phoneNumber:this.phoneNumber,password:this.password}
					setStorage('user',newUser);
					this.$router.push('/my')
				}
			}
		},
		components:{
			headBack
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.login{
		height: 100%;
		background: #fff;
		.loginBox{
			padding-top: 30px;
		}
		.list{
			padding:25px 18vw;
			height: 30px;
			line-height: 30px;
			input{
				display: block;
				width: 100%;
				height: 30px;
				line-height: 30px;
				border-bottom: 1px solid #bbb;
			}
		}
		.tips{
			padding-left: 18vw;
			font-size: 12px;
			color: #999;
		}
		.loginBtn{
			margin: 30px;
			display: block;
			height: 46px;
			background: #fa2;
			line-height: 46px;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			font-size: 16px;
			letter-spacing: 2px;
			font-weight: bold;
		}
	}
</style>