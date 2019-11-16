<template>
    <div></div>
</template>

<script>
    export default {
        name: "Index",
        mounted () {
            axios
            .get('http://202.85.223.75:8090/zpark/ZparkFloorController/queryAllEnergyConsumption')
                .then(response => (this.info = response))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        }

    }
</script>

<style scoped>

</style>
