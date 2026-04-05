<template>
  <div class="jobs">
    <section class="jobs-hero">
      <div class="container">
        <h1>招聘广场</h1>
        <p class="hero-subtitle">连接针织织厂与优秀人才的专业招聘平台</p>
      </div>
    </section>

    <section class="jobs-modules">
      <div class="container">
        <div class="modules-grid">
          <!-- Employer Module -->
          <div class="module-card employer">
            <div class="module-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <line x1="12" y1="13" x2="12" y2="17"></line>
                <line x1="12" y1="7" x2="12" y2="10"></line>
                <line x1="8" y1="13" x2="8" y2="17"></line>
                <line x1="16" y1="13" x2="16" y2="17"></line>
              </svg>
            </div>
            <h2>老板模块</h2>
            <p>发布招聘信息，寻找合适的技术人才和管理人才，助力企业发展</p>
            <router-link to="/jobs/employers" class="btn btn-primary">进入老板平台</router-link>
          </div>

          <!-- Employee Module -->
          <div class="module-card employee">
            <div class="module-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2>员工模块</h2>
            <p>浏览最新招聘信息，找到适合自己的职业机会，实现职业发展</p>
            <router-link to="/jobs/employees" class="btn btn-secondary">进入员工平台</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="jobs-features">
      <div class="container">
        <h2>平台优势</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9 12h6M12 9v6"></path>
              </svg>
            </div>
            <h3>精准匹配</h3>
            <p>基于针织行业特性，精准匹配企业需求与人才技能</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8l4 4-4 4"></path>
              </svg>
            </div>
            <h3>高效便捷</h3>
            <p>简化招聘流程，提高招聘效率，快速找到合适人选</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4m0 4h.01"></path>
              </svg>
            </div>
            <h3>安全可靠</h3>
            <p>严格的企业和人才认证机制，确保招聘信息真实可靠</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Jobs'
}
</script>

<style scoped>
.jobs-hero {
  background-color: var(--color-blue-opportunity); /* 机遇蓝 - 代表人才与机会 */
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.jobs-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(44, 92, 151, 0.9) 0%, rgba(44, 92, 151, 0.8) 100%);
  z-index: 1;
}

.jobs-hero .container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.jobs-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  font-weight: 400;
  color: white;
}

.jobs-modules {
  padding: 100px 0;
  background-color: var(--bg-primary);
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.module-card {
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: white;
  border: 1px solid var(--border-color);
}

.module-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.module-card.employer {
  border-top: 4px solid var(--accent-color);
}

.module-card.employee {
  border-top: 4px solid var(--secondary-color);
}

.module-icon {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.module-card.employer .module-icon svg {
  color: var(--accent-color);
}

.module-card.employee .module-icon svg {
  color: var(--secondary-color);
}

.module-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-weight: 700;
}

.module-card p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: var(--text-light);
}

.module-card .btn {
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  border: 2px solid var(--accent-color);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--accent-color);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
  border: 2px solid var(--secondary-color);
}

.btn-secondary:hover {
  background-color: transparent;
  color: var(--secondary-color);
}

.jobs-features {
  padding: 100px 0;
  background-color: var(--bg-secondary);
}

.jobs-features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin: 0 auto 60px;
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
  padding-bottom: 25px;
  display: block;
  max-width: fit-content;
}

.jobs-features h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feature-item {
  text-align: center;
  padding: 40px 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--accent-color);
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
  font-weight: 600;
}

.feature-item p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-light);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .modules-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 60px auto 0;
  }
  
  .jobs-hero h1 {
    font-size: 2.75rem;
  }
}

@media (max-width: 768px) {
  .jobs-hero {
    padding: 80px 0;
  }
  
  .jobs-hero h1 {
    font-size: 2.25rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .jobs-modules,
  .jobs-features {
    padding: 60px 0;
  }
  
  .module-card {
    padding: 40px 30px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .jobs-hero h1 {
    font-size: 2rem;
  }
  
  .module-card h2 {
    font-size: 1.75rem;
  }
  
  .module-card .btn {
    padding: 12px 30px;
  }
}
</style>