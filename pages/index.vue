<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useNavMenuStore } from "~/stores/navMenu"
const navMenuStore = useNavMenuStore()
const slider = reactive([
  {
    id: 1,
    url: '1.jpg'
  },
  {
    id: 2,
    url: '2.jpg'
  },
  {
    id: 3,
    url: '3.jpg'
  },
  {
    id: 4,
    url: '4.jpg'
  },
  {
    id: 5,
    url: '5.jpg'
  },
  {
    id: 6,
    url: '6.jpg'
  },
  {
    id: 7,
    url: '7.jpg'
  },
  {
    id: 8,
    url: '8.jpg'
  }
])
const breakpoints = reactive({
        // 700px and up
        700: {
          itemsToShow: 4,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 6,
          snapAlign: 'start',
        },
      })
const categories = ref(navMenuStore.getSelectedMenu)
</script>
<template>
    <div class="home-slider">
      <!-- <carousel :autoplay="3000" :wrap-around="true" :pause-autoplay-on-hover="true">
        <slide v-for="item in slider" :key="item.id">
          <div class="carousel__item">
            <img :src="`/frontend/slider/${item.url}`" alt="No Image" />
          </div>
        </slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </carousel> -->
      <carousel :itemsToShow="6" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true">
        <slide v-for="item in slider" :key="item.id">
          <div class="carousel__item">
            <img :src="`/frontend/slider2/${item.url}`" alt="No Image" />
          </div>
        </slide>

        <template #addons>
          <Navigation />
        </template>
      </carousel>
    </div>
    <div class="home-content">
      <div class="category-header">
        <div class="breadcrumb">
          {{ $i18n.locale == 'en' ? categories.title : categories.titleBn }}
        </div>
      </div>
      <div class="category-body">
        <div class="category-wrapper" v-if="categories.child">
          <!-- category items -->
          <div class="category-items" v-for="category in categories.child.list" :key="category.id" v-show="categories.child.list">
            <div class="category-image">
              <img :src="`/frontend/category/${category.id}.jpg`" alt="No Image" />
            </div>
            <div class="category-title">
              <nuxt-link class="category-link" to="#">{{ $i18n.locale == 'en' ? category.title : category.titleBn }}</nuxt-link>              
            </div>
          </div>
          <!-- category items -->
        </div>
      </div>
  </div>
</template>