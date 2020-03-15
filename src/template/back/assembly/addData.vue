<template>
    <div>{{addDatas}}</div>
</template>

<script>
    export default {
        name: "addData",
        props:['addDatas'],
        watch:{
            addDatas(){
                this.aData=this.value;
            }
        },
        data(){
            return {
                aData:'',
            }
        }
    }
</script>

<style scoped>

</style>