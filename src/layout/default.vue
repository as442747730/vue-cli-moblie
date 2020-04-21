<template>
  <div>
    <HeadNav v-show="this.Headoff" />
    <slot name="view"/>
    <Tabbar v-show="this.Footeoff"/>
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
            Headoff: false,
            Footeoff: false
        }
    },
    watch: {
        '$route.meta': function (newVal) {
            if (newVal.all) {
                this.Headoff = true
                this.Footeoff = true
            } else if (newVal.nohead) {
                this.Headoff = false
                this.Footeoff = true
            } else if (newVal.nofoot) {
                this.Headoff = true
                this.Footeoff = false
            } else if (newVal.noall) {
                this.Headoff = false
                this.Footeoff = false
            }
        }
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
</style>
