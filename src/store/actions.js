// 通过commit() 触发mutations间接更新state的值 ，可以和后台交互的异步操作
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS
} from './mutations-type';
import {reqAddress,reqCategory,reqShopList} from '../api';
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
    }
}
