## VueCliModel
### 一、说明
保留一份常用的vue项目搭建模板
### 二、预装库和插件
```
vue
vuex
vueRouter(history)
axios
eslint
stylus
```
### 三、环境要求
提前安装好node和npm **node 10+** **npm 6+**

### 四、项目运行命令
```
npm install
npm run serve
npm run build
npm run lint
```
### 五、文件目录及说明
```
|--public                        对外输出文件夹
    |--favicon.ico               浏览器标签栏显示的网址图标
    |--index.html                项目打包完毕输出时的跟路径
|--src                           源码文件夹
    |--api                       异步请求
        |--api.js                axios封装
        |--config.js             axios配置
        |--index.js              接口挂载
        |--interface.js          接口文件
    |--assets                    静态目录
        |--icon                  字体目录
        |--global                全局图片目录（单模块图片按模块设置文件夹）
    |--components                组件
        |--global                全局组件（单组件按模块设置文件夹）
    |--filters                   过滤
    |--router                    路由
    |--store                     存储
    |--utils                     公共函数
    |--views                     视图
    |--App.vue                   根组件
    |--main.js                   主入口
    |--.browserslistrc           浏览器兼容
    |--.eslintrc.js              eslint配置
    |--.gitignore                git忽略
    |--.pretterrc                pretter配置（处理与eslint冲突）
    |--babel.config.js           babel配置
    |--package-lock.json         锁定安装时的包的版本号文件
    |--package.json              依赖目录
    |--README.md                 项目说明
    |--vue.config.js             项目配置       
```        