<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" class="router"></router-view>
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
            transitionName: 'slide-right'
        }
    },
    watch: {
        '$route' (to, from) {
            let toName = to.name
            const toIndex = to.meta.index
            const fromIndex = from.meta.index
            this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
        }
    },
    computed: {
        // transitionName() {
        //     return this.$store.state.direction
        // }
    }
};
</script>
<script>
window.onload = function() {
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault()
  })
}
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
