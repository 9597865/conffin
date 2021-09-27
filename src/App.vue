<template>
  <div>
    <TopMenu/>
    <Banner :bannerPic="bannerImg"/>
    <AlertDiv/>
    <router-view class="view"></router-view>
    <Copyright/>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import AlertDiv from './components/alert/AlertDiv.vue'
import Banner from './components/Banner.vue'
import Copyright from './components/Copyright.vue'
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
      
    }
  },
  components: {
    AlertDiv,
    Banner,
    TopMenu,
    Copyright
  },
  

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

</style>
