# znxy.js

### 版本

2.0.0

### 来源

gitlab：<a href="https://git.zuoshouyisheng.com/frontend/znxy">https://git.zuoshouyisheng.com/frontend/znxy</a>

分支： unfinished-session-recovery

### 配置参数

```js

   {    
        api: 'https://znxy-backend-test.zuoshouyisheng.com', // 算法服务地址
        app_id: '6176737342e6df7f67a63e9d', // 问卷标识 算法提供
        autorender: false, // 使用sdk提供的组件自动渲染
        view: {
          container: '#container', // 视图挂载dom节点
          robot_name: '客服', // 机器人名称 
          robot_photo: 'https://test.png', // 机器人logo
        },
        style: {
          theme: '#4865ff', // 组件主题颜色
        },
        autoscroll: {
          offsetY: 150,   // 自动滚动偏移量
        },
        attach_once: true, // 值为true只在默克项目中旧问卷渲染历史记录中使用 新问卷渲染历史记录则不用默认为false
        init: {
          attachment_dict: JSON.stringify({ name:'zhangtao',age:12}), // 需要携带给算法的数据
        },
   }
```

### 使用方式

该库引入项目后会在浏览器的全局环境下挂载ZNXY对象

```js
 // 需要自定义组件渲染时：
 // 一般在 append-options 回调中处理自定义组件渲染逻辑
 this.diagnose = new window.ZNXY.Diagnose( 以上配置参数对象 )
        .on('append-options', function (d) {  // 问题的选项
             _this.diagnose.render(d)
        })
        .on('append-question', function (d) { // 传来问题
             _this.diagnose.render(d)
        })
        .on('append-answer', function (d) { 
              _this.diagnose.render(d)
        })
        .on('result', function (d) {  
              _this.diagnose.render(d)
        })
        .on('answer', function (d) {
              _this.diagnose.render(d)
        })
        .start()
```

### 


