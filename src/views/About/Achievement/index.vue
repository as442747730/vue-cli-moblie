<template>
    <div class="about">
        <van-grid :column-num="2">
            <van-grid-item icon="photo-o" text="个人业绩" />
            <van-grid-item icon="photo-o" text="业绩排行榜" />
        </van-grid>
        这是业绩页
        <LineChart />
    </div>
</template>

<script>
import LineChart from 'components/lineChart'
export default {
    name: 'Achievement',
    props: {
    },
    components: {
        LineChart
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
