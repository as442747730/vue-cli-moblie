<template>
  <div>
    <van-nav-bar v-if="!searchNav" :title="navtitle" left-text="" left-arrow @click-left='onClickLeft'>
      <template #right>
            <div v-if="planNav == 0 ">
                <van-dropdown-menu>
                    <van-dropdown-item
                        v-model="officeType"
                        :options="option"
                        title=""
                        @change="switchTime"
                    />
                </van-dropdown-menu>
            </div>
            <div v-if="planNav == 1 ">
                <van-icon name="notes-o" @click="checkPopup"/>
            </div>
            <div v-if="planNav == 2 ">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" @click="checkOver" />
            </div>
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
    <div
    v-show="Overshow"
    class="wrapper"
    @click="checkOver"
    >
        <van-button type="default" block @click="checkUser(1)">行员</van-button>
        <van-button type="default" block @click="checkUser(2)">行管理</van-button>
        <van-button type="default" block @click="checkUser(3)">行领导</van-button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeadNav',
    props: {
    },
    data() {
        return {
            navtitle: '默认导航头部',
            planNav: 1, /* true 计划类表头 false 业绩类表头 */
            searchNav: false, /* searchNav 是否搜索类表头 */
            searchText: '',
            officeType: -1,
            option: [
                { text: '月度计划', value: 0 },
                { text: '季度计划', value: 1 },
                { text: '年度计划', value: 2 }
            ],
            Overshow: false, // 行员切换控件
            timeShow: false, // 时间切换控件
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
        checkOver() {
            this.Overshow = !this.Overshow
        },
        checkUser(type) {
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
.wrapper {
    position: absolute;
    margin: 0 auto;
    width: 120px;
    height: 120px;
    top: 40%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    background-color: #000;
    z-index: 20;
}
</style>
