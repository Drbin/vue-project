<template>
    <div>
        <input v-model="keyData" />
        <addData/>

    </div>
</template>

<script>
    import addData from '@/template/back/assembly/addData'
    export default {
        name: "index",
        data(){
            return {
                keyData:'',
            }
           
        },
        components: {
            addData
        },
    }
</script>

<style scoped>

</style>