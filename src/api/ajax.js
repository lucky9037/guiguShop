import axios from 'axios';
// 请求函数模块，返回值：promise对象（异步返回的数据是response。）
export default function ajax(url = '',data = {},type='GET') {
    return new Promise(function (resolve,reject) {
        let promise
        if(type == 'GET'){
            // 准备url，query参数
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
              })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
              }
            // 发送get请求
            promise = axios.get(url)
        }else{
            //post请求
            promise = axios.post(url,data)
        }
        promise.then(function (response) {
            // 成功调用
            resolve(response.data)
        })
        .catch(function (error) {
            // 失败调用
            reject(error)
        })
    })
}