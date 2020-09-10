export const childrenRoute = [
    {
      path: '',
      name: "About",
      component: () => import("../views/Default.vue")
    },
    {
      path: '',
      name: "Resume",
      component: () => import("../views/Resume.vue")
    },
    {
      path: '',
      name: "Portfolio",
      component: () => import("../views/Portfolio.vue")
    }
  ];