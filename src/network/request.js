import axios from 'axios'


export function request(config) {

    // return new Promise((resolve,reject) => {
        const instance = axios.create({
            baseURL: 'http://106.54.54.237:8000/api/v1',
            timeout: 5000
        })

        // instance.interceptors.request.use(config => {//请求拦截
          
        //     return config
        // },err => {
        //     // console.log(err);
        // })

        // instance.interceptors.response.use(res => {//响应拦截
        //     return res.data
        // },err => {
        //     console.log(err);
            
        // })
            
        return instance(config)
        // .then(res => {
        // resolve(res)
        // }).catch(err => {
        // reject(err)
        // })
    
    // })
    
}