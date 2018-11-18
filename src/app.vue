<template>
  <div class="text">
     {{ text }}
  </div>
</template>

<script>
  export default {
    data(){
      return {
        text:'vue-srr'
      }
    }
  }
</script>

<style scoped>
  .text{
    color: red;
  }
</style>