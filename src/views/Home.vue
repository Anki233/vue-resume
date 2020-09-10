<template>
  <div class="home">
    <!-- <button @click="changeStatus">点我</button>
    <div class="animate__animated animate__bounce" v-if="status">活动就撒开见到过哈根回家噶看见了多少</div>-->
    <div class="wrapper">
      <div>
        <my-icon id="icon-wangluo" color="text-warning" size="45" class="network"></my-icon>
        <div class="text">Welcome to here</div>
      </div>
      <div>
        <div class="content-head">
          <div>
            <h1>I'M</h1>
            <h1>Mark</h1>
          </div>
          <div>您已被赞300次</div>
        </div>
      </div>
      <img src="../assets/img/wr-user.jpg" alt="用户头像" class="user-profile img-thumbnail">
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const status = ref(false);
const changeStatus = () => (status.value = !status.value);

export default {
  name: "Home",
  components: {},
  setup() {
    return {
      status,
      changeStatus,
    };
  },
};
</script>

<style>
.home {
  height: 100vh;
  background: url('../assets/img/bg.jpg') no-repeat center;
  background-size: cover;
}
.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44,48,80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}
.user-profile {
  min-width: 350px;
  height: 90vh;
}
.network {
  width: 4vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  width: 4vw;
  height: 80vh;
  font-size: 30px;
  color: rgb(255,191,121);
  background-color: rgba(52, 57, 92, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
}
.content-head {
  width: 100%;
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-head > div {
  display: flex;
}
.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}
</style>
