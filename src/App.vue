<template>
  <div>
    <!-- <DrawDiv/> -->
    <TopMenu/>
    <MainList :datalist="pddListData" />
    <AlertDiv/>
    <div class="copyright">1960-2021 @郑氏寿材木器厂</div>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import MainList from './components/MainList.vue'
import AlertDiv from './components/alert/AlertDiv.vue'
import DrawDiv from './components/alert/DrawDiv.vue'

export default {
  name: 'App',
  data(){
    return {
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
          thumb:'https://img.pddpic.com/mms-material-img/2021-09-21/fa6908e5-17c9-40ac-8279-5ba2bdcc7520.jpeg',
          gotourl:'https://p.pinduoduo.com/y5la1qAu'
        },
        {
          title:'【包邮】秋冬新款ins韩版加绒加厚连帽卫衣女潮大码女装外套上衣时尚宽松',
          priceTop:'69.9',
          priceBottom:'17.9',
          date:20210922,
          thumb:'https://img.pddpic.com/mms-material-img/2021-09-08/5cf3517d-9a56-4e03-862a-3d25f496edc7.jpeg.a.jpeg',
          gotourl:'https://p.pinduoduo.com/V3saFOSD'
        },
        {
          title:'【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套',
          priceTop:'49.9',
          priceBottom:'16.9',
          date:20210922,
          thumb:'https://img.pddpic.com/mms-material-img/2021-04-30/41184899-ea59-40a4-ab69-ac8486861936.jpeg.a.jpeg',
          gotourl:'https://p.pinduoduo.com/4dearFP1'
        },
        {
          title:'【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套',
          priceTop:'39.9',
          priceBottom:'14.9',
          date:20210921,
          thumb:'https://img.pddpic.com/gaudit-image/2021-09-05/b971d6047e2aed189e8a783fe683bea4.jpeg',
          gotourl:'https://p.pinduoduo.com/nAqa4r6W'
        },
        {
          title:'【包邮】清风厨房专用吸油纸擦油纸卫生纸油炸家用整箱优惠批发厨房纸',
          priceTop:'11.9',
          priceBottom:'8.9',
          date:20210921,
          thumb:'https://t00img.yangkeduo.com/goods/images/2021-07-26/721b5cb1d741bfa760007024aa8b1b08.jpeg',
          gotourl:'https://p.pinduoduo.com/OAyTCTKc'
        },
        {
          title:'【包邮】【80包一年装】原木抽纸巾家用纸巾抽纸批发卫生纸抽整箱10包家用',
          priceTop:'42.9',
          priceBottom:'36.9',
          date:20210921,
          thumb:'https://t00img.yangkeduo.com/goods/images/2021-07-06/411180c64be23ec4825e5f97890ccc28.jpeg',
          gotourl:'https://p.pinduoduo.com/117TEZAM'
        },
        {
          title:'【包邮】维达细韧抽纸纸巾3层100抽6/24包无香宝宝餐巾纸面巾纸家用卫生纸',
          priceTop:'26.9',
          priceBottom:'15.9',
          date:20210921,
          thumb:'https://t00img.yangkeduo.com/goods/images/2021-05-28/027fd6d08648102402e952162e3a7dd7.jpeg',
          gotourl:'https://p.pinduoduo.com/cnoarKZh'
        },
        {
          title:'【包邮】【南极人纯棉5/10双】男士中筒韩版潮流袜运动袜防臭吸汗透气棉袜',
          priceTop:'42.8',
          priceBottom:'13.8',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/mkMaivOP.jpeg',
          gotourl:'https://p.pinduoduo.com/mkMaivOP'
        },
        {
          title:'【包邮】学生帆布鞋女鞋韩版ulzzang百搭2021年春季新款春秋低帮小白板鞋',
          priceTop:'36.99',
          priceBottom:'15.99',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/xteavxeb.jpeg',
          gotourl:'https://p.pinduoduo.com/xteavxeb'
        },
        {
          title:'【包邮】小脏橘厚底帆布鞋女2021新款小众小白鞋女学生韩版大头板鞋ins潮',
          priceTop:'10.9',
          priceBottom:'7.99',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/rpeaa1c7.jpeg',
          gotourl:'https://p.pinduoduo.com/rpeaa1c7'
        },
        {
          title:'【包邮】小白鞋女2021秋季新款百搭厚底鞋子女学生韩版ins原宿风运动板鞋',
          priceTop:'29.9',
          priceBottom:'14.9',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/9dgaxrRx.jpeg',
          gotourl:'https://p.pinduoduo.com/9dgaxrRx'
        },
        {
          title:'【包邮】老北京布鞋妈妈鞋秋季新款百搭潮鞋网红智熏超火休闲运动女鞋子',
          priceTop:'69.9',
          priceBottom:'6.9',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/FIFamiAs.jpeg',
          gotourl:'https://p.pinduoduo.com/FIFamiAs'
        },
        {
          title:'【包邮】老北京布鞋女士平底单鞋休闲工作运动鞋加绒棉鞋网鞋妈妈鞋防滑',
          priceTop:'33',
          priceBottom:'8.99',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/TSnaQp7i.jpeg',
          gotourl:'https://p.pinduoduo.com/TSnaQp7i'
        },
        {
          title:'【包邮】老北京布鞋男加绒保暖棉鞋上线加厚牛筋底防臭防滑耐磨休闲工作鞋',
          priceTop:'39',
          priceBottom:'8.25',
          date:20210921,
          thumb:'https://www.qiter.com/static/pic/thumb/9g7artdZ.jpeg',
          gotourl:'https://p.pinduoduo.com/9g7artdZ'
        },

      ]
    }
  },
  components: {
    AlertDiv,
    MainList,
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
