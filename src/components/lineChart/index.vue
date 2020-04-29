<template>
  <ve-line
    class="chartBox"
    :data="chartData"
    :tooltip-visible="false"
    :legend-visible="false"
    :after-set-option="afterSetOption"
  />
</template>

<script>
export default {
  data: function () {
    this.chartSettings = {
      metrics: ['下单用户'], // 默认columns第二项起为指标
      dimension: ['访问用户'] // 默认columns第一项为维度
      // xAxisType: 'time',
      // yAxisType: 'KMB',
      // yAxisName: '下单用户', '下单率'
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ],
        loading: true
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 钩子函数,每次图表更新获取chart实例
    afterSetOption (chartObj) {
      chartObj.setOption({
        'yAxis': [
          {
            'axisLine': { // y轴
              'show': true

            },
            'axisTick': { // y轴刻度线
              'show': true
            },
            'splitLine': { // 网格线
              'show': true
            }
          }
        ]
        // 'yAxis': [
        //     {
        //         'show': true, // 显示标题
        //         'boundaryGap': true,
        //         'type': 'category',
        //         'name': '时间',
        //         'data': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        //         'axisLine': { // y轴
        //             'show': false

        //         },
        //         'axisTick': { // y轴刻度线
        //             'show': false
        //         },
        //         'splitLine': { // 网格线
        //             'show': false
        //         }
        //     }
        // ]
      })
    }
  }
}
</script>

<style lang="scss"  scoped>
.chartBox{
  padding: 8px 15px;
}
</style>
