<template>
  <div class="about">
    <div>搜索导航栏</div>
    <FinanceInfo />
    <Gridoption />
    <Infocontent />
  </div>
</template>

<script>
import Gridoption from 'components/gridoption'
import FinanceInfo from 'components/financeInfo'
import Infocontent from 'components/infocontent'
export default {
  name: 'Home',
  components: {
    Gridoption,
    FinanceInfo,
    Infocontent
  },
  props: {
  },
  computed: {},
  created () {}
}
</script>

<style scoped lang="scss">
.about {
    @include ell();
}
</style>
