<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo-text">三思智联</router-link>
      </div>
      <div class="nav-links" :class="{ 'nav-links-open': menuOpen }">
        <router-link to="/" class="nav-link" @click="menuOpen = false">首页</router-link>
        <router-link to="/about" class="nav-link" @click="menuOpen = false">关于我们</router-link>
        <router-link to="/products" class="nav-link" @click="menuOpen = false">产品</router-link>
        <router-link to="/services" class="nav-link" @click="menuOpen = false">服务</router-link>
        <router-link to="/contact" class="nav-link" @click="menuOpen = false">联系我们</router-link>
      </div>
      <button class="menu-toggle" @click="menuOpen = !menuOpen" :class="{ 'menu-toggle-open': menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      menuOpen: false
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

/* Menu toggle button */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled .menu-toggle span {
  background-color: var(--primary-color);
}

.menu-toggle-open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle-open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle-open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Responsive menu */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .nav-links-open {
    right: 0;
  }
  
  .nav-link {
    color: var(--primary-color) !important;
    font-size: 1.25rem;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
}
</style>
