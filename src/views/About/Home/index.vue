<template>
    <div class="about">
        <div>搜索导航栏</div>
        <FinanceInfo></FinanceInfo>
        <Gridoption></Gridoption>
        <Infocontent></Infocontent>
    </div>
</template>

<script>
import Gridoption from 'components/gridoption'
import FinanceInfo from 'components/financeInfo'
import Infocontent from 'components/infocontent';
export default {
    name: 'Home',
    props: {
    },
    components: {
        Gridoption,
        FinanceInfo,
        Infocontent
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
