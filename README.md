# cunxianyouv2

> 基于村先游竞赛项目前端（用户端）部分的vue全家桶重构<br/>
> 项目源码地址（前端（用户端和管理员端）加后台）：https://github.com/Archer-Fang/cunxianyou<br/>
> 技术栈：vue全家桶（vue vuex vue-router...）+vue-cli（webpack3，scss加载器，等等）+axios（基于promise的http库）+element(UI框架)+scss（简化css写法）+npm+bootstrap<br/>
> 项目说明:项目用户端还有商品详情页和人文详情页，不过这个项目我给它的定位是入门到精通的vue-cli练手项目，13个页面+做实际项目的时候做的自适应页面（pages/index/children/rank.vue 3个）和其中抽取出来的页面应该足够了，该有的也都有了。<br/>
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

