<template>
    <div id="app">
        <HeadNav v-if="$route.meta.navbar" ></HeadNav>
        <transition :name="transitionName">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" class="router"></router-view>
            </keep-alive>
        </transition>
        <transition :name="transitionName">
            <router-view v-if="!$route.meta.keepAlive" class="router"></router-view>
        </transition>
        <Tabbar v-if="$route.meta.navbar"></Tabbar>
    </div>
</template>

<script>
import HeadNav from './components/layout/Navbar';
import Tabbar from './components/layout/Tabbar';
export default {
    name: 'app',
    components: {
        HeadNav,
        Tabbar
    },
    computed: {
        transitionName() {
            return this.$store.state.direction
        }
    }
};
</script>
<style lang="scss">
@import "./node_modules/normalize.css/normalize";
@import "style/common.scss";
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    a {
        font-weight: bold;
        color: #2c3e50;
        font-size: 32px;
        &.router-link-exact-active {
            color: $color-main;
        }
    }
}
h3 {
    font-size: 18px;
}

.router{
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  overflow: hidden !important;
  overflow-y: auto !important;
  -webkit-overflow-scrolling: touch;
  background: #f0f0f0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
</style>
