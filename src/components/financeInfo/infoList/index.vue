<template>
  <div class="wrap">
    <van-row>
      <van-col span="12">{{financeType}}</van-col>
      <van-col span="12"></van-col>
      <!-- <van-col span="8">span: 8</van-col> -->
    </van-row>
    <van-row>
      <van-col span="12">时点:</van-col>
      <van-col span="12">年日均:</van-col>
    </van-row>
    <van-row>
      <van-col span="12">比年初:</van-col>
      <van-col span="12">比年初:</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
    name: '',
    props: {
        financeType: {
            type: String,
            default: '存款'
        }
    },
    data() {
        return {
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {}
};
</script>

<style lang='scss' scoped>
.wrap {
    text-align: left;
    padding: 12px 12px;
}
</style>
