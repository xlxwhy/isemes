<template>
  <main class="not-found">
    <div class="container">
      <div class="error-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">页面未找到</h2>
        <p class="error-description">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary">返回首页</router-link>
          <router-link to="/contact" class="btn btn-secondary">联系我们</router-link>
        </div>
        <div class="error-suggestions">
          <h3>您可能想访问</h3>
          <ul class="suggestion-list">
            <li><router-link to="/products">产品中心</router-link></li>
            <li><router-link to="/services">服务支持</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    document.title = '404 - 页面未找到 | 广州三思智联技术有限公司'
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', '抱歉，您访问的页面不存在。广州三思智联技术有限公司专注于针织织厂智能化管理解决方案。')
    }
  }
}
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  background-color: var(--bg-secondary);
}

.error-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: var(--accent-color);
  margin-bottom: 0;
  line-height: 1;
  text-shadow: 0 4px 20px rgba(230, 126, 34, 0.3);
}

.error-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.error-description {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 40px;
  line-height: 1.8;
}

.error-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.error-suggestions {
  background-color: var(--bg-primary);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.error-suggestions h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 25px;
}

.suggestion-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.suggestion-list li a {
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: var(--bg-secondary);
}

.suggestion-list li a:hover {
  background-color: var(--accent-color);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .error-suggestions {
    padding: 30px 20px;
  }
  
  .suggestion-list {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
