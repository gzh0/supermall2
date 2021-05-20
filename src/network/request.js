import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = new axios.create({
    //baseURL:'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });

  //2.axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {

  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  //3.发送真正的网络请求
  return instance(config)
}
