import Mock from 'mockjs'
import data from './data.json'
// 商品
Mock.mock('/shop_goods',{code:0,data:data.goods})
// 商品信息
Mock.mock('/shop_info',{code:0,data:data.infos})
// 商品评价
Mock.mock('/shop_rate',{code:0,data:data.ratings})