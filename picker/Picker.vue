<template>
    <slot></slot>
    <teleport to="body">
        <div id="cover" :class="[ifShow?'show':'']" @click="cancer">
            <div id="picker" :class="[ifShow?'show':'']" @click.stop="()=>{}">
                <div class="picker-header">
                    <span class="cancel" @click="cancer">取消</span>
                    <span class="confirm" @click="confirm">确定</span>
                </div>
                <div class="picker-items">
                    <div class="picker-items-col" 
                        v-for="(list, i) in config.data" :key="'list'+i"
                        @touchstart="touchstartHandler"
                    >
                        <div class="picker-items-col-wrapper">
                            <div class="picker-item" v-for="(item, i) in list" :key="'item'+i">{{item.title}}</div>
                        </div>
                    </div>
                    <div class="picker-line picker-line-top"></div>
                    <div class="picker-line picker-line-bottom"></div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { defineProps, ref, toRefs } from "vue";
let props = defineProps({
    config: {
        el: String,
        data: {
            type: Array,
            default: []
        },
        defaultValue: Object,
        autoHide: Boolean,
        cellHeight: {
            type: String,
            default: '.36rem'
        },
        beforeInit: Function,
        onInit: Function,
        onChange: {
            type: Function,
            default: (value) => {
                console.log('onChange',value)
            }
        },
        onChangeEnd: {
            type: Function,
            default: (value) => {
                console.log('onChangeEnd',value)
            }
        },
        onConfirm: {
            type: Function,
            default: (value) => {
                console.log('onConfirm',value)
            }
        }

    }
})
console.log('------>', props)
let {config} = toRefs(props)
let ifShow = ref(true)
let selectedArray = ref([])

let hide = () => ifShow.value = false
let cancer = () => hide()
let confirm = () => {
    props.onConfirm(selectedArray)
    hide()
}

let touchStartY = 0, touchMovedY = 0, thisIndex = 0;
let lastMoveTime = 0, lastMoveStart = 0, stopInertiaMove = false;
let touchstartHandler = e => {
    console.log(e)
    touchStartY = e.touches[0].pageY;
    thisIndex = 0;
    // 惯性
    lastMoveStart = touchStartY;
    lastMoveTime = Date.now();
    stopInertiaMove = true;
}


</script>

<style lang="scss" scoped>
#cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    visibility: hidden;
    opacity: 0;
    transition: .6s;
    z-index: 9999999;
    &.show {
        visibility: visible;
        opacity: .5;
        transition: .3s;
    }
}
#cover.show,
#picker {
    transition: .3s;
    z-index: 99999999;
}

#picker {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    &.show {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}


.picker-header {
    position: relative;
    background-color: #f2f2f4;
    height: .8rem;
    line-height: .8rem;
    z-index: 3;
    color: #007af0;
    font-size: .34rem;
}

.picker-header .cancel {
    position: absolute;
    top: 0;
    left: .3rem;
}

.picker-header .confirm {
    position: absolute;
    top: 0;
    right: .3rem;
}

.picker-items {
    position: relative;
    height: 4.32rem;
    overflow: hidden
}

.picker-items-col {
    float: left;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
}

.picker-item {
    height: .6rem;
    line-height: .6rem;
    font-size: .4rem;
    box-sizing: border-box;
    left: 0;
    color: #000;
    width: 100%;
    text-align: center;
    z-index: 1
}

.picker-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.8rem;
    z-index: 10;
    /*!* autoprefixer: off *!*/
    background: -webkit-linear-gradient(top, #fff, hsla(0, 0%, 100%, .7));
    background: linear-gradient(top, #fff, hsla(0, 0%, 100%, .7));
    border-bottom: .02rem solid #ddd;
    pointer-events: none
}

.picker-line-bottom {
    top: auto;
    bottom: 0;
    border-top: .02rem solid #ddd;
    border-bottom: none;
    /*!* autoprefixer: off *!*/
    background: -webkit-linear-gradient(bottom, #fff, hsla(0, 0%, 100%, .7));
    background: linear-gradient(bottom, #fff, hsla(0, 0%, 100%, .7))
}
</style>