
<template>
    <el-dialog title="" v-model="centerDialogVisible" width="80%" center>
      <!-- <div class="top-img">
        <img src="https://www.qiter.com/static/pic/alertImg.png">
      </div> -->
      <div class="alert-msg">
        <h1>奇特工作室</h1>
        <div class="shengming">声明:</div>
        <div>1.专业网站制作开发，电脑端，手机端企业网站制作，网站系统后台开发维护。</div>
        <div>2.网站前端开发，小程序开发。网站代运营服务。</div>
        <div>3.微信号：qiter8</div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="centerDialogVisible = false"
            >我已了解</el-button
          >
        </span>
      </template>
    </el-dialog>
</template>

<script>
  export default {
    props:['open'],
    data() {
      return {
        centerDialogVisible: false,
      }
    },
    watch:{
      
    },
    created() {
      
    },
    methods: {
      show(){
        this.centerDialogVisible = true
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
