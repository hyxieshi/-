<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" input-align="center" placeholder="商品搜索 共239万款好物" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" width="360" height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="imgs" v-lazy="image.image_url" />
      </van-swipe-item>
    </van-swipe>
    <!-- 五个图标 -->
    <van-grid column-num="5">
      <van-grid-item
        v-for="(item, index) in channel"
        :key="index"
        :icon="item.icon_url"
        :text="item.name"
      />
    </van-grid>
    <!-- 内容 -->
    <div class="brandlist">
      <van-cell-group>
        <van-cell title="品牌制造商直供" class="panel" :border="false" />
        <van-cell>
          <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item, index) in brandlist" :key="index">
              <van-image :src="item.new_pic_url" lazy-load />
              <h4 class="title">{{ item.name }}</h4>
              <p class="price">{{item.floor_price}}元起</p>
            </van-grid-item>
          </van-grid>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="newList">
      <van-cell-group>
        <van-cell title="品牌制造商直供" class="panel" :border="false" />
        <van-cell>
          <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item, index) in newGoodsList" :key="index">
              <van-image :src="item.list_pic_url" lazy-load />
              <h4 class="title">{{ item.name }}</h4>
              <p class="price">${{item.retail_price}}</p>
            </van-grid-item>
          </van-grid>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="hotList">
      <van-cell-group>
        <van-cell title="人气推荐" class="panel" :border="false" />
        <van-card
          v-for="(item, index) in hotGoodsList"
          :key="index"
          num="1"
          :price="item.retail_price"
          :desc="item.goods_brief"
          :title="item.name"
          :thumb="item.list_pic_url"
        />
      </van-cell-group>
    </div>
    <div style="height:50px"></div>
    <tabbtn/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import api from "../assets/config/api";
import tabbtn from '../components/tabbtn'

export default {
  name: "Home",
  data() {
    return {
      value: "",
      data: {},
      active: 0,
    };
  },
  components: { 
    tabbtn
  },
  computed: {
    images: function() {
      if (typeof this.data.banner == "object") {
        return this.data.banner;
      } else {
        return [];
      }
    },
    channel: function() {
      if (typeof this.data.channel == "object") {
        return this.data.channel;
      } else {
        return [];
      }
    },
    brandlist: function() {
      if (typeof this.data.brandList == "object") {
        return this.data.brandList;
      } else {
        return [];
      }
    },
    newGoodsList: function() {
      if (typeof this.data.newGoodsList == "object") {
        return this.data.newGoodsList;
      } else {
        return [];
      }
    },
    hotGoodsList: function() {
      if (typeof this.data.hotGoodsList == "object") {
        return this.data.hotGoodsList;
      } else {
        return [];
      }
    }
  },
  async mounted() {
    let res = await axios.get(api.IndexUrl);
    console.log(res);
    this.data = res.data.data;
  }
};
</script>

<style lang="less">
.home {
  .imgs {
    width: 360px;
    height: 200px;
  }
  .panel {
    span {
      display: block;
      text-align: center;
    }
  }
  .brandlist {
    .van-grid-item__content {
      padding: 0;
    }
    .title {
      position: absolute;
      margin: 0;
      top: 5px;
      left: 10px;
    }
    .price {
      position: absolute;
      margin: 0;
      top: 22px;
      left: 10px;
      font-size: 13px;
      color: #999;
    }
  }
  .newList {
    .title {
      margin: 0;
    }
    .price {
      margin: 0;
      font-size: 13px;
      color: #999;
    }
  }
}
</style>
