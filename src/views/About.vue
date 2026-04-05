<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>关于我们</h1>
        <p class="hero-subtitle">专注于针织织厂智能化管理解决方案的专业团队</p>
      </div>
    </section>

    <section class="company-info">
      <div class="container">
        <div class="info-content">
          <div class="info-text">
            <h2>针织织厂管理系统专业方案商</h2>
            <p>作为针织织厂管理系统专业方案商，我们专注于为针织企业提供智能化管理解决方案。基于人工智能和物联网技术，我们开发了机台管理系统和纺织生产管理系统两大核心产品，帮助企业实现生产过程的数字化、智能化管理。</p>
            <p>我们的机台管理系统实现了机台监控随时随地、工资统计精准快速、生产报表精炼省时等核心功能，支持本地或云端部署，可根据企业需求快速定制。系统采用先进的技术架构，确保数据安全可靠，操作简便易用。</p>
            <p>我们拥有一支经验丰富的技术团队，致力于将最新的信息技术应用于传统针织行业，提升生产效率和管理水平。我们的解决方案已经在多家针织企业成功应用，为客户带来了显著的经济效益和管理提升。</p>
          </div>
          <div class="info-image">
            <img src="https://picsum.photos/id/119/1200/800" alt="现代工业科技">
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision">
      <div class="container">
        <div class="mission">
          <h3>我们的使命</h3>
          <p>通过人工智能技术，帮助纺织企业实现智能化转型，降低生产成本，提高产品质量，增强市场竞争力。</p>
        </div>
        <div class="vision">
          <h3>我们的愿景</h3>
          <p>成为全球领先的工业智能质检解决方案提供商，引领纺织行业的智能化革命。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background-color: var(--primary-color);
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(19, 66, 115, 0.9) 0%, rgba(19, 66, 115, 0.8) 100%);
  z-index: 1;
}

.about-hero .container {
  position: relative;
  z-index: 2;
}

.about-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  font-weight: 400;
  color: white;
}

.company-info {
  padding: 100px 0;
}

.info-content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.info-text {
  flex: 1;
}

.info-text h2 {
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 15px;
  display: inline-block;
  text-align: left;
}

.info-text h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--accent-color);
  transform: none;
}

.info-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: #666;
}

.info-image {
  flex: 1;
  overflow: hidden;
}

.info-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.3s ease;
}

.info-image:hover img {
  transform: scale(1.05);
}

.mission-vision {
  background-color: #f8f9fa;
  padding: 100px 0;
}

.mission-vision .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.mission, .vision {
  text-align: center;
  padding: 50px 40px;
  background-color: white;
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mission::before, .vision::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var(--accent-color);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.mission:hover, .vision:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.mission:hover::before, .vision:hover::before {
  transform: scaleY(1);
}

.mission h3, .vision h3 {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.mission p, .vision p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-hero {
    padding: 80px 0;
  }
  
  .about-hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    padding: 0 16px;
  }
  
  .company-info {
    padding: 60px 0;
  }
  
  .info-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .info-text h2 {
    font-size: 1.8rem;
  }
  
  .info-text p {
    font-size: 1rem;
  }
  
  .info-image img {
    height: 300px;
  }
  
  .mission-vision {
    padding: 60px 0;
  }
  
  .mission-vision .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .mission, .vision {
    padding: 40px 30px;
  }
  
  .mission h3, .vision h3 {
    font-size: 1.5rem;
  }
  
  .mission p, .vision p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about-hero h1 {
    font-size: 2rem;
  }
  
  .info-text h2 {
    font-size: 1.6rem;
  }
  
  .info-image img {
    height: 250px;
  }
  
  .mission, .vision {
    padding: 30px 20px;
  }
}
</style>
