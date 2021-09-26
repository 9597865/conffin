<template>
  <div class="main-box">
    <img :src="imgIcon">
   <MainList :datalist="pddListData" />
  </div>
</template>
<script>
import MainList from '../components/MainList.vue'
export default {
  name: 'product',
  data(){
    return {
      imgIcon:require('../assets/images/icon_chanpinjianjie.png'),
      pddListData:[
        {
          title:'【包邮】【北极绒】秋冬男女德绒保暖内衣套装无痕加绒加厚加大码秋衣秋裤',
          priceTop:'67.8',
          priceBottom:'19.8',
          toRut:'/product/details/0',
          date:20210922,
          thumb:require("../assets/images/product/01.png"),
          gotourl:'https://p.pinduoduo.com/y5la1qAu'
        },
        {
          title:'【包邮】秋冬新款ins韩版加绒加厚连帽卫衣女潮大码女装外套上衣时尚宽松',
          priceTop:'69.9',
          priceBottom:'17.9',
          toRut:'/product',
          date:20210922,
          thumb:require("../assets/images/product/02.png"),
          gotourl:'https://p.pinduoduo.com/V3saFOSD'
        },
        {
          title:'【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套',
          priceTop:'49.9',
          priceBottom:'16.9',
          toRut:'/resume',
          date:20210922,
          thumb:require("../assets/images/product/03.png"),
          gotourl:'https://p.pinduoduo.com/4dearFP1'
        },
        {
          title:'【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套',
          priceTop:'39.9',
          priceBottom:'14.9',
          toRut:'/about',
          date:20210921,
          thumb:require("../assets/images/product/04.png"),
          gotourl:'https://p.pinduoduo.com/nAqa4r6W'
        },
        

      ]
    }
  },
  components: {
    MainList
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #000;
}
.main-box{
  background-color: #e8e4d9;
}

</style>
