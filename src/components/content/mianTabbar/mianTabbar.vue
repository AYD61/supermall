<template>
	<tab-bar>
		<!-- link:"/home" 父传子 -->
	  <tab-bar-item link="/home">
	    <img slot="item-icon" class="item-icon" src="~assets/img/tabbar/arrow_left.png" alt=""><!-- ~assets HTML路径的要这样使用路径别名 加波浪号在前面 -->
	    <img slot="item-icon-active" class="item-icon" src="~assets/img/tabbar/arrow_left-active.png" alt="">
	    <p slot="item-text" class="item-text">首页</p>
	  </tab-bar-item>
	
	  <tab-bar-item link="/type" ActiveColor="blue">
	    <img slot="item-icon" class="item-icon" src="../assets/img/tabbar/search.png" alt="">
	    <img slot="item-icon-active" class="item-icon" src="../assets/img/tabbar/search-active.png" alt="">
	    <p slot="item-text" class="item-text">分啊类</p>
	  </tab-bar-item>
	
	  <tab-bar-item link="/cart">
	    <img slot="item-icon" class="item-icon" src="../assets/img/tabbar/cart.png" alt="">
	    <img slot="item-icon-active" class="item-icon" src="../assets/img/tabbar/cart-active.png" alt="">
	    <p slot="item-text" class="item-text">购物车</p>
	  </tab-bar-item>
	
	  <tab-bar-item link="/about" ActiveColor="#ccc">
	    <img slot="item-icon" class="item-icon" src="../assets/img/tabbar/arrow_left.png" alt="">
	    <img slot="item-icon-active" class="item-icon" src="../assets/img/tabbar/arrow_left-active.png" alt="">
	    <p slot="item-text" class="item-text">我的</p>
	  </tab-bar-item>
	
	</tab-bar>
</template>

<script>
	import TabBar from './tabbar/TabBar'
	import TabBarItem from './tabbar/TabBarItem'
	
  export default{
      name:"mianTabbar",
			components:{
				TabBar,
			  TabBarItem
			}
    }
</script>

<style>
</style>
