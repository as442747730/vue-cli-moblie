<template>
    <div class="about">
        <Navbar></Navbar>
        <router-view></router-view>
        <div>
            <van-tabbar v-model="active">
            <van-tabbar-item v-for='(i,j) in footsub' :key='j' replace route :to='i.path'>
                {{i.title}}
            </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from 'components/navbar';
export default {
    name: 'about',
    props: {
    },
    data() {
        return {
            active: 0,
            footsub: [
                {
                    title: '首页',
                    path: '/about'
                },
                {
                    title: '业绩',
                    path: '/about/achievement'
                },
                {
                    title: '工资',
                    path: '/about/salary'
                }
            ]
        };
    },
    components: {
        Navbar
    },
    created() {},
    computed: {
        // vuex modules 中的gettes,state获取方式，modules中要定义namespaced: true
        // ...mapGetters('login',['user','token']),
        ...mapState('login', ['user', 'token'])
    }
};
</script>

<style lang="scss" scoped>
.about {
    @include ell();
    font-size: 18px;
}
</style>
