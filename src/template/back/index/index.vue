<template>
    <div>
        <input v-model="keyData" :addDatas='keyData' />
        <addData/>

    </div>
</template>

<script>
    import addData from '@/template/back/assembly/addData'
    export default {
        name: "index",
        data(){
            return {
                keyData:'dsasda',
            }
           
        },
        components: {
            addData
        },
    }
</script>

<style scoped>

</style>