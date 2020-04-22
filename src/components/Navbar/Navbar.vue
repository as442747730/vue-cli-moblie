<template>
  <div>
    <van-nav-bar :title="navtitle" left-text="" left-arrow @click-left='onClickLeft'>
      <template #right v-if="plan">
        <van-dropdown-menu>
          <van-dropdown-item
            v-model="officeType"
            :options="option"
            title=""
            @change="switchTime"
          />
        </van-dropdown-menu>
      </template>
      <template #right v-if="results">
          <van-icon name="notes-o" @click="checkPopup"/>
      </template>
    </van-nav-bar>
    <van-search
      v-if="searchNav"
      v-model="searchText"
      show-action
      placeholder="请输入搜索词"
      @search="onSearch"
      @clear="clearSearchText"
    >
      <template #left>
        <van-icon name="arrow-left" size="20" @click="onClickLeft"/>
      </template>
    </van-search>
    <van-popup v-model="timeShow" position="bottom">
      <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="changeTime"
          @cancel="cancelTime"
      />
  </van-popup>
  </div>
</template>

<script>
export default {
    name: 'HeadNav',
    props: {
        /* planNav 是否计划类表头 */
        /* results 是否业绩类表头 */
        planNav: {
            type: Boolean, // 参数类型
            default: false // 默认值  v-bind="对象" 可直接将对象中多个参数一次传入props
        },
        resultsNav: {
            type: Boolean,
            default: false
        },
        searchNav: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            navtitle: '默认导航头部',
            searchText: '',
            officeType: -1,
            option: [
                { text: '月度计划', value: 0 },
                { text: '季度计划', value: 1 },
                { text: '年度计划', value: 2 }
            ],
            timeShow: false,
            minDate: new Date(1990, 1, 1),
            maxDate: new Date(2030, 1, 1),
            currentDate: new Date()
        };
    },
    created() {

    },
    mounted() {
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        switchTime(val) {
            this.navtitle = this.option[val].text
            this.officeType = -1
            return undefined
        },
        checkPopup() {
            if (!this.timeShow) {
                this.timeShow = true;
            } else {
                this.timeShow = false;
            }
        },
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`
            } else if (type === 'day') {
                return `${value}日`
            }
            return value;
        },
        changeTime(value) {
            console.log(value)
            this.timeShow = false;
        },
        cancelTime() {
            this.timeShow = false;
        },
        onSearch() {
        },
        clearSearchText() {
            this.searchText = ''
        }
    }
};
</script>

<style scoped lang="scss">
</style>
