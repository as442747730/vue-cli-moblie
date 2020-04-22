<template>
    <div class="about">
        <Navbar></Navbar>
        <router-view></router-view>
        <div>
            <van-tabbar v-model="active">
            <van-tabbar-item replace route='true' to="/about">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace route='true' to="/about/achievement">
                业绩
            </van-tabbar-item>
            <van-tabbar-item replace route='true' to="/about/salary">
                工资
            </van-tabbar-item>
            </van-tabbar>
        </div>
        <!-- <Footebar></Footebar> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from 'components/Navbar/Navbar';
export default {
    name: 'about',
    props: {
        msg: String
    },
    data() {
        return {
            active: 0
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
    @include ell();
}
.aaaaa {
    height:800px;
}
</style>
