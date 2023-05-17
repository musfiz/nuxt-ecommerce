<script setup lang="ts">
import { useNavMenuStore } from "~/stores/navMenu"
const navMenuStore = useNavMenuStore()
let menus = reactive([
  {
    id: 1,
    title: 'Favorites',
    titleBn: 'পছন্দের পণ্য',
    icon: 'favorites.png',
    route: '/favorite',
    activeClass: false,
    child: {}
  },
  {
    id: 2,
    title: 'Popular',
    titleBn: 'জনপ্রিয়',
    icon: 'popular.png',
    route: '/popular',
    activeClass: false,
    child: {}
  },
  {
    id: 3,
    title: 'Flash Sales',
    titleBn: 'ফ্ল্যাশ সেলস',
    icon: 'flash.png',
    route: '/flash-sales',
    activeClass: false,
    child: {}
  },
  {
    id: 4,
    title: 'Foods',
    titleBn: 'খাবার সামগ্রী',
    icon: 'foods.png',
    route: '/',
    activeClass: false,
    child: {
      rotate: false,
      activeClass: false,
      list:[
        {
          id: 1,
          title: 'Fruits & Vegetable',
          titleBn: 'ফল এবং সবজি',
          route: '/',
          activeClass: false
          
        },
        {
          id: 2,
          title: 'Meat & Fish',
          titleBn: 'মাছ এবং মাংস',
          route: '/',
          activeClass: false                
        },
        {
          id: 3,
          title: 'Cooking',
          titleBn: 'রান্নাবান্না',
          route: '/',
          activeClass: false                
        },
        {
          id: 4,
          title: 'Sauces & Pickles',
          titleBn: 'সস এবং আচার',
          route: '/',
          activeClass: false                
        },
        {
          id: 5,
          title: 'Dairy & Eggs',
          titleBn: 'দুগ্ধজাত দ্রব্য এবং ডিম',
          route: '/',
          activeClass: false                
        },
        {
          id: 6,
          title: 'Breakfast',
          titleBn: 'নাশতা',
          route: '/',
          activeClass: false                
        },
        {
          id: 7,
          title: 'Candy & Chocolate',
          titleBn: 'ক্যান্ডি এন্ড চকলেট',
          route: '/',
          activeClass: false                
        },
        {
          id: 8,
          title: 'Snacks',
          titleBn: 'জল খাবার',
          route: '/',
          activeClass: false                
        },
        
      ]
    }
  },
  {
    id: 5,
    title: 'Personal Care',
    titleBn: 'প্রসাধন সামগ্রী',
    icon: 'personal-care.png',
    route: '/personal-care',
    activeClass: false,
    child: {
      rotate: false,
      activeClass: false,
      list: [
        {
          id: 1,
          title: "Women's Care",
          titleBn: 'মহিলাদের ব্যবহার্য',
          route: '/',
          activeClass: false               
        },
        {
          id: 2,
          title: "Men's Care",
          titleBn: 'পুরুষদের ব্যবহার্য',
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

function storeSelectedMenuInStore(menu, child = {}){
  navMenuStore.updateSelectedMenu(menu)
}

</script>
<template>
  <div class="menu-wrapper" :class="[navMenuStore.getHamburgerMenuStatus ? 'hide': 'show']">
    <div class="menu-content">
    <div class="menu-item">  
      <div class="menu-item-group" v-for="menu in menus" :key="menu.id">
          <div class="item-parent" @click="toggleChildMenu(menu)">
              <img :src="`frontend/icons/menu/${menu.icon}`" alt="">
              <NuxtLink v-if="$i18n.locale == 'en'" :to="menu.route" :class="{'nuxt-link-active': menu.activeClass}" @click=" storeSelectedMenuInStore(menu)">{{ menu.title }}</NuxtLink>
              <NuxtLink v-else :to="menu.route" :class="{'nuxt-link-active': menu.activeClass}" @click=" storeSelectedMenuInStore(menu)">{{ menu.titleBn }}</NuxtLink>
              <img v-if="menu.child.list" class="child-menu-icon" :src="'frontend/icons/chevron-right.svg'" alt="No Image" :class="{'rotate': menu.child.rotate}">
          </div>            
          <div v-if="menu.child.list" class="item-child-group" :class="{'active': menu.activeClass}">                            
              <div class="item-child" v-for="child in menu.child.list" :key="child.id">
                <NuxtLink v-if="$i18n.locale == 'en'" :to="child.route" :class="{'nuxt-link-active': child.activeClass}" @click="toggleChildMenu(menu, child)">{{ child.title }}</NuxtLink>                          
                <NuxtLink v-else :to="child.route" :class="{'nuxt-link-active': child.activeClass}" @click="toggleChildMenu(menu, child)">{{ child.titleBn }}</NuxtLink>                          
              </div>                                      
          </div>            
      </div>   
    </div> 
  </div>  
  </div>
</template>