<template>
     <div class="TabBar">
       <slot></slot>
     </div>
</template>

<script>
  export default{
      name:"TabBar"
    }
</script>

<style>
  .TabBar{
    display: flex;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    text-align: center;
    box-shadow: 0px -2px 5px rgba(0,0,0,0.1);
    background-color: #f3f3f3;
  }
  .TabBar-item{
    flex: 1;
   }

</style>
