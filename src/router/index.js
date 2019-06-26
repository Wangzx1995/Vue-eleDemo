import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('@/views/login/index'),
    }, {
        path: '/goods',
        component: layout,
        redirect: '/goods/wzx',
        children: [{
            path: 'wzx',
            name: 'wzx',
            component: () =>
                import ('@/views/goods/index'),
        }]
    }, ]
})