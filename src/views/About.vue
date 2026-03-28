<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>关于我们</h1>
      </div>
    </section>

    <section class="company-info">
      <div class="container">
        <div class="info-content">
          <div class="info-text">
            <h2>公司简介</h2>
            <p>ISemes科技专注于纺织行业智能化解决方案，基于人工智能和物联网技术，为纺织企业提供工业智能质检平台和纺织生产管理系统两大核心产品，实现从原料进仓到成品出仓的全流程智能化管理。</p>
            <p>我们的工业智能质检平台采用时空联合定位算法，实现24小时不间断疵点检测，漏检率低至0.1%；纺织生产管理系统则覆盖客户资料管理、原料进仓退仓、生产订单管理、坯布进出仓等完整生产流程，帮助企业实现数字化转型。</p>
            <p>我们拥有一支由计算机视觉、机器学习、工业自动化和生产管理领域专家组成的技术团队，致力于将最新的信息技术应用于传统纺织行业，提升生产效率和产品质量。我们的解决方案已经在多家纺织企业成功应用，为客户带来了显著的经济效益。</p>
          </div>
          <div class="info-image">
            <img src="https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=industrial%20technology%20team%20working%20on%20AI%20quality%20inspection&image_size=landscape_16_9" alt="公司团队">
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
  background-color: #c8995d;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.about-hero h1 {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
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
}

.info-text h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: #c8995d;
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
  background-color: #c8995d;
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
</style>
