<script setup lang="ts">
import { useNavMenuStore } from '~/stores/navMenu';
const navMenuStore = useNavMenuStore()
function toggleSideNavbar(){
  const status = navMenuStore.getHamburgerMenuStatus
  navMenuStore.updateHamburgerMenuStatus(!status)
}
</script>
<template>
  <div class="header-wrapper">
    <div class="header-nav">           
      <button class="nav-menu" @click="toggleSideNavbar()">
        <svg style="" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div class="nav-brand">
          <img src="~/assets/frontend/logo.png" alt="">
      </div>
      <div class="nav-search">          
          <input type="text" placeholder="Search for products (e.g. eggs, milk, potato)">
          <button class="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#63666A" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>          
      </div>            
      <div class="nav-item help">
          <a class="nav-link" href="">{{ $t('header.complain') }}</a>
      </div>
      <div class="nav-item notification">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg>
        <span class="red-dot"></span>
      </div>
      <div class="nav-item locale">
        <span>
          <NuxtLink class="nav-link" to="javascript:void(0)"
            @click="$i18n.setLocale('en')">EN</NuxtLink> |
          <NuxtLink class="nav-link" to="javascript:void(0)"
            @click="$i18n.setLocale('bn')"> বাং</NuxtLink>          
        </span>
      </div>
      <!-- <div class="nav-item">
          <a href="">{{ $t('header.trackOrder') }}</a>
      </div> -->
      <div class="nav-item sign-in">
          <a class="nav-link" href="javascript:void(0)">{{ $t('header.signIn') }}</a>
      </div>
      <!-- <div class="nav-cart">
          <a href="#">{{ $t('header.cart') }}  <img :src="'frontend/icons/cart.svg'" alt=""></a>               
      </div> -->
    </div>
  </div>
</template>