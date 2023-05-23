<script setup lang="ts">
import { useNavMenuStore } from "~/stores/navMenu"
const navMenuStore = useNavMenuStore()
onMounted(() => {
  console.log('This is initial mounted which is called first')
})
</script>
<template>
  <div class="page">
    <Header /> 
    <div class="container">
        <div class="menu-container" :class="[navMenuStore.getHamburgerMenuStatus ? 'hide' : 'show']">
          <Menubar />    
        </div> 
        <div class="content-wrapper">
          <slot />
        </div> 
        <div class="cartbar-container">
          <Cartbar />
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