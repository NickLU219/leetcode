<template>
    <picker :config="config" v-slot="slotProps">
        <div >{{slotProps}}</div>
    </picker>
</template>

<script setup>
import Picker from '../../components/base/picker/Picker.vue'
import { onMounted, reactive } from "vue";
import base from '@/api/base.js'
let config = reactive({
    // el: '#input',
    data:[]
})

onMounted(async() => {
    let res = await base.commonPost('/govReportAction/getOrgList',{})

config.data[0] = res.map(i => ({
    title: i.orgName,
    value: i.orgId
}))
console.log(config)
})
  
</script>

<style lang="scss" scoped>

</style>