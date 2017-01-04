<template>
  <div class="navbar">
    <div class="site-logo">
      <img src="" alt="Logo">
      <span class="site-name">Your Site</span>
    </div>

    <!-- navbar content -->
    <slot name="content"></slot>
  </div>
</template>

<style lang="less">
  @import "../less/variables";
  @import "../less/mixins";

  .navbar {
    .flexbox();
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: @navbar-height;
    z-index: @navbar-z-index;
    background-color: @blue;

    .site-logo {
      width: 200px;
      min-width: 200px;
      padding: 10px 16px 10px 48px;
      
      img {
        position: absolute;
        top: 20px;
        left: 15px;
        width: 20px;
        height: 20px;
      }

      .site-name {
        font-size: 16px;
        line-height: 40px;
        color: @dark-white;
      }
    }    
  }
</style>
