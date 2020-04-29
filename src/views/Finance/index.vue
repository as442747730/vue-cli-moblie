<template>
  <div>
    存款信息页
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      typeid: this.$route.query.type
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    console.log(this.typeid, 2)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
