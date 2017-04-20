<script>
  // 导入子组件
  import showprice from './showprice.vue'
  export default {
    name: 'wowprice',
    data: function () {
      return {
        openMenu: ['fish', 'herb'],
        itemId: '',
        isTrue: true,
        itemName: '诅咒女王鱼',
        itemListCook: [{
            "name": "精瘦腿肉",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_food_legion_leanshank.jpg",
            "id": "124117",
            "num": "10"
          },
          {
            "name": "肥美熊肉排",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_food_legion_fattybearsteak.jpg",
            "id": "124118",
            "num": "10"
          },
          {
            "name": "大块异香肋排",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_food_legion_biggameyribs.jpg",
            "id": "124119",
            "num": "10"
          },
          {
            "name": "魔力之血",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_food_legion_leyblood.jpg",
            "id": "124120",
            "num": "10"
          },
          {
            "name": "野雉蛋",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_food_legion_wildfowlegg.jpg",
            "id": "124121",
            "num": "10"
          }
        ],
        itemListFish: [{
            "name": "诅咒女王鱼",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_fish_cursedqueenfishgreen.jpg",
            "id": "124107",
            "num": "10"
          },
          {
            "name": "藓鳃鲈鱼",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_fish_mossgillperchgreen.jpg",
            "id": "124108",
            "num": "10"
          },
          {
            "name": "至高岭鲑鱼",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_fish_highmountainsalmonred.jpg",
            "id": "124109",
            "num": "10"
          },
          {
            "name": "风暴鳐鱼",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_fish_stormraygreen.jpg",
            "id": "124110",
            "num": "10"
          },
          {
            "name": "符鳞锦鲤",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_fish_runescalekoigold.jpg",
            "id": "124111",
            "num": "10"
          },
          {
            "name": "黑梭鱼",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_fish_blackbarracudablue.jpg",
            "id": "124112",
            "num": "10"
          }
        ],
        itemListHerb: [{
            "name": "安瑟瑞尔花",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_herbalism_70_aethril.jpg",
            "id": "124101",
            "num": "10"
          },
          {
            "name": "入梦叶",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_herbalism_70_dreamleaf.jpg",
            "id": "124102",
            "num": "10"
          },
          {
            "name": "狐尾花",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_herbalism_70_foxflower.jpg",
            "id": "124103",
            "num": "10"
          },
          {
            "name": "夏斯卡格草",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_herbalism_70_fjarnskaggl.jpg",
            "id": "124104",
            "num": "10"
          },
          {
            "name": "星光玫瑰",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_herbalism_70_starlightrosepetals.jpg",
            "id": "124105",
            "num": "3"
          }
        ],
        itemListMine: [{
            "name": "魔石矿石",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_leystone.jpg",
            "id": "123918",
            "num": "10"
          },
          {
            "name": "邪能页岩",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_felslate.jpg",
            "id": "123919",
            "num": "5"
          },
        ],
        itemListOther: [{
            "name": "石皮皮革",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_leatherstonehide.jpg",
            "id": "124113",
            "num": "10"
          },
          {
            "name": "风暴之鳞",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_leatherstormscale.jpg",
            "id": "124115",
            "num": "10"
          },
          {
            "name": "坚固利爪",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_wailingbone.jpg",
            "id": "124438",
            "num": "20"
          },
          {
            "name": "坚固利齿",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_misc_bone_08.jpg",
            "id": "124439",
            "num": "20"
          },
          {
            "name": "夏多雷丝绸",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_tailoring_70_silkweave.jpg",
            "id": "124437",
            "num": "10"
          },
          {
            "name": "阿卡纳精华",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_enchanting_70_arkhana.jpg",
            "id": "124440",
            "num": "10"
          },
          {
            "name": "魔光碎片",
            "icon": "http://wow.zamimg.com/images/wow/icons/small/inv_enchanting_70_leylightcrystal.jpg",
            "id": "124441",
            "num": "3"
          }
        ]
      };
    },
    methods: {
      getItemName(name) {
        this.itemName = name
        // console.log(this.itemName)
      },

    },
    components: {
      showprice
    }
  }

</script>

<template>
  <div id="wowprice">
    <el-row>
      <el-col :span="4" style="width:20%">
        <el-menu mode="vertical" theme="dark" default-active="诅咒女王鱼" @select="getItemName" :default-openeds="openMenu" :unique-opened="isTrue">
          <el-submenu index="fish">
            <template slot="title">
              钓鱼
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="item in itemListFish" :index="item.name" :key="item.name">
                <div><img :src="item.icon" :alt="item.name" style="vertical-align:middle;padding-right:4px">{{ item.name }}</div>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="herb">
            <template slot="title">
              草药
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="item in itemListHerb" :index="item.name" :key="item.name">
                <div><img :src="item.icon" :alt="item.name" style="vertical-align:middle;padding-right:4px">{{ item.name }}</div>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="cook">
            <template slot="title">
              烹饪
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="item in itemListCook" :index="item.name" :key="item.name">
                <div><img :src="item.icon" :alt="item.name" style="vertical-align:middle;padding-right:4px">{{ item.name }}</div>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="mine">
            <template slot="title">
              采矿
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="item in itemListMine" :index="item.name" :key="item.name">
                <div><img :src="item.icon" :alt="item.name" style="vertical-align:middle;padding-right:4px">{{ item.name }}</div>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="other">
            <template slot="title">
              杂项
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="item in itemListOther" :index="item.name" :key="item.name">
                <div><img :src="item.icon" :alt="item.name" style="vertical-align:middle;padding-right:4px">{{ item.name }}</div>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="width:80%">
        <showprice :itemName="itemName"></showprice>
      </el-col>
    </el-row>
  </div>
</template>
