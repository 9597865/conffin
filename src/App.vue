<template>
  <div>
    <!-- <DrawDiv/> -->
    <TopMenu/>
    <Banner :bannerPic="bannerImg"/>
    <MainList :datalist="pddListData" />
    <AlertDiv/>
    <div class="copyright">1960-2021 @郑氏寿材木器厂</div>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import MainList from './components/MainList.vue'
import AlertDiv from './components/alert/AlertDiv.vue'
// import DrawDiv from './components/alert/DrawDiv.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  data(){
    return {
      bannerImg:require("./assets/images/banner.png"),
      topImgList:[
        'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b8014a90f603738d8387f7fabd1bb051f919ec1d.jpg',
        'https://t16img.yangkeduo.com/pdd_oms/2020-12-31/8c4982a42171002be033beaf5ad3817d.jpg',
        'https://www.qiter.com/static/pic/banner01.jpeg',
        'https://www.qiter.com/static/pic/banner02.png'
      ],
      pddListData:[
        {
          title:'【包邮】【北极绒】秋冬男女德绒保暖内衣套装无痕加绒加厚加大码秋衣秋裤',
          priceTop:'67.8',
          priceBottom:'19.8',
          date:20210922,
          thumb:require("./assets/images/product/01.png"),
          gotourl:'https://p.pinduoduo.com/y5la1qAu'
        },
        {
          title:'【包邮】秋冬新款ins韩版加绒加厚连帽卫衣女潮大码女装外套上衣时尚宽松',
          priceTop:'69.9',
          priceBottom:'17.9',
          date:20210922,
          thumb:require("./assets/images/product/02.png"),
          gotourl:'https://p.pinduoduo.com/V3saFOSD'
        },
        {
          title:'【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套',
          priceTop:'49.9',
          priceBottom:'16.9',
          date:20210922,
          thumb:require("./assets/images/product/03.png"),
          gotourl:'https://p.pinduoduo.com/4dearFP1'
        },
        {
          title:'【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套',
          priceTop:'39.9',
          priceBottom:'14.9',
          date:20210921,
          thumb:require("./assets/images/product/04.png"),
          gotourl:'https://p.pinduoduo.com/nAqa4r6W'
        },
        

      ]
    }
  },
  components: {
    AlertDiv,
    MainList,
    Banner,
    TopMenu
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #000;
}
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.copyright{
  color:rgb(174, 174, 174);
  background-color: rgb(0, 0, 0);
  line-height: 80px;
  height:80px;
}
</style>
