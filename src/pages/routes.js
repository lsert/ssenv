import DyLoader from "../tools/dyLoader";

export default [
    {
        path: '/home',
        component: DyLoader(() => import('./home'))
    },
    {
        path: '/user',
        component: DyLoader(() => import('./user'))
    }
]