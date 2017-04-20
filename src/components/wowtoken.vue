<script>
    export default {
        components: {
            Range,
        },
        name: "wowtoken",
        data: function () {
            return {
                tokenList: [],
            }
        },
        methods: {
            get() {
                // https://wowtoken.info/snapshot.json 
                this.$http.get('https://wowtoken.info/snapshot.json').then((resourse) => {
                    // 排序，让CN第一个显示
                    // console.log(resourse)
                    var NA = {}
                    var EU = {}
                    for (let region in resourse.data) {
                        if (region == 'NA') {
                            NA = Object.assign(NA, resourse.data[region])
                            delete resourse.data[region]
                        } else if (region == 'EU') {
                            EU = Object.assign(EU, resourse.data[region])
                            delete resourse.data[region]
                        }
                    }
                    NA = {
                        'NA': NA
                    }
                    EU = {
                        'EU': EU
                    }
                    resourse.data = Object.assign(resourse.data, NA, EU)
                    // 修改属性名删掉数字
                    for (let region in resourse.data){
                        // console.log(resourse.data[region].formatted['24max'])
                        resourse.data[region].formatted['max'] = resourse.data[region].formatted['24max'];
                        delete resourse.data[region].formatted['24max'];
                        resourse.data[region].formatted['min'] = resourse.data[region].formatted['24min'];
                        delete resourse.data[region].formatted['24min'];
                        resourse.data[region].formatted['pct'] = resourse.data[region].formatted['24pct'];
                        delete resourse.data[region].formatted['24pct'];

                    }
                    this.tokenList = resourse.data
                });
            }
        },
        created: function () {
            this.get()
        },
        mounted: function () {
            // this.sortRegion()
        },
        filters: {
            // 中文显示服务器
            formatRegion(region) {
                if (region == 'CN') {
                    return '国服'
                } else if (region == 'TW') {
                    return '台服'
                } else if (region == 'KR') {
                    return '韩服'
                } else if (region == 'NA') {
                    return '美服'
                } else if (region == 'EU') {
                    return '欧服'
                }
            }
        }
    }
</script>

<template>
    <div id="wowtoken">
        <el-row style="width:70%; margin:0px auto;">
            <ol>
                <li v-for="region in tokenList">
                    <div style="padding: 20px">
                        <el-card>
                            <p slot="header" style="font-size:18px;">{{region.formatted.region | formatRegion}}</p>
                            <table>
                                <tr>
                                    <td>当前价格:</td>
                                    <td style="font-size:20px">{{region.formatted.buy}}</td>
                                </tr>
                                <tr>
                                    <td>更新时间:</td>
                                    <td>{{region.formatted.updated}}</td>
                                </tr>
                                <tr>
                                    <td>24小时区间:</td>
                                    <td>
                                        <span>{{region.formatted.min}}</span>
                                        <div class="range-bar">
                                            <div class="range-point" :style="{left: region.formatted.pct + '%'}"></div>
                                        </div>
                                        <span>{{region.formatted.max}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    24小时价格走势：
                                </tr>
                            </table>
                            <div class="tokenImg">
                                <img :src='region.formatted.sparkurl' :alt='region.formatted.region' >
                            </div>
                        </el-card>
                    </div>
                </li>
            </ol>
        </el-row>
    </div>
</template>

<style scoped>
.tokenImg{
    margin:10px;
}
.range-bar{
    position: relative;
    display: inline-block;
    margin: 0 0.25em;
    width: 180px;
    height: 1.2em;
    vertical-align: middle;
    background: grey;
    background: -moz-linear-gradient(left, #3333cc 0%, #cc3333 100%);
    background: -webkit-linear-gradient(left, #3333cc 0%,#cc3333 100%);
    background: linear-gradient(to right, #3333cc 0%,#cc3333 100%);
}
.range-point{
    position: absolute;
    display: inline-block;
    top: -0.5em;
    bottom: -0.5em;
    width: 0;
    border-left: 3px solid black;
    margin-left: -1.5px;
}
</style>