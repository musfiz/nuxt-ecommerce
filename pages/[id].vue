<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div>
    The route is : {{ route.fullPath }} 
  </div>
</template>