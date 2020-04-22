<template>
    <div class="about">
        这是业绩页
        <Gridoption/>
    </div>
</template>

<script>
import Gridoption from 'components/Gridoption/Gridoption'
export default {
    name: 'Achievement',
    props: {
    },
    components: {
        Gridoption
    },
    created() {},
    computed: {}
};
</script>

<style scoped lang="scss">
.about {
    @include ell();
}
</style>
