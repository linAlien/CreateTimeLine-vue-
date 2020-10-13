<template>
  <div id="app">
    <div style="width: 100%">
      <CreateTimeLine @click="clickItem" :timeLineList="timeLineList"></CreateTimeLine>
    </div>
  </div>
</template>

<script>
import CreateTimeLine from './components/timeLine.vue'

export default {
  name: 'app',
  components: {
    CreateTimeLine
  },
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
                },
                {
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
  },
  methods: {
    clickItem(item){
      console.log(item);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  margin-top: 60px;
  padding: 100px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
