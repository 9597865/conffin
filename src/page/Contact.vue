<template>
  <div class="main-box">
    <div class="topleft-bgimg"></div>
    <div class="txt-box">
      <p>河北省河间市郑氏寿材木器厂</p>
      <p>总经理:郑继光</p>
      <p>手机:13780574961</p>
      <p>地址:河北省河间市故仙镇郑孔务村</p>
      <div class="qr">
        <div class="qrbox">
          <img :src="wxqr">
          微信客服1
        </div>
        <div class="qrbox">
          <img :src="zjgwxqr">
          微信客服2
        </div>
      </div>
      <iframe width="300" height="250" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/2OTnPXr1b6X2"></iframe>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contact',
  data(){
    return {
      wxqr:require('../assets/xiaoguanren_qr_wx.jpeg'),
      zjgwxqr:require('../assets/zjg_qr_wx.png')
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

body{
  margin: 0;
  padding: 0;
  background-color: #000;
}
.main-box{
  min-height: 800px;
  background-color: #e8e4d9;
  .qr{
    display: flex;
    flex-direction: row;
    .qrbox{
      width:180px;
      margin:10px;
      text-align: center;
    }
    img{
      max-width: 100%;
    }
  }
  .topleft-bgimg{
    width:180px;
    height: 160px;
    background-size: 180px 160px;
    background-repeat: no-repeat;
    background-image: url("../assets/images/product_topleft_bg.png");
  }
  .txt-box{
    margin: 0 auto;
    margin-left: 60px;
    width: 80%;
    text-align: left;
    font-size: 1.2rem;
    p{
     line-height: 15px; 
    }
  }
}
</style>
