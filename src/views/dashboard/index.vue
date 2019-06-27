<template>
    <div>
        首页
    </div>
</template>

<script>
import api from '@/api/request'
export default {
    name: 'Mock',
    data() {
        return {
            dataShow: []
        }
    },
    mounted() {
        console.log('-----------')
        this.getdata()
    },
    methods: {
        getdata: function () {
            api.mockdata('/data/index')
                .then(res => {
                    console.log(res);
                    this.dataShow = res.data;
                })
        }
    }
}

</script>

<style>
</style>
