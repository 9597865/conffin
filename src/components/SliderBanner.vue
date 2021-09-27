<template>
  <div class="contain">
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
ul{
	height: 260px;
	overflow-y: scroll;
	overflow-x: hidden;
}
ul::-webkit-scrollbar { 
	/* 隐藏默认的滚动条 */
	-webkit-appearance: none;
}
ul::-webkit-scrollbar:vertical { 
	/* 设置垂直滚动条宽度 */
	width: 2px;
}


/* 这里不需要用到这个 */
ul::-webkit-scrollbar:horizontal{
	/* 设置水平滚动条厚度 */
	height: 2px;
}

ul::-webkit-scrollbar-thumb { 
	/* 滚动条的其他样式定制，注意，这个一定也要定制，否则就是一个透明的滚动条 */
	border-radius: 8px; 
	border: 2px solid rgba(73, 73, 73, 0.4); 
	background-color: rgba(0, 0, 0, .5);
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
