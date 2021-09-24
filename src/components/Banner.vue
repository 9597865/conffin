<template>
 <div>
   <div class="banner" :style="{ 'background-image': 'url(' + bannerPic + ')', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center' }">
    </div>  
 </div> 
</template>

<script>
  export default {
    props: ['bannerPic'],
  }
</script>

<style>
.banner{
    height: 230px;
}
</style>
