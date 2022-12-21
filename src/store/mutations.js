// 多个直接更新state的方法，同步
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
} from './mutations-type';
import Vue from 'vue';
export default {
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORY](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state,{user_Info}){
      state.user_Info = user_Info
    },

    [RECEIVE_INFO](state, {infos}) {
      state.infos = infos
    },
  
    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },
  
    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    },
}