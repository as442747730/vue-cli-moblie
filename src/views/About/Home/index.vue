<template>
    <div class="about">
        <Gridoption/>
    </div>
</template>

<script>
import Gridoption from 'components/Gridoption/Gridoption'
export default {
    name: 'Home',
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
