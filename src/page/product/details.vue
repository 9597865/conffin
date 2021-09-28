<template>
  <div class="main-box">
    <Slider :datelist='sliderList' v-if="sliderList.length>0"/>
      <!-- {{this.$route.path}} -->
    <div v-for="(item, index) in picList" :key="item" class="pic-list">
      <img :src="item" @click="clickItem(item,index)">
    </div>
  </div>
</template>

<script>
import Glo from '../../GloData/Glo.js'
import pathParse from 'path-parse';
import Slider from '../../components/SliderBanner.vue';
export default {
  name: 'product',
  data(){
    return {
      imgIcon:require('../../assets/images/icon_chanpinjianjie.png'),
      picList:[],
      sliderList:[],
      detailListData:[
          [
            require('../../assets/images/product/details/0/img_0_01.png'),
            require('../../assets/images/product/details/0/img_0_02.png'),
            require('../../assets/images/product/details/0/img_0_03.png'),
            require('../../assets/images/product/details/0/img_0_04.png'),
            require('../../assets/images/product/details/0/img_0_05.png'),
          ],
          [
            require('../../assets/images/product/details/1/img_1_01.png'),
            require('../../assets/images/product/details/1/img_1_02.png'),
            require('../../assets/images/product/details/1/img_1_03.png'),
            require('../../assets/images/product/details/1/img_1_04.png'),
            require('../../assets/images/product/details/1/img_1_05.png'),
            require('../../assets/images/product/details/1/img_1_06.png'),
            require('../../assets/images/product/details/1/img_1_07.png'),
            require('../../assets/images/product/details/1/img_1_08.png'),
          ],
          [
            require('../../assets/images/product/details/2/img_2_01.png'),
            require('../../assets/images/product/details/2/img_2_02.png'),
            require('../../assets/images/product/details/2/img_2_03.png'),
            require('../../assets/images/product/details/2/img_2_04.png'),
            require('../../assets/images/product/details/2/img_2_05.png'),
            require('../../assets/images/product/details/2/img_2_06.png'),
            require('../../assets/images/product/details/2/img_2_07.png'),
            require('../../assets/images/product/details/2/img_2_08.png'),
            require('../../assets/images/product/details/2/img_2_09.png'),
            require('../../assets/images/product/details/2/img_2_10.png'),
            require('../../assets/images/product/details/2/img_2_11.png'),
          ],
          [
            require("../../assets/images/product/p04.png"),
          ],
          [
            require("../../assets/images/product/p05.png"),
          ]
      ]
    }
  },
  components: {
    Slider
  },
  watch : {
    '$route': 'fetchData'
  },
  created:function(){
      const id = this.getUrlDetailsId()
      this.fetchData()
      this.picList = this.detailListData[id]
      this.sliderList = Glo.productSlidrList
  },
  unmount:function() {
		console.log('ul beforeDestroy')
	},
  methods: {
    getUrlDetailsId(){
      const pathObj = pathParse(this.$route.fullPath)
      const id = pathObj.name || 0
      return id
    },
    setTitlePage(id){
      if(Glo.productSlidrList[id]){
        document.title = '郑氏工艺-'+Glo.productSlidrList[id].title
      }
    },
    fetchData () {
      // replace getPost with your data fetching util / API wrapper
      // console.log('details qiter')
      // console.log(this.$route)
      /**
       * base: "0"
        dir: "/product/details"
        ext: ""
        name: "0"
        root: "/"
       */
      const id = this.getUrlDetailsId() 
      this.picList = this.detailListData[id]

      
      }
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
  background-color: #e8e4d9;
  .pic-list{
      img{
          max-width: 100%;
      }
  }
}

</style>
