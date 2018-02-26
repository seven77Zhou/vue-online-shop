<template>
  <div id="app">
  	<router-view></router-view>
  	<loading v-show="loadData"></loading>
  </div>
</template>

<script>
import loading from './components/loading'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:{
  	loadData:function(){
  		return this.$store.state.common.showLoading
  	}
  },
  components:{
  	loading
  }
}
</script>

<style lang="scss">
@import './assets/reset';
/*@import './assets/iconfont'; 与sass冲突*/
body{
	background: #f2f2f2;
	overflow-x: hidden;
}
.arrowRight{
	display:inline-block;
	width:10px;
	height:10px;
	border-bottom:1px solid #666;
	border-left:1px solid #666;
	-webkit-transform:rotate(-135deg);
	transform:rotate(-135deg);
}
.oneLine{
	overflow: hidden;
	white-space:nowrap; 
	text-overflow:ellipsis;
}
.font12{
	font-size: 12px;
}
.textCenter{
	text-align: center;
}
</style>
