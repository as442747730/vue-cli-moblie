<template>
  <div>
    <van-nav-bar title="标题" left-text="绩效考核系统" left-arrow @click-left='onClickLeft'>
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
    async created() {

    },
    mounted() {
    },
    methods: {
        onClickLeft () {
            this.$router.push('/')
        }
    }
};
</script>

<style scoped lang="scss">
</style>
