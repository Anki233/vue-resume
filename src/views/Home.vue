<template>
  <div class="home">
    <!-- <button @click="changeStatus">点我</button>
    <div class="animate__animated animate__bounce" v-if="status">活动就撒开见到过哈根回家噶看见了多少</div>-->
    <div class="wrapper">
      <slide-bar icon-id="icon-wangluo" icon-color="text-warning" icon-size="45">Welcome to here</slide-bar>

      <div class="w-100">
        <content-head>
          <template #title>I'M</template> 
          <template #des>Mark</template> 
          <template #calc>您已被赞300次</template> 
        </content-head>
        <router-view></router-view>
      </div>
      <userProfile :src="src" />
    </div>
  </div>
</template>

<script>
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentHead from "@/components/content-head/content-head.vue";

export default {
  name: "Home",
  components: {
    userProfile,
    slideBar,
    contentHead,
  },
  setup() {
    return {
      src: require("../assets/img/wr-user.jpg"),
    };
  },
};
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
}
.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}
</style>
