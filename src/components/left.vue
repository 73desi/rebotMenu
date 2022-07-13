<template>
  <div class="rightBody">
    <div class="thumbnail top">
      <img src="../assets/logo.jpg" alt="" class="img-circle img-thumbnail">
      <h1>73の窝</h1>
      <ul class="list-group">
        <li v-for="(item, index) in ability" :key="index" class="list-group-item">
          <b v-if="item.name != undefined">{{ item.name }}：</b>{{ item.value }}<b>{{item.thanks}}</b>
        </li>
      </ul>
      <div>
        <p id="runningTime"></p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      ability: [
        { name: "使用的框架", value: "Mirai"},
        { name: "部署环境", value: "linux" },
        { name: "开启的插件数", value: "4"},
        { name: "机器人主人QQ", value: "2633043826" },
        {thanks: "感谢来自imgtp的免费图床"}
      ]
    }
  },
  mounted() {
    let timer = new Date().getTime();
    let runningTime = document.getElementById("runningTime");
    runningTime.innerHTML = "本站已经运行" + Math.round((timer - 1657612035927) / 1000 / 60 / 60 /24) + "天";
  }
}
</script>

<style scoped>
.rightBody {
  min-width: 100%;
}

.top {
  text-align: center;
}

.top .list-group {
  text-align: left;
}

.top h1 {
  margin: 15px 0;
}
.top img{
  max-width: 60%;
}
</style>
