<template>
    <div class="date_body">
        <div id="clock">
            <p class="date">...404 error page...</p>
            <p class="time">15:07:15</p>
            <p class="text">2020-02-25 星期二</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "404"
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
    #clock{
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
    #clock .time {
        letter-spacing: 0.05em;
        font-size: 60px;
        padding: 5px 0;
    }
    #clock .date {
        letter-spacing: 0.1em;
        font-size: 15px;
    }
    #clock .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
</style>