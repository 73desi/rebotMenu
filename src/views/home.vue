<template>
  <div class="all">
    <div v-if="!loading">
      <div>
        <top />
      </div>
      <div class="left col-sm-3">
        <left />
      </div>
      <div class="right col-sm-9">
        <right :loadingStuta="loading"/>
      </div>
    </div>
    <div class="onLoad" v-if="loading" id="loading">
    </div>
  </div>

</template>
<script>
import top from '../components/top.vue'
import left from '../components/left.vue'
import right from '../components/right.vue'
export default {
  components: {
    top,
    left,
    right
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
  },
  mounted() {
   setTimeout(() => {
    this.loading=false
   }, 1000);
   let num = Math.round(Math.random()*8)
   let array = ["../assets/loadingBk/00\ \(1\).jpg","../assets/loadingBk/00\ \(2\).jpg",
   "../assets/loadingBk/00\ \(3\).jpg","../assets/loadingBk/00\ \(4\).jpg",
   "../assets/loadingBk/00\ \(5\).jpg","../assets/loadingBk/00\ \(6\).jpg",
   "../assets/loadingBk/00\ \(7\).jpg","../assets/loadingBk/00\ \(8\).jpg",]
   console.log(array[num])
  }
}
</script>
<style scoped>
body{
  transition: .7s;
}
.left {
  height: calc(100vh - 55px);
  padding-top: 10px;
}

.right {
  height: calc(100vh - 55px);
  padding-top: 10px;
}

.all {
  height: 100vh;
}

.onLoad {
  background-image: url("../assets/loadingBk/00\ \(1\).jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
}

@media screen and (max-width:970px) {}
</style>
