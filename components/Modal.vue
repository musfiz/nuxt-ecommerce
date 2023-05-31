<script setup lang="ts">
 defineProps<{
    width: Number,
    height: Number,
    header: String,
  }>()
  const emits = defineEmits<{
    (e: 'closeDialog'):void
  }>()
  const close = () => {
    emits('closeDialog')
  }
</script>
<template>
  <div class="modal-overlay">
    <div class="modal" :style="{ width: width+'px', height: height+'px'}">
      <div class="modal-header">
        <div class="header-text">
          {{ header }}
        </div>
        <div class="btn-close" @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>    
  </div>
</template>