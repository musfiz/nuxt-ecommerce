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
          <div class="delivery-policy">
            <div class="policy-info">{{ $t('cart.deliveryPolicy') }}</div>
            <div class="amount">
              <span>৳ ৩৯ </span>
              <span class="info">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                </svg>
              </span>             
            </div>
          </div>
          <div class="cartbar-item">
            <div class="cartbar-empty">
              <img src="~/assets/frontend/empty-bag.png" alt="">
              <p>{{ $t('cart.emptyCart') }}</p>
            </div>
          </div>
        </div>        
      </div>
    </div>    
  </div>
</template>