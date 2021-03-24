<template>
  <div class="TabBar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="ActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
      name:"TabBarItem",
      data(){
        return {
          // isActive:true
        }
      },
			props:{
				link:String,
				ActiveColor:{
					type:String,
					default:"red"
				}
			},
			computed:{
				isActive(){
					return this.$route.path.indexOf(this.link) !== -1
				},
				ActiveStyle(){
					return this.isActive ? {color:this.ActiveColor} : {}
				}
			},
			methods:{
				itemclick(){
					console.log("click");
					//replace() 重定义  浏览器返回不可用
					this.$router.replace(this.link)
				}
			}
    }
</script>

<style>
  .item-icon{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin: 3px 0;
  }
  .item-text{
    font-size: 12px;
  }
  .active{
    color: red;
  }
</style>
