<script>
    import echarts from 'echarts'
    export default {
        name: 'showprice',
        data: function() {
            return {
                options: {}
            }
        },
        props: {
            realmId: {
                realmId: String,
                required: true
            },
            itemId: {
                itemId: String,
                required: true
            },
        },
        methods: {
            formattedTwoDayPrice: function(price) {
                var gold = parseInt(price / 10000);
                var silver = parseInt((price % 10000) / 100);
                var copper = parseInt(price % 100);
                price = gold + silver / 100 + copper / 10000
                return price.toFixed(2)
            },
            formattedTwoDate: function(date) {
                var date = new Date(date)
                var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                return h + m + s;
            },
            fillData: function() {
                let itemId = this.itemId
                let realmId = this.realmId
                let url_itemId_realmId = 'https://www.bnade.com/wow/auction/past/realm/' + realmId +
                    '/item/' + itemId;
                let time = []
                let price = []
                let sum = []
                // 获取两天内指定服务器内指定物品的数据
                this.$http.get(url_itemId_realmId).then((reourse) => {
                    let res = reourse.data
                    for (let i in res) {
                        time.push(this.formattedTwoDate(res[i][2]))
                        price.push(this.formattedTwoDayPrice(res[i][0]))
                        sum.push(res[i][1])
                    }
                });
                this.options = {
                    title: {
                        text: '两日内最低一口价',
                        left: 0
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line'
                        }
                    },
                    legend: {
                        data: ['最低一口价', '拍卖行总量']
                    },
                    grid: {
                        left: '10%',
                        right: '10%',
                        bottom: '15%'
                    },
                    xAxis: {
                        type: 'category',
                        data: time,
                        scale: true,
                        boundaryGap: true,
                        axisLine: {
                            onZero: false
                        },
                        splitLine: {
                            show: false
                        },
                        splitNumber: 20,
                        min: 'dataMin',
                        max: 'dataMax'
                    },
                    yAxis: [{
                            type: 'value',
                            name: '最低一口价',
                            position: 'right',
                            axisLabel: {
                                formatter: '{value} G'
                            }
                        },
                        {
                            type: 'value',
                            name: '拍卖行总量',
                            position: 'left',
    
                        }
                    ],
                    dataZoom: [{
                            type: 'inside',
                            start: 50,
                            end: 100
                        },
                        {
                            show: true,
                            type: 'slider',
                            y: '90%',
                            start: 50,
                            end: 100
                        }
                    ],
                    series: [{
                            name: '最低一口价',
                            type: 'line',
                            yAxisIndex: 0,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3,
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#5B6DC1'
                                    }, {
                                        offset: 1,
                                        color: '#4AA8FF'
                                    }], false)
                                }
                            },
                            data: price
                        },
                        {
                            name: '拍卖行总量',
                            type: 'bar',
                            yAxisIndex: 1,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#14c8d4'
                                            },
                                            {
                                                offset: 1,
                                                color: '#43eec6'
                                            }
                                        ]
                                    )
                                }
                            },
                            data: sum
                        },
    
                    ]
                }
                return this.options
            }
        },
        watch: {
            realmId: function() {
                this.fillData()
            },
            itemId: function() {
                this.fillData()
            }
        },
        created: function() {
            this.fillData()
        }
    }
</script>

<template>
    <chart :options="options">
    </chart>
</template>

<style>
    
</style>