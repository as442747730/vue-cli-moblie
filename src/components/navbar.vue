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
import { goTo, changeUrl } from 'utils/changeUrl'
export default {
    async created() {

    },
    mounted() {
    },
    methods: {
        onClickLeft () {
            // goTo(-1)
            changeUrl('/')
        }
    }
};
</script>

<style scoped lang="scss">
</style>
