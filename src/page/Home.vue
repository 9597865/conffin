<template>
  <div class="main-box">
    <div class="topleft-bgimg"></div>
    <div class="txt-box">
      郑氏木器厂，位于河北省沧州河间市，自建厂以来已近80年历史，郑氏三代传承木制工艺，主要经营寿材、骨灰盒、木质工艺品加工销售及批发，也可根据客户需求定做。

      自建厂以来，每一代木工都秉持匠人精神，用传统木工艺不断打造寿木精品，寿材的样式传统古朴简洁，大气沉稳，寓意美好自然和谐。木料一般都选择耐腐蚀的硬木或者带油性的木材，坚硬的优质木料，如柏木、迪伦桃木、红松、黄花松、非洲紫檀等，师傅们采用“榫卯”工艺，全凭高超的技术来加工制作。新引进木材加工机械配套设备，严格控制各道生产工序，以熟练的技巧保质、保量，形成生产、销售、售后一条龙，以完善的服务赢得众多合作商家的赞誉。

    </div>
    <div class="img-box">
      <div v-for="(item, index) in factorylist" :key="item" class="factory-item" :style="{'width':'80%'}">
          <img :src="item" @click="clickItem(item,index)">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contact',
  data(){
    return {
     factorylist:[
       require('../assets/images/factory/factory_01.png'),
       require('../assets/images/factory/factory_02.png'),
       require('../assets/images/factory/factory_03.png'),
     ]
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
  /* height: 800px; */
  background-color: #e8e4d9;
  background-size: 375px 150px;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-image: url("../assets/images/product_bottom_bg.png");
  .topleft-bgimg{
    width:180px;
    height: 160px;
    background-size: 180px 160px;
    background-repeat: no-repeat;
    background-image: url("../assets/images/product_topleft_bg.png");
  }
  .txt-box{
    padding:0 10% 10%;
    text-align: left;
    text-indent:2em;
    font-size: 1.1rem;
  }
  .img-box{
    padding-bottom: 160px;
  }
  .factory-item{
    width:100%;
    text-align: center;
    margin:0 auto;
 
    img{
      width:100%;
      border-radius: 10px;
      border: 5px solid #fff;
    }
  }
}
</style>
