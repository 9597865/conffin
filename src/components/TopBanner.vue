<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in piclist" :key="item">
      <div class="img-box" :style="{ 'background-image': 'url(' + item + ')', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center' }">
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    props: ['piclist'],
  }
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.el-carousel__container{
  height: 200px;
}
.el-carousel__item{
  height: auto;
}
.el-carousel__item .img-box {
    background-color: #fff;
    color: #475669;
    font-size: 18px;
    margin: 0;
    height: 200px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
