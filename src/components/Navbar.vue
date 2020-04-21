<template>
  <div>
    <van-nav-bar title="标题" left-text="绩效考核系统" left-arrow @click-left='onClickLeft'>
      <template #right>
        <van-icon name="search" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
    name: 'HeadNav',
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
