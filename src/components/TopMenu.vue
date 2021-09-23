<template>
 <div class="bg">
     <div class="menu-box" @click="clickFun">
         <div class="menu-line"></div>
     </div>
 </div> 
</template>

<script>
  export default {
    name: "TestCom",
    props: {
          title: {type: String,default: "",},
    },
    created() {
        console.log(this.$attrs)
    },
    methods: {
        clickFun(e) {
            alert('qiter')
            this.$emit('click-event', e)
        }
    }
  }
</script>

<style lang="scss" scoped>
$lineColor:#ccc;
.bg{
    display: flex;
    align-content: center;
    justify-content: right;
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
            height: 5px;
            border-top: 5px solid $lineColor;
            border-bottom:5px solid $lineColor;
            background-color: $lineColor;
            padding: 5px 0;
            margin:10px 10px;
            background-clip:content-box;
        }

    }
}
</style>
