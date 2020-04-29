<template>
  <div>
    <van-tabs
      v-if="usertype === 1"
      v-model="active"
      type="card"
      animated
      swipeable
      ellipsis
    >
      <van-tab title="会计口径">
        <div @click="goFinance">
          <InfoList />
        </div>
        <div @click="goFinance">
          <InfoList />
        </div>
      </van-tab>
      <van-tab title="考核口径">
        <div @click="goFinance">
          <InfoList />
        </div>
        <div @click="goFinance">
          <InfoList />
        </div>
      </van-tab>
    </van-tabs>
    <div v-if="usertype !== 1">
      <InfoList />
    </div>
  </div>
</template>

<script>
import InfoList from 'components/financeInfo/infoList'
export default {
  name: '',
  components: {
    InfoList
  },
  data () {
    return {
      active: 0, // 口径切换状态
      usertype: 2 // 用户类型状态

    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    goFinance () {
      this.$router.push({ path: '/finance', query: { type: 1 }})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
