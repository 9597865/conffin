<template>
  <div class="main-box">
      <!-- {{this.$route.path}} -->
      <div v-for="(item, index) in picList" :key="item" class="pic-list">
          <img :src="item" @click="clickItem(item,index)">
      </div>
  </div>
</template>

<script>
import pathParse from 'path-parse';
export default {
  name: 'product',
  data(){
    return {
      imgIcon:require('../../assets/images/icon_chanpinjianjie.png'),
      picList:[],
      detailListData:[
          [
            require('../../assets/images/product/details/0/img_01.png'),
            require('../../assets/images/product/details/0/img_02.png'),
            require('../../assets/images/product/details/0/img_03.png'),
            require('../../assets/images/product/details/0/img_04.png'),
            require('../../assets/images/product/details/0/img_05.png'),
          ]
      ]
    }
  },
  components: {
  },
  watch : {
    '$route': 'fetchData'
  },
  created:function(){
       this.fetchData()
       this.picList = this.detailListData[0]
  },
  methods: {
    fetchData () {
      // replace getPost with your data fetching util / API wrapper
      console.log('details qiter')
      console.log(this.$route)
      /**
       * base: "0"
        dir: "/product/details"
        ext: ""
        name: "0"
        root: "/"
       */
      const pathObj = pathParse(this.$route.fullPath)
      console.log(pathObj)
      //   getPost(this.$route.params.id, (err, post) => {
      //     this.loading = false
      //     if (err) {
      //       this.error = err.toString()
      //     } else {
      //       this.post = post
      //     }
      //   })
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
  padding-top: 50px;
  background-color: #e8e4d9;
  .pic-list{
      img{
          max-width: 100%;
      }
  }
}

</style>
