<template>
    <div class="date_body">
        <div class="center_body">
            <p class="date">...404 error page...</p>
            <p class="time">{{time}}</p>
            <p class="text">{{date}}</p>
            <p class="text">[<router-link to="/">返回首页</router-link>]</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "404",
        data(){
            return {
                time: '',
                date: ''
            }

        },
        mounted(){
            this.updateTime();
            setInterval(this.updateTime, 1000);


        },
        methods:{
            updateTime:function () {
                let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

                let cd = new Date();
                this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
                this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];

            },
            zeroPadding:function (num, digit) {
                var zero = '';
                for(var i = 0; i < digit; i++) {
                    zero += '0';
                }
                return (zero + num).slice(-digit);
            }

        }
    }


</script>

<style scoped>
    .date_body{
        height: 100vh;
        width: 100%;
        float: left;
        background: #0f3854;
        background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
        background-size: 100%;}
    .center_body{
        font-family: 'Share Tech Mono', monospace;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    }
    .center_body .time {
        letter-spacing: 0.05em;
        font-size: 60px;
        padding: 5px 0;
    }
    .center_body .date {
        letter-spacing: 0.1em;
        font-size: 15px;
    }
    .center_body .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
    .center_body .text a{ color: #fff;}
</style>