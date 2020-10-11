
import timeLine from './timeLine.vue'


let createTimeLine = {};

createTimeLine.install = function(Vue){
    Vue.component(timeLine.name, timeLine)
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(timeLine);
    }
}

export default createTimeLine;