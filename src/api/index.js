import ajax from './ajax';
// params穿参数拼接在url后面
//1、根据经纬度获取位置详情
// let api = '/api'
export const reqAddress = (geohash)=>ajax('/api/position/'+geohash)
// [2、获取食品分类列表
export const reqCategory = () =>ajax('/api/index_category')
// [3、根据经纬度获取商铺列表
export const reqShopList = (latitude,longitude) =>ajax('/api/shops',{latitude,longitude})
// [4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash,keyword)=>ajax('/api/search_shops',{geohash,keyword})
// [5、获取一次性验证码
export const reqCaptcha = ()=>ajax('/api/captcha')
// [6、用户名密码登陆
export const reqLoginpwd = (name,pwd,captcha)=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')
// [7、发送短信验证码
export const reqSendCode = (phone) =>ajax('/api/sendcode',{phone})
// [8、手机号验证码登陆
export const reqLoginSms = (phone,code) =>ajax('/api/login_sms',{phone,code},'POST')
// [9、根据会话获取用户信息
export const reqUserinfo = () =>ajax('/api/userinfo')
// [10、用户登出
export const reqLoginOut = () =>ajax('/api/logout')
//获取商品
export const reqGoods = ()=> ajax('/shop_goods')
//获取商品评价
export const reqRatings = ()=> ajax('/shop_rate')
//获取商品信息
export const reqInfos = ()=> ajax('/shop_info')

