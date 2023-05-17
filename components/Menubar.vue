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
    <div class="quick-access-item">
      <a href="#" class="help">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg> &nbsp;
        Help
      </a>
      <div class="complain">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
          <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <span>File a complaint</span>
      </div>
    </div>
  </div>  
  </div>
</template>