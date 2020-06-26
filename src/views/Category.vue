<template>
  <div class="category">
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" input-align="center" placeholder="商品搜索 共239万款好物" />

    <van-tree-select
      height="calc(100vh - 104px)"
      @click-nav="categorys"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item,index) in subCategoryList"
            :key="index"
            :icon="item.banner_url"
            :text="item.name"
            :to = '`/ctegoryList/${item.id}`'
          />
        </van-grid>
      </template>
    </van-tree-select>
    <TabBtn />
  </div>
</template>


<script>
import TabBtn from "../components/tabbtn";
import api from "../assets/config/api";
import axios from "axios";

export default {
  name: "Category",
  data() {
    return {
      value: "",
      data: {},
      active: 0,
      subCategoryList: []
    };
  },
  components: {
    TabBtn
  },
  computed: {
    items: function() {
      // console.log(this.data.categoryList);
      if (typeof this.data.categoryList == "object") {
        let arr = [];
        this.data.categoryList.forEach((item, index) => {
          item.text = item.name;
          arr.push(item);
        });
        return arr;
      } else {
        // console.log(1);
        return [];
      }
    }
  },
  watch: {
    active: async function() {
      if (this.items.length !== 0) {
        let id = this.items[this.active].id;
        // console.log(id);
        let res = await axios.get(api.CatalogCurrent, { params: { id } });
        this.subCategoryList = res.data.data.currentCategory.subCategoryList;
        console.log(this.subCategoryList);
      } else {
        this.subCategoryList = [];
      }
    }
  },
  methods: {
    categorys(i) {
      this.active = i;
    }
  },
  async mounted() {
    let res = await axios.get(api.CatalogList);
    this.data = res.data.data;
    // console.log(this.data.categoryList)
  }
};
</script>
