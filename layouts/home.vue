<script setup lang="ts">
onMounted(() => {
  console.log('This is initial mounted which is called first')
})
</script>
<template>
  <div class="page">
    <Header /> 
    <div class="container">
        <div class="menu-container" >
          <Menubar />    
        </div> 
        <div class="content-wrapper">
          <slot />
        </div> 
    </div>
  </div>
</template>
<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
} 
</style>