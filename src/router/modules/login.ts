import { router } from '@/interface/router.js';

const routingList: Array<router> = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
    },
];

export default routingList