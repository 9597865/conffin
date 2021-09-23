
<template>
    <el-dialog title="" v-model="centerDialogVisible" width="80%" center>
      <div class="top-img">
        <img src="https://www.qiter.com/static/pic/alertImg.png">
      </div>
      <div class="alert-msg">
        <div class="shengming">声明:</div>
        <div>1.多多捡漏站商品均来自拼多多商家，精选质优低价格促销。</div>
        <div>2.本站不留存任何用户数，网友购买产品，均跳转到拼多多电商品。</div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
          <el-button type="danger" @click="centerDialogVisible = false"
            >我已了解</el-button
          >
        </span>
      </template>
    </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
      }
    },
  }
</script>

<style lang="scss" scoped>

.top-img{
    margin:0 auto;
    margin-bottom:10px;
    text-align:center;
    background-color:#000000;
    border-radius:8px;
    img{
        margin:0 auto;
        text-align:center;
        max-width:100%;
        height:100px;
    }
}
.shengming{
    font-size:0.8rem;
    color:#f00;
}
.alert-msg{
    font-size:0.8rem;
}
.dialog-footer .el-button{
    width: 100%;
}
</style>
