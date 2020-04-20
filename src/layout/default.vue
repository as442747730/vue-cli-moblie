<template>
  <div>
    <HeadNav />
      <section class="section">
        <div class="container">
          <slot />
        </div>
      </section>
    <Tabbar v-if="this.off"/>
  </div>
</template>

<script>
import HeadNav from 'components/Navbar';
import Tabbar from 'components/Tabbar';
export default {
    name: 'defaultLayout',
    components: {
        HeadNav,
        Tabbar
    },
    data() {
        return {
            off: true
        }
    },
    props: {
        metas: {
            type: Object
        }
    },
    created() {
        console.log(this.$route.path, 333)
        // 通过route.path 控制底部栏显示
        if (this.$route.path === '/about') {
            this.off = false
        }
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
</style>
