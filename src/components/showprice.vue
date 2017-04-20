<script>
  import realmData from '../data/realm.json'
  import linechart from './lineChart.vue'
  export default {
    name: 'showprice',
    data: function () {
      return {
        iteminfo: {},
        realmData: realmData,
        realm: '',
        realmId: '',
        itemId: '',
        itemLowPrices: [],
        columns: [{
            title: '服务器',
            key: 'realm',

          },
          {
            title: '最低一口价',
            key: 'price',
            sortable: true
          },
          {
            title: '拍卖玩家',
            key: 'player'
          },
          {
            title: '拍卖总量',
            key: 'num'
          },
          {
            title: '更新时间',
            key: 'update'
          },

        ],
      };
    },
    props: {
      itemName: {
        itemName: String,
        required: true
      }
    },
    methods: {
      // 获取物品信息
      getItemInfo: function () {
        var itemId = ''
        var itemUrl = encodeURI('https://www.bnade.com/wow/item/name/' + this.itemName)
        this.$http.get(itemUrl).then((resourse) => {
          this.iteminfo = resourse.data[0]
          this.itemId = resourse.data[0].id
          itemId = resourse.data[0].id
          var url = 'https://www.bnade.com/wow/auction/item/' + this.iteminfo.id;
          this.$http.get(url).then((res) => {
            this.itemLowPrices = this.formatteitemLowPrices(res.data)

          });
        });
        return itemId
      },
      // 格式化最低价
      formatteitemLowPrices: function (data) {
        var formattedData = [];
        for (let i in data) {
          formattedData[i] = {
            'realm': this.getRealmNameByID(data[i][0]),
            'price': this.formattedPrice(data[i][1]),
            'player': data[i][2],
            'num': data[i][3],
            'update': this.formattedDate(data[i][4]),
            'remaining': data[i][5]
          }
        }
        return formattedData
      },
      // 通过服务器name返回可查询的服务器id
      getRealmNameByID: function (id) {
        for (let i in realmData) {
          if (realmData[i]['id'] === id) {
            // console.log(realmData[i]['connected'])
            return (realmData[i]['connected'])
          }
        }
      },
      // 格式化价格
      formattedPrice: function (price) {
        var gold = parseInt(price / 10000);
        var silver = parseInt((price % 10000) / 100);
        var copper = parseInt(price % 100);
        // console.log((gold).toString() + '金' + (silver).toString() + '银' + (copper).toString() + '铜')
        return (gold).toString() + '金' + (silver).toString() + '银' + (copper).toString() + '铜'
      },

      // 根据时间戳获取标准时间
      formattedDate: function (date) {
        var date = new Date(date)
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
          '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + h + m + s;
      },
      // 格式化图标时间

      // 获取图片
      getItemIcon: function (icon) {
        var iconUrl = 'http://wow.zamimg.com/images/wow/icons/large/' + icon + '.jpg'
        return iconUrl
      },
      // 根据选择改变服务器
      changeRealm(realm) {
        this.realm = realm;
        for (let i in realmData) {
          if (realmData[i]['connected'] === realm) {
            this.realmId = realmData[i]['id']
          }
        }
      },
    },
    watch: {
      itemName: function () {
        this.getItemInfo()
      },
    },
    mounted: function () {
      this.itemId = this.getItemInfo()
    },
    components: {
      linechart
    },
  }

</script>

<template>
  <div id="showprice">
    <el-row style="width:90%; margin:28px auto;">
      <el-col>
        <el-card style="background-color: ##EFF2F7">
          <p slot="header">{{this.itemName}}</p>
          <table>
            <tr style="margin-top:10px;">
              <td><img :src=getItemIcon(iteminfo.icon) :alt='this.itemName'></td>
            </tr>
            <tr>
              <td>物品ID:</td>
              <td>{{iteminfo.id}}</td>
            </tr>
            <tr>
              <td>物品等级:</td>
              <td>{{iteminfo.itemLevel}}</td>
            </tr>
            <tr>
              <td>
                选择服务器(选填):
              </td>
              <td>
                <el-select v-model="realm" style="width:300px" placeholder="请选择或输入服务器" filterable no-match-text="无此服务器" @change="changeRealm">
                  <el-option v-for="realm in realmData" :label="realm.connected" :value="realm.connected" :key="realm.connected"></el-option>
                </el-select>
              </td>
            </tr>
            <br>
          </table>
          <div v-if="realmId">
            <div class="small">
              <linechart :realmId="realmId" :itemId="itemId" style="width:100%"></linechart>
            </div>
          </div>
          <table>
            <tr>
              <td>全服最低一口价:</td>
            </tr>
          </table>
          <br>
          <div style="padding:0 20px">
            <el-table border :data="itemLowPrices">
              <el-table-column prop="realm" label="服务器" width="180">
              </el-table-column>
              <el-table-column prop="price" label="最低一口价" sortable >
              </el-table-column>
              <el-table-column prop="player" label="拍卖玩家" >
              </el-table-column>
              <el-table-column prop="num" label="拍卖总量" sortable>
              </el-table-column>
              <el-table-column prop="update" label="更新时间" sortable width="180">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  td {
    padding-left: 20px;
  }

  .small {
    width:100%;
  }

</style>
