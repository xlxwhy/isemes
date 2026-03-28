<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">ISemes 科技</router-link>
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

<style scoped>
.navbar {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 5px 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c8995d;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #c8995d;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
