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
        },
        {
            path: '/404',
            component: () =>
                import ('@/views/errorPage/404'),
        },
        {
            path: '/dashboard',
            component: layout,
            redirect: '/dashboard/index',
            meta: { title: 'dashboard', icon: 'dashboard' },
            children: [{
                path: 'index',
                name: 'index',
                component: () =>
                    import ('@/views/dashboard/index'),
                meta: { title: '首页', icon: 'dashboard' }
            }]
        }, {
            path: '/form',
            component: layout,
            redirect: '/form/BaseForm',
            name: 'form',
            meta: {
                title: '导航一',
                icon: 'form'
            },
            children: [{
                    path: 'BaseForm',
                    name: 'BaseForm',
                    component: () =>
                        import ('@/views/form/BaseForm'),
                    meta: { title: '导航1-1' }
                },
                {
                    path: 'VueEditor',
                    name: 'VueEditor',
                    component: () =>
                        import ('@/views/form/VueEditor'),
                    meta: { title: '导航1-2' },

                },
                {
                    path: 'Upload',
                    name: 'Upload',
                    component: () =>
                        import ('@/views/form/Upload'),
                    meta: { title: '导航1-3' }
                }
            ]
        },
        {
            path: '/ccc',
            component: layout,
            redirect: '/ccc/BaseForm',
            name: 'ccc',
            meta: {
                title: 'ccc',
                icon: 'table'
            },
            children: [{
                    path: 'c1',
                    name: 'c1',
                    component: () =>
                        import ('@/views/ccc/c1'),
                    meta: { title: 'c1' }
                },
                {
                    path: 'c2',
                    name: 'c2',
                    component: () =>
                        import ('@/views/ccc/c2'),
                    meta: { title: 'c2' }
                },
                {
                    path: 'c3',
                    name: 'c3',
                    component: () =>
                        import ('@/views/ccc/c3'),
                    meta: { title: 'c3' }
                }
            ]
        },

    ]
})