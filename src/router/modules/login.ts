// import { router } from '@/interface/router.ts';

const routingList: Array<object> = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
    },
];

export default routingList