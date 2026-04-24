<template>
  <div class="h-[calc(100vh-64px)] w-full overflow-hidden">
    <iframe 
      ref="iframeRef"
      src="/scalar.html" 
      class="w-full h-full border-none"
      title="API Reference"
      @load="syncTheme"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

useHead({
  title: 'API Reference'
})

definePageMeta({
  layout: 'default'
})

const colorMode = useColorMode()
const iframeRef = ref<HTMLIFrameElement | null>(null)

// Synchronize theme with iframe
function syncTheme() {
  if (iframeRef.value && iframeRef.value.contentWindow) {
    iframeRef.value.contentWindow.postMessage({ theme: colorMode.value }, '*')
  }
}

// Watch for color mode changes and broadcast to iframe
watch(() => colorMode.value, () => {
  syncTheme()
})

// Ensure initial sync
onMounted(() => {
  syncTheme()
})
</script>
