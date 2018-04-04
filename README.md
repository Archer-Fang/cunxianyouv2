# cunxianyouv2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## api接口说明
>1.配置http代理表
``` bash
proxyTable: {
      '/api2': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/api2': '/'
        }
      },
        '/api': {
          target: 'https://news-at.zhihu.com/api/4',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
      }
    },
```
>2.定义常量
``` bash
const urlBase = '/api/';
const urlBase2 = '/api2/';
```
>3.用常量表示跨域的url
``` bash
post:axios.post(urlBase2+'v1/captchas',{})//base64编码的验证码图片
	 axios.post('/api2/v2/login',{
                                    username:this.phoneNumber,
                                    password:this.password,
                                    captcha_code: this.captcha
                                  })
post查看数据，百度post模拟，输入url+变量
人文页数据：
get:axios.get(urlBase + 'news/before/' + now) //例子：now='20180404'
    api:https://news-at.zhihu.com/api/4/news/before/20180404
```
#axios用法：https://github.com/axios/axios

