<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item >首页</van-tabbar-item>
      <van-tabbar-item >业绩</van-tabbar-item>
      <van-tabbar-item >工资</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'Tabbar',
    data() {
        return {
            active: 0
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped lang="scss">
</style>
