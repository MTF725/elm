import axios from 'axios';
axios.defaults.withCredentials = true;
//网络请求地址 头
axios.defaults.withCredentials = true;
let URL_T = 'https://elm.cangdu.org';
export default {
  /*
封装axios的get请求           只用于获取数据
@param url 请求的地址
@param respnse 请求成功的回调
@param exception 请求异常的回调
*/
  get(url,respnse, exception) {
    axios({
      method: "get",
      url: URL_T + url,
      timeout: 20*1000,//超时时间
      header: {
        "Content-Type": "application/json;charset=UTF-8"//请求头
      }
    }).then((result) => {
      respnse(result.data)
    }).catch((error) => {
      exception(error)
    });
  },
/*
  封装axios的post请求           用于传递参数
  @param url 请求的地址
  @param data 请求传递的参数
  @param respnse 请求成功的回调
  @param exception 请求异常的回调
    */
  post(url, data, respnse, exception) {
    axios({
      method: "post",
      url: URL_T + url,
      data:data,
      timeout: 20*1000,
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
    }).then((result) => {

      respnse(result.data);
    }).catch((error) => {
      exception(error);

    });
  },

}
