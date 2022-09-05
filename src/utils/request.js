import axios from 'axios'
import router from '../plugins/router'
// import store from '@/store'

const service = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
    // config.headers['userToken'] = localStorage.getItem('userToken')
    // config.headers['userToken'] = "b93e73243ad08d6443135ce198c59894"
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.resultCode === undefined) {
      return res
    } if (res.resultCode === '3004') {
      router.push('/login');
    }
    if (res.resultCode !== '2000') {
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
