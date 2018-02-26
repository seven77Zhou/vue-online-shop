import Vue from 'vue'
import * as types from '../mutation-type'

const state = {
	activePro : {},//当前的商品
	oldProList : [],//购物车已存在的商品列表
	productsNum : 0,//支付商品数量
	productsPay : 0,//支付商品总价
	payList : [],//需要支付的商品列表
	oldOrderData : {},//购买过的订单
	oldOrderId : 0,
	classifyIndex : 0,//当前所选商品分类
	classifyList:{}//当前所选商品分类对应的商品列表
}

const mutations = {
	[types.SET_PRODUCT]:(state,data) => {
		state.activePro=data;
	},
	[types.ADD_PRODUCT]:(state)=>{
		let newData = JSON.stringify(state.activePro)	
		state.oldProList.push(JSON.parse(newData))
	},
	[types.DEL_PRODUCT]:(state,data)=>{
		//遍历购物车数据，符合删除条件的删除
		for(var i=0; i<state.oldProList.length; i++){
			if(state.oldProList[i].info.id==data.id&&state.oldProList[i].info.price==data.price){
				state.oldProList.splice(i,1);
				break;
			}
		}
	},
	[types.ADD_PAY]:(state,price) => {		
		state.productsNum++;
		state.productsPay += price;
	},
	[types.DEL_PAY]:(state,price) => {
		state.productsNum == 0 ? '' : state.productsNum-- ;
		state.productsPay > 0 ? state.productsPay -= price : '';
	},
	[types.ADD_PAYLIST]:(state,data) => {
		state.payList = data
	},
	//存放支付成功后的所有订单信息
	[types.ADD_ORDERLIST]:(state) => {
		state.oldOrderId++;
		let newData = JSON.stringify(state.payList)
		state.oldOrderData[state.oldOrderId] = JSON.parse(newData)
	},
	//支付成功后清空购物车数据
	[types.DEL_CART]:(state) => {
		state.oldProList = [];
		state.productsNum = 0
		state.productsPay = 0
		state.payList = []
	},
	//修改当前商品分类
	[types.CHANGE_CLASSIFY_index]:(state,index) => {
		state.classifyIndex = index
	},
	//修改当前商品分类
	[types.CHANGE_CLASSIFY_LIST]:(state,item) => {
		state.classifyList = item
	}
	
	
	
}

export default {
  state,
  mutations
}