<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo-text">三思智联</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/about" class="nav-link">关于我们</router-link>
        <router-link to="/products" class="nav-link">产品</router-link>
        <router-link to="/services" class="nav-link">服务</router-link>
        <router-link to="/contact" class="nav-link">联系我们</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
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
      this.scrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 24px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled {
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: fixed;
  padding: 16px 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.navbar-scrolled .logo-text {
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 48px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 12px 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--accent-color);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-link:hover {
  color: var(--accent-color);
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-scrolled .nav-link {
  color: var(--primary-color);
}

.navbar-scrolled .nav-link:hover {
  color: var(--accent-color);
}

/* Responsive menu */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
}
</style>
