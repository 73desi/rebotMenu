<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" id="equipment"></a>
      </div>
      <div class="navbar-header">
        <a class="navbar-brand" id="home"></a>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li><a id="timer"></a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </nav>
</template>

<script>
export default {
  created() {
    this.getTimes()
  },
  data() {
    return {
      status: 0,
    }
  },
  mounted() {
    document.addEventListener('visibilitychange', function (e) {
      let state = document.visibilityState
      if (state == 'hidden') {
        document.getElementById("home").innerHTML = "别走嘛〒▽〒";
      }
      if (state == 'visible') {
        document.getElementById("home").innerHTML = "你回来啦(☆▽☆)";
      }
    });
    document.getElementById("home").innerHTML = "欢迎ヾ(≧▽≦*)o";
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (flag) {
      document.getElementById("equipment").innerHTML = "手机用户"
    } else {
      document.getElementById("equipment").innerHTML = "电脑用户"
    }
  },
  methods: {
    getTimes() {
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval: function () {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      document.getElementById("timer").innerHTML = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    }
  },
  beforeDestroy() {
    if (this.times) {
      clearInterval(this.getTimesInterval);
    }
  },
  watch: {
    status() {
      switch (this.status) {
        case 1:
          break;
        case 2:
          break;
        default:
          break;
      }
    }
  }

}
</script>

<style scoped lang="scss">
</style>
<style>
.navbar {
  margin-bottom: 0px !important;
}
@media screen and (max-width:970px){
  .container-fluid{
    display: flex;
    justify-content: space-between;
  }
}
</style>