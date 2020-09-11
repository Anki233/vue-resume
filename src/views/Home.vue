<template>
  <div class="home">
    <div class="wrapper">
      <slide-bar icon-id="icon-wangluo" icon-color="text-warning" icon-size="45">Welcome to here</slide-bar>

      <div class="w-100 pre-scrollable" style="max-height: 90vh">
        <content-head>
          <template #title>{{title}}</template>
          <template #des>{{des}}</template>
          <template #calc>您已被赞{{praise}}次</template>
        </content-head>
        <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>
      </div>

      <user-profile :src="src" />
    </div>
  </div>
</template>

<script>
import { pathToSign } from "../lib/router-lib.js";
import { praise} from '@/lib/praise-lib.js'
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentHead from "@/components/content-head/content-head.vue";
export default {
  name: "Home",
  components: {
    userProfile,
    slideBar,
    contentHead
  },
  setup() {
    const { title, des } = pathToSign();
    return {
      src: require("../assets/img/wr-user.jpg"),
      title,
      des,
      praise
    };
  }
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
