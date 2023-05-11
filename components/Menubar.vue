<script setup lang="ts">
import { useNavMenuStore } from "~/stores/navMenu"
const navMenuStore = useNavMenuStore()
let menus = reactive([
  {
    id: 1,
    title: 'Favorites',
    icon: 'favorites.png',
    route: '/',
    activeClass: false,
    child: {}
  },
  {
    id: 2,
    title: 'Popular',
    icon: 'popular.png',
    route: '/',
    activeClass: false,
    child: {}
  },
  {
    id: 3,
    title: 'Flash Sales',
    icon: 'flash.png',
    route: '/',
    activeClass: false,
    child: {}
  },
  {
    id: 4,
    title: 'Foods',
    icon: 'foods.png',
    route: '/about',
    activeClass: false,
    child: {
      rotate: false,
      activeClass: false,
      list:[
        {
          id: 1,
          title: 'Fruits & Vegetable',
          route: '/',
          activeClass: false
          
        },
        {
          id: 2,
          title: 'Meat & Fish',
          route: '/',
          activeClass: false                
        },
        {
          id: 3,
          title: 'Cooking',
          route: '/',
          activeClass: false                
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Personal Care',
    icon: 'personal-care.png',
    route: '/personal',
    activeClass: false,
    child: {
      rotate: false,
      activeClass: false,
      list: [
        {
          id: 1,
          title: "Women's Care",
          route: '/',
          activeClass: false                
        },
        {
          id: 2,
          title: "Men's Care",
          route: '/',
          activeClass: false                
        }
      ]
    }
  }
])
function toggleChildMenu(menu, child = {}){
  let updateMenu = menus.map((item) => {        
    if(item.id == menu.id){
      item.activeClass = true
      if(item.child.list){
        item.child.rotate = true
        let updateChild = item.child.list.map((item2) => {
          if(child && item2.id == child.id){
            item2.activeClass = true
          }else{
            item2.activeClass = false
          }
          return item2
        })
        item.child.list = updateChild
      }
      return item
    }else{
      item.activeClass = false
      if(item.child.list){
        item.child.rotate = false
      }
      return item
    }
  }) 
  menus = updateMenu
}
</script>
<template>
  <div class="menu-content" :class="[navMenuStore.getHamburgerMenuStatus ? 'hide': 'show']">
    <div class="menu-item">  
      <div class="menu-item-group" v-for="menu in menus" :key="menu.id">
          <div class="item-parent" @click="toggleChildMenu(menu)">
              <img :src="`frontend/icons/menu/${menu.icon}`" alt="">
              <NuxtLink :to="menu.route" :class="{'nuxt-link-active': menu.activeClass}">{{ menu.title }}</NuxtLink>
              <img v-if="menu.child.list" class="child-menu-icon" :src="'frontend/icons/chevron-right.svg'" alt="No Image" :class="{'rotate': menu.child.rotate}">
          </div>            
          <div v-if="menu.child.list" class="item-child-group" :class="{'active': menu.activeClass}">                            
              <div class="item-child" v-for="child in menu.child.list" :key="child.id">
                <NuxtLink :to="child.route" :class="{'nuxt-link-active': child.activeClass}" @click="toggleChildMenu(menu, child)">{{ child.title }}</NuxtLink>                          
              </div>                                      
          </div>            
      </div>   
    </div> 
  </div>  
</template>