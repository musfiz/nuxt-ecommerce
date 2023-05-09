<script lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return {
      slider: [
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
        }
      ]
    }
  }
}
</script>
<template>
  <div class="home-slider">
    <carousel :autoplay="3000" :wrap-around="true" :pause-autoplay-on-hover="true">
      <slide v-for="item in slider" :key="item.id">
        <div class="carousel__item">
          <img :src="`/frontend/slider/${item.url}`" alt="No Image" />
        </div>
      </slide>
      <template #addons>
        <!-- <Navigation /> -->
        <!-- <Pagination /> -->
      </template>
    </carousel>
  </div>
</template>