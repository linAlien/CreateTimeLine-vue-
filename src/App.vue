<template>
  <div id="app">
    <div style="width: 100%">
      <CreateTimeLine @click="clickItem" :timeLineList="timeLineList" :selectIdValue="10"></CreateTimeLine>
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
      }
      ],
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
  font-family: Arial, sans-serif;
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
