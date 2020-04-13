<template>
    <div>{{sendArr}}</div>
</template>

<script>
    export default {
        name: "addData",
        props:{
            addDatas:{
                type:String,
                default:function(){
                    return ''
                }
            }
        },
        mounted(){
            this.aData=this.addDatas
        },
        watch:{
            addDatas:{
                handler(newVal){
                    window.console.log(newVal)
                    this.sendArr=newVal
                },
                deep:true
            }

        },
        data(){
            return {
                sendArr:this.addDatas,
            }
        }
    }
</script>

<style scoped>

</style>