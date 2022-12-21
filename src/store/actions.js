// 通过commit() 触发mutations间接更新state的值 ，可以和后台交互的异步操作
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
} from './mutations-type';
import {reqAddress,reqCategory,reqShopList,reqGoods,reqRatings,reqInfos} from '../api';
export default { 
    // 获取异步地址
   async getAddress({commit,state}){
           // 发送ajax请求
        const geohash = state.latitude+','+state.longitude
        const res = await reqAddress(geohash)
          // 提交mutations
        if(res.code==0){
            const address= res.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //获取商品分类
    async getCategorys({commit,state}){
        const res = await reqCategory()
        if(res.code==0){
         const categorys = res.data
         commit(RECEIVE_CATEGORY,{categorys})
        }
     },
     //获取商铺列表
     async getShopList({commit,state}){
        const {latitude,longitude} = state
        const res = await reqShopList(latitude,longitude)
        if(res.code==0){
            const shops = res.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    //获取商品
    async getGoodsList({commit}){
      const res = await reqGoods()
      if(res.code==0){
         const goods = res.data
         commit(RECEIVE_GOODS,{goods})
       }
     },
    //获取商品评价
    async getGoodsRate({commit}){
      const res = await reqRatings()
      if(res.code==0){
         const rate = res.data
         commit(RECEIVE_RATINGS,{rate})
       }
     },
     //获取商品信息
     async getGoodsInfo({commit}){
      const res = await reqInfos()
      if(res.code==0){
         const infos = res.data
         console.log(infos);
         commit(RECEIVE_INFO,{infos})
       }
     },

    // 同步记录用户信息
    recordUser({commit},userInfo){
      commit(RECEIVE_USER_INFO,{userInfo})
    },



}
