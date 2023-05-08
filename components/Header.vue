<template>
  <div class="header-wrapper">
    <div class="header-nav">           
      <button class="nav-menu">
        <svg style="" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div class="nav-brand">
          <img :src="'frontend/logo.png'" alt="">
      </div>
      <div class="nav-search">          
          <input type="text">
          <button class="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#63666A" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>          
      </div>            
      <div class="nav-item">
          <a href="">Complain & Help</a>
      </div>
      <div class="nav-item">
          <a href="">Track Order</a>
      </div>
      <div class="nav-account">
          <a href="">Sign in</a>
      </div>
      <div class="nav-cart">
          <a href="#">Cart  <img :src="'frontend/icons/cart.svg'" alt=""></a>               
      </div>
    </div>
  </div>
</template>