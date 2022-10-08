# znxy.js

### 版本

2.0.0

### 说明

功能：智能问诊、一对一问卷信息采集

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

### 自定义组件传参说明

- 年月日-日期滚轮组件

- 标尺组件

- 单选组件

- 多选组件

#### 年月日-日期滚轮组件

```js
 // 举例
 this.defaultAge = new Date()  
 this.diagnose.answer([
        {
          name: "年",
          value: this.defaultAge.getFullYear(),
        },
        {
          name: "月",
          value: this.defaultAge.getMonth() + 1,
        },
        {
          name: "日",
          value: this.defaultAge.getDate(),
        },
 ]);
```

#### 标尺组件

```js
 // 举例身高 腰围  
 // 共有三种传参方式 带不带单位是否包装成对象数组需要与算法同事约定
 this.diagnose.answer("170");
 this.diagnose.answer("170cm");
 this.diagnose.answer([{
     name :  "cm",
     value : "170",
 }])

 
```

#### 单选组件

```js
 // 举例 您的工作类型是？ 回答：重体力劳动
 this.diagnose.answer("重体力劳动");
```

#### 多选组件

```js
// 有两种传参方式 具体跟算法同事约定 一般是第一种
// 举例 您喜欢的运动有哪些？ 回答： 乒乓球、网球、游泳
 this.diagnose.answer(["乒乓球","网球","游泳"])
// 举例 您喜欢的运动有哪些？ 回答： 乒乓球、网球、游泳
 let param = {
    'answer' : '确定',
    'selected_sports' : ["乒乓球","网球","游泳"]
}
 this.diagnose.answer('我喜欢乒乓球、网球、游泳', undefined, undefined,param );
```
