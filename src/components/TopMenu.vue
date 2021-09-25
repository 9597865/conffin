<template>
 <div class="bg">
     <div class="menu-box" @click="clickFun">
        <div class="menu-line"></div>
     </div>
     <div class="menu-txt-list-box" >
        <div class="menu-txt-item" @click.stop="clickTxtMenu('/')">木厂简介</div>
        <div class="menu-txt-item" @click.stop="clickTxtMenu('/product')">产品介绍</div>
        <div class="menu-txt-item" @click.stop="clickTxtMenu('/contact')">联系方式</div>
     </div>
     <div class="menu-list  menu-fade" v-if="isShowMenu" @click.stop="clickCloseMenu" >
        <div :style="{ 'width':'100%', 'background-color': '#000', 'background-image': 'url(' + menuBgImgUrl + ')', 'background-repeat': 'no-repeat', 'background-size': '120px 220px', 'background-position': 'top left' }">

          <div class="menu-item" @click.stop="clickMenu('/')">首页</div>
          <div class="menu-item" @click.stop="clickMenu('/resume')">木厂简介</div>
          <div class="menu-item" @click.stop="clickMenu('/product')">产品介绍</div>
          <div class="menu-item" @click.stop="clickMenu('/cooperate')">商务合作</div>
          <div class="menu-item" @click.stop="clickMenu('/contact')">联系方式</div>
        </div>
     </div>
 </div> 
</template>

<script>
  export default {
    name: "TestCom",
    props: {
        title: {type: String,default: "",},
    },
    data(){
        return {
            isShowMenu:false,
            menuBgImgUrl:require("../assets/images/icon_chuancheng.png")
        }
    },
    created() {
        console.log(this.$attrs)
    },
    methods: {
        showMenu(){
            this.isShowMenu = !this.isShowMenu 
        },
        clickFun(e) {
            this.showMenu()
            this.$emit('click-event', e)
        },
        clickMenu(e){
            this.showMenu()
            this.$router.push({ path: e })
        },
        clickTxtMenu(e){
            this.$router.push({ path: e })
        },
        clickCloseMenu(){
            this.isShowMenu = false 
        }
    }
  }
</script>

<style lang="scss" scoped>
$lineColor:#ccc;
.bg{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width:100%;
    height:100%;
    display: flex;
    align-content: center;
    align-items: center;
    width:100%;
    height: 60px;
    background-color: #000;
    .menu-box{
        width:50px;
        height: 50px;
        border-radius: 6px;
        /* background-color: #666; */
        .menu-line{
            width: 30px;
            height: 3px;
            border-top: 3px solid $lineColor;
            border-bottom:3px solid $lineColor;
            background-color: $lineColor;
            padding: 7px 0;
            margin:10px 10px;
            background-clip:content-box;
        }
    }
    .menu-txt-list-box{
        position: fixed;
        left:0;
        margin-top: 120px;
        width:100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #333;
        .menu-txt-item{
            padding: 0 20px ;
            color:#fff;
            &:active{
                color: #f00;
            }
        }
    }
    .menu-list{
        position: fixed;
        top: 59px;
        left: 0;
        z-index: 1;
        width:100%;
        height:100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        .menu-item{
            color:#ccc;
            font-size: 20px;
            /* margin-top:10px; */
            padding:15px 10px;
            /* border:1px solid #f63; */
            border-top: 1px solid rgb(20, 20, 20);
            /* background-color: #000; */
            &:hover{
                color:#fff;
                background-color: #222;
            }
            &:active{
                color:#fff;
                background-color: #222;
            }
        }
    }
    .menu-fade
    {
        -webkit-animation-name: fadeIn; /*动画名称*/
        -webkit-animation-duration: 1s; /*动画持续时间*/
        -webkit-animation-iteration-count: 1; /*动画次数*/
        -webkit-animation-delay: 0s; /*延迟时间*/
    }
    @-webkit-keyframes fadeIn {
        0% {
        opacity: 0; /*初始状态 透明度为0*/
        }
        50% {
        opacity: 1; /*中间状态 透明度为0*/
        }
        100% {
        opacity: 1; /*结尾状态 透明度为1*/
        }
    }
}
</style>
