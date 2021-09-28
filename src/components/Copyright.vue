<template>
 <div class="copyright">
   <p>1960-2021 @郑氏寿材木器厂</p>
   <p @click="handleClick">开发制作:<span class="company" >奇特工作室</span></p>
 </div>
</template>
<script>
  export default {
    props: ['bannerPic'],
    methods: {
      handleClick(){
        this.$emit("open", 1);
      }
    },
  }
</script>

<style lang="scss" scoped>
.copyright{
  color:rgb(174, 174, 174);
  background-color: rgb(0, 0, 0);
  line-height: 80px;
  height:80px;
  p{
    line-height: 20px;
  }
  .company{
    color: #fff;
    font-weight: bold;
    /* text-decoration: underline; */
  }
}
</style>
