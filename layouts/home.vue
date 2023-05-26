<script setup lang="ts">
import { useNavMenuStore } from "~/stores/navMenu"
import { useCartStore } from "~/stores/cart"
const navMenuStore = useNavMenuStore()
const cartStore = useCartStore()
onMounted(() => {
  console.log('This is initial mounted which is called first')
})
const updateCartbarStatus = () => {
  const status = cartStore.getCartbarStatus
  cartStore.updateCartbarStatus(!status)
}
</script>
<template>
  <div class="page">
    <Header /> 
    <div class="container">
        <div class="menu-container" :class="[navMenuStore.getHamburgerMenuStatus ? 'hide' : '']">
          <Menubar />    
        </div> 
        <div class="content-wrapper">
          <div class="sticky-cart-summary" :class="[!cartStore.getCartbarStatus ? 'hide' : '']" @click="updateCartbarStatus">
            <div class="item">
              <img src="~/assets/frontend/cart-bag.png" alt="No Image">
              <p>0 ITEMS</p>
            </div>
            <div class="amount">
              ৳ 0
            </div>
          </div>
          <slot />
        </div> 
        <div class="cartbar-container" :class="[cartStore.getCartbarStatus ? 'hide' : '']">
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