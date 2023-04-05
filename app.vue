<template>
  <div>
    <NuxtLayout :name="layout">    
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
// You might choose this based on an API call or logged-in status
const route = useRoute()
let layout
if(route.name == 'cms'){
  layout = 'cms'
}else{
  layout = 'default'
}

</script>
