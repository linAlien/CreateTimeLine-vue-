# create-time-line
时间轴


### 下载该组件 
```javascript

npm install create-time-line

```

### 组件的使用

在main.js里引用该组件
```javascript

import CreateTimeLine from "create-time-line";

Vue.use(CreateTimeLine);

``` 
使用组件
```html
<template>
  <CreateTimeLine @click="clickItem"  :timeLineList="timeLineList"></CreateTimeLine>
</template>

<!-- 数据格式 -->
data() {
    return {
      timeLineList: [{
        id: 1,
        timestamp: '2013-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司6'
      },{
        id: 2,
        timestamp: '2014-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司03'
      },{
        id: 3,
        timestamp: '2015-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司02'
      },{
        id: 4,
        timestamp: '2016-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司01'
      },{
        id: 5,
        timestamp: '2017-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司11'
      },{
        id: 6,
        timestamp: '2018-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司12'
      },{
        id: 7,
        timestamp: '2019-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司13'
      },{
        id: 8,
        timestamp: '2020-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司14'
      },
      {
        id: 9,
        timestamp: '2017-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司11'
      },{
        id: 10,
        timestamp: '2018-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司12'
      },{
        id: 11,
        timestamp: '2019-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司13'
      },{
        id: 12,
        timestamp: '2020-10-6',
        info: '工作室更名为：西安拓美网络科技有限公司14'
      }],
    }
  }

  methods: {
    clickItem(item){
      console.log(item);
    }
  }
```


### 参数
参数 | 类型 | 默认值 | 说明
---|---|---|---
id | String | id | 数据唯一字段
info | String | info | 需展示说明值字段
timestamp| String | timestamp | 展示数据底部字段
showNum | Number | 8 | 展示条数
timeLineList| Array | [] | 数据
click | function | | 点击回调函数









