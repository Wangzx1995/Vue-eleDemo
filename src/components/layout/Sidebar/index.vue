<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <logo></logo>
        <el-menu
            mode="vertical"
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="isCollapse"
            background-color="rgb(48, 65, 86)"
            text-color="rgb(191, 203, 217)"
            active-text-color="#409EFF"
            :unique-opened="true"
        >
            <sidebar-item></sidebar-item>
            <!-- <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item> -->
        </el-menu>
    </el-scrollbar>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import logo from './logo'
export default {
    components: {
        logo,
        SidebarItem
    },
    data() {
        return {
            isCollapse: false
        }
    },
    computed: {
        // ...mapGetters([
        //     'sidebar',
        //     'permission_routers'
        // ]),
        // isCollapse() {
        //     return !this.sidebar.opened
        // }
    }
}
</script>
