<template>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search">专题</van-tabbar-item>
      <van-tabbar-item icon="gift-card-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data(){
        return{
            active:0
        }
    }
}
</script>