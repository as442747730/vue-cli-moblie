<template>
  <div>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {
    name: 'Gridoption',
    data() {
        return {
        };
    },
    props: {
        optionArr: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { length: 8 }
            }
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {}
};
</script>

<style lang="scss" scoped>

</style>
