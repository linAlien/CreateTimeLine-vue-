<template>
    <!--时间线-->
    <div class="time-line" style="display:flex;">
        <div class="container">
            <div style="display:flex;">
                <div style="flex:1;display:flex;flex-direction:column">
                    <div style="flex:1;display:flex;">
                        <div style="flex:1;"></div>
                        <div class="move-button"  :disabled="left_button_disabled" @click="moveLeft()">
                            <div class="icon-button" v-bind:class="{'botton-active': left_button_active}" >
                                <i class="iconfont icon-jiantou_zuo" style="transform: scale(0.4) !important;"></i>
                            </div>
                        </div>
                        <div class="item"></div>
                    </div>
                    <div class="item_bottom">
                        <span style="color:white;">左</span>
                    </div>
                </div>


                <template v-for="(item, index) in timeLineList" >
                    <div  :key="item[id]" v-if="timeLineList.length <= showNum" style="flex:1;display:flex;flex-direction:column;">
                        <div style="flex:1;display:flex">
                            <div class="item"></div>
                            <el-tooltip effect="light" placement="top" :popper-class="'create-time-line-tooltip'">
                                <div slot="content">{{item[info]}}</div>
                                <div class="dot" @click="clickItem(item)" @mouseover="changeActive(item[id])" :class="{active: item[id] === timeIndex}"></div>
                            </el-tooltip>
                            <div class="item"></div>
                        </div>
                        <div class="item_bottom">
                            <span>{{item[timestamp]}}</span>
                        </div>
                    </div>
                    <div :key="item[id]" v-if="index > point && index <= point_end && timeLineList.length > showNum" style="flex:1;display:flex;flex-direction:column;">
                        <div style="flex:1;display:flex">
                            <div class="item"></div>
                            <el-tooltip effect="light" placement="top" :popper-class="'create-time-line-tooltip'">
                                <div slot="content">{{item[info]}}</div>
                                <!-- <div class="dot" @click="clickItem(item)" @mouseover="changeActive(item[id])" :class="{active: item[id] === timeIndex}"></div> -->
                                <div class="dot" @click="clickItem(item)" :class="{active: item[id] === timeIndex}"></div>
                            </el-tooltip>
                            <div class="item"></div>
                        </div>
                        <div class="item_bottom">
                            <span>{{item[timestamp]}}</span>
                        </div>
                    </div>
                </template>

                <div style="flex:1;display:flex;flex-direction:column;">
                    <div style="flex:1;display:flex">
                        <div class="item"></div>
                        <div class="move-button" :disabled="right_button_disabled" @click="moveRight()">
                             <div class="icon-button" v-bind:class="{'botton-active': right_button_active}" >
                                <i class="iconfont icon-jiantou_you" style="transform: scale(0.4) !important;"></i>
                            </div>
                        </div>
                        <div style="flex:1;"></div>
                    </div>
                    <div class="item_bottom">
                        <span style="color:white;">右</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'CreateTimeLine',
    props: {
        timeLineList: {
            type: Array,
            default: []
        },
        id: {
            type: String,
            default: 'id',
        },
        info: {
            type: String,
            default: 'info'
        },
        timestamp: {
            type: String,
            default: 'timestamp'
        },
        showNum: {
            type: Number,
            default: 8
        }

    },
    data() {
        return {
            timeIndex: this.timeLineList[this.timeLineList.length-1][this.id], //默认当前选择的为最近的时间点
            //时间轴只展示7个,初始为最后7个(不够只展示长度)
            point: this.timeLineList.length > this.showNum ? this.timeLineList.length-this.showNum : this.timeLineList.length,
            point_end: this.timeLineList.length-1,
            right_button_active: false,
            left_button_active: true,
            left_button_disabled: false,
            right_button_disabled:true,
        }
    },
    created(){
        console.log(this.point);
    },
    methods: {
        changeActive(id) {
            this.timeIndex = id;
        },
        clickItem(item){
            this.timeIndex = item[this.id];
            this.$emit('click', item);
        },
        moveLeft()  {
            if(this.point>0){
                this.point -= 1
                this.point_end -= 1
                this.right_button_disabled = false
                this.right_button_active = true
                if(this.point===0){
                    //如果移到第一个时间点，设置左按钮不可点击
                    this.left_button_disabled = true
                    this.left_button_active = false
                }
            }
        },
        moveRight() {
            let timeLineListLen = this.timeLineList.length;

            if(this.point_end < timeLineListLen-1){
                this.point += 1
                this.point_end += 1
                this.left_button_disabled = false
                this.left_button_active = true
                if(this.point_end===this.timeLineList.length-1){
                    //如果移到最后一个时间点，设置右按钮不可点击
                    this.right_button_disabled = true
                    this.right_button_active = false
                }
            }
        }
    }
}
</script>

<style  scoped>
@import "../assets/icon/iconfont.css";
.container{
    width: 100%;
    height: 30px;
    margin-left: 0px;
    padding-left: 0px;
    margin-bottom: 5px;
}
.dot{
    border: 3px solid #d3d3d3;
    width: 12px;
    height: 12px;
    border-radius: 15px;
    background: white;
    margin: 1px 0px;
    box-sizing: border-box;
}
.dot:hover{
    border: 5px solid #376FFF;
}
.item{
    flex:1;
    border-bottom:1px solid #d3d3d3;
    margin-bottom: 9px;
    box-sizing: border-box;
}

.item_bottom{
    flex:1;
    text-align:center;
    height: 15px;
    margin-top:7px;
    font-size: 12px;
}
.move-button {
    height: 17px;
    border-radius: 19px;
    background: white;
    text-align: center;
    box-sizing: border-box;
}
.active{
    background-color: #fff !important;
    border: 5px solid #376FFF;
}
.icon-button{
    height: 30px;
    width: 10px;
    line-height: 30px;
    background: #376FFF;
    color: #fff;
    text-align: center;
    position: relative;
    top: -7px;
    font-size: 10px;
    cursor: pointer;
}
.botton-active{
    background: #376FFF;
}

</style>
<style>
.create-time-line-tooltip{
    border: 1px solid #d3d3d3 !important;
}
.create-time-line-tooltip .popper__arrow:after{
    border-right-color: #d3d3d3;
    border-left-color: #d3d3d3;
}
</style>
