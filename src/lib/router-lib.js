import { useRouter } from "vue-router";
import { computed } from "vue";
const routerJump = () => {
    const router = useRouter();
    const toPage = (path) => router.push(path);
    return {
        toPage,
    };
};

const pathToSign = () => {
    const router = useRouter();
    const title = computed(() => {
      const { path } = router.currentRoute.value;
      return path === "/" ? "I'M" : "";
    });
    const des = computed(() => {
      const { path, name } = router.currentRoute.value;
      return path === "/" ? "Mark" : name;
    });
    return {
        title,
        des
    }
}

export {
    routerJump,
    pathToSign
}