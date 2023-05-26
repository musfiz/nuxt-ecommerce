<script setup lang="ts">
import { useCartStore } from "~/stores/cart"
const cartStore = useCartStore()

const updateCartbarStatus = () => {
  const status = cartStore.getCartbarStatus
  cartStore.updateCartbarStatus(!status)
}
</script>
<template>
  <div>
    <div class="cartbar-wrapper">
      <div class="cartbar-content">
        <div class="cartbar-close-btn" @click="updateCartbarStatus"></div>
        <div class="cartbar">
          <div class="cartbar-header">
            <div class="cart-info">
              <img class="cart-bag" src="~/assets/icons/cart-bag.png" alt="No Image">
              <span>0 {{ $t('cart.info') }}</span>
            </div>
            <button class="btn-close" @click="updateCartbarStatus">{{ $t('cart.buttonTitle') }}</button>
          </div>
          <div class="delivery-policy">
            <div class="policy-info">{{ $t('cart.deliveryPolicy') }}</div>
            <div class="amount">
              <span>৳ ৩৯ </span>
              <span class="info">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                  </path>
                </svg>
              </span>
            </div>
          </div>
          <div class="cart-item">
            <div class="cart-empty">
              <img src="~/assets/frontend/empty-bag.png" alt="">
              <p>{{ $t('cart.emptyCart') }}</p>
            </div>
            <div class="product-item">

            </div>
          </div>
          <div class="special-code-content">
            <div class="special-code-header">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
              </div>
              <p>{{ $t('cart.specialCodeHeader') }}</p>
            </div>
            <div class="special-code-body">
                <input class="input" type="text" placeholder="রেফারেল/ডিসকাউন্ট কোড">
                <button class="btn-apply"> Apply</button>
                <button class="btn-close"> close</button>
            </div>
          </div>
          <div class="hotline-content">
            <p>{{ $t('cart.hotline') }} : 16250</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>