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
  <CreateTimeLine  @click="clickItem"  :timeLineList="timeLineList"></CreateTimeLine>
</template>

<!-- 数据格式 -->
data() {
    return {
      timeLineList: [{
        id: 1,
        timestamp: '2013-10-6',
        info: '入院',
        start: true,
        end: false,
      },{
        id: 2,
        timestamp: '2014-10-6',
        info: '入科'
      },
      {
        id: 3,
        timestamp: '2015-10-6',
        info: '换床'
      },{
        id: 4,
        timestamp: '2016-10-6',
        info: '出院',
        start: false,
        end: true,
      },{
        id: 5,
        timestamp: '2017-10-6',
        info: '入院',
        start: true,
        end: false,
      },{
        id: 6,
        timestamp: '2018-10-6',
        info: '换科'
      },{
        id: 7,
        timestamp: '2019-10-6',
        info: '出院',
        start: false,
        end: true,
      },{
        id: 8,
        timestamp: '2020-10-6',
        info: '入院',
        start: true,
        end: false,
      },
      {
        id: 9,
        timestamp: '2017-10-6',
        info: '入科'
      },{
        id: 10,
        timestamp: '2018-10-6',
        info: '换科'
      },{
        id: 11,
        timestamp: '2019-10-6',
        info: '换科'
      },{
        id: 12,
        timestamp: '2020-10-6',
        info: '出院',
        start: false,
        end: true,
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
selectIdValue | Number，String | -1（将选中最后一条数据）| 起始选中数据
timeLineList| Array | [] | 数据
click | function | | 点击回调函数

注： 需要标明区段必须给起始点数据加上start: true, 末尾点数据加上end: true;






