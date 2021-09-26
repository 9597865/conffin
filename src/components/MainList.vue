
<template>
<div class="" style="overflow:auto">
    <ul
      class="list"
    >
      <div v-for="(item, index) in datalist" :key="item" class="list-item" :style="{'width':(webWidth-spaceMargin)+'px'}">
          <img :src="item.thumb" @click="clickItem(item,index)">
      </div>
    </ul>
  </div>
</template>
<script>
  export default {
    props:['datalist'],
    data() {
      return {
        count: 0,
        spaceMargin: 0,
        loading: false,
        webWidth:document.documentElement.clientWidth,
        webHeight:document.documentElement.clientHeight,
      }
    },
    computed: {
      noMore() {
        return this.count >= 10
      },
      disabled() {
        return this.loading || this.noMore
      },
    },
    mounted () {
      this.setWebTitle() // 1
    },
    methods: {
      load() {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      },
      setWebTitle(){
        // document.title = '多多捡漏多多进宝'
      },
      clickItem(item, index){
        console.log(item.toRut)
        this.$router.push({ path: item.toRut })
      }
    },
  }
</script>

<style lang="scss" scoped>
$body-color: #000;
$body-size:1.4rem;
.list{
  color:$body-color;
  li{
    font-size: $body-size;
  }
  display: -webkit-flex;
  display: flex;
  position: relative;
  box-sizing: border-box;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  place-content: flex-start space-between;
  flex-shrink: 0;
  overflow: hidden;
  -webkit-box-pack: justify;
  -webkit-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0;
  margin:0;
  background: #e8e4d9;
  .list-item {
    /* border: 1px solid #f63; */
    /* height: 260px; */
    position: relative;
    /* width: 170.99999999999997px; */
    box-sizing: border-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    margin-top: 0;
    /* border-radius: 6px; */
    overflow: hidden;
    margin-left: 0;
    margin-right: 0;
    img{
      max-width: 100%;
      height:auto;
    }
  }
  
  
  
}
</style>
