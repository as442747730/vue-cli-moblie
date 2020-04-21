<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive>
                <component :is="layout">
                    <router-view v-if="$route.meta.keepAlive" class="router" slot="view" ></router-view>
                </component>
            </keep-alive>
        </transition>
        <transition :name="transitionName">
            <router-view v-if="!$route.meta.keepAlive" class="router"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            // dafault_layout: 'default'
        }
    },
    computed: {
        transitionName() {
            console.log(this.$store.state.direction, 4)
            return this.$store.state.direction
        },
        layout() {
            return 'default-layout'
            // 多种布局通过路由属性控制
            // return (this.$route.meta.layout || this.default_layout) + '-layout'
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
