<template>
  <div>
    <div class="cartbar-wrapper">
      <div class="cartbar-content">
        <div class="cartbar-item">
          <div class="cartbar-header">
            <div class="cart-info">
              <img class="cart-bag" src="~/assets/icons/cart-bag.png" alt="No Image">
              <span>0 {{ $t('cart.info') }}</span>
            </div>
            <button class="btn-close">{{ $t('cart.buttonTitle') }}</button>
          </div>
        </div>        
      </div>
    </div>    
  </div>
</template>