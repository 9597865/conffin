<template>
  <div ref="image-box" class="contain">
   <div class="image-box" :style="{'width':130*datelist.length+'px'}">
     <div v-for="item in datelist" :key="item" class="img-box" :style="{ 'background-image': 'url(' + item.pic + ')', 'background-repeat': 'no-repeat', 'background-size': '100%', 'background-position': 'center' }" @click="itemClick(item)">
        <div style="height:100px;"></div>
        <div style="">{{item.title}}</div>
     </div>
   </div>
  </div>
</template>
<script>
  export default {
    props: ['datelist'],
    comments:{},
    created() {
        let leftPox = 0
        let sign = 1
        this.$nextTick(()=>{
          let $img = this.$refs['image-box']
          if(this.datelist.length>0){
            setTimeout(()=>{
                const intervalId = setInterval(()=>{
                    leftPox += 2*sign
                    $img.scrollLeft = leftPox
                    if(leftPox>120){
                        sign = -1
                    }
                    if($img==null || leftPox<=0){
                        clearInterval(intervalId)
                    }
                },10)
            },2000)
          }
        })
    },
    methods: {
        itemClick(e){
            this.$router.push({ path: e.toRouter })
        }
    },
  }
</script>

<style lang="scss" scoped>

body{
  margin: 0;
  padding: 0;
}

.contain{
width: 100%;
overflow-y: auto;
.image-box{
  display: flex;
  .img-box{
      margin-left:30px;
      margin-right:30px;
      width:100px;
      height: 140px;
      &:active{
          opacity: 0.5;
      }
  }
}
}
</style>
