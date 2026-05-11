<template>
  <button 
    v-show="isVisible" 
    class="back-to-top" 
    @click="scrollToTop"
    aria-label="返回顶部"
    title="返回顶部"
  >
    ↑
  </button>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isVisible: false,
      scrollThreshold: 300
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > this.scrollThreshold
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
