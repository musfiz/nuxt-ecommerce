<script lang="ts">
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Autoplay
  },
  data(){
    return {
      
    }
  }
}
</script>
<template>  
  <div class="home-slider">
    <swiper
      :autoplay="autoplay"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>