<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="https://picsum.photos/id/180/1920/1080" alt="工业智能科技">
      </div>
      <div class="container">
        <div class="hero-content">
          <h1>广州三思智联技术有限公司</h1>
          <p>针织织厂管理系统专业方案商</p>
          <a href="/products" class="btn btn-primary">了解产品</a>
          <a href="/services" class="btn btn-secondary">查看服务</a>
        </div>
      </div>
    </section>

    <!-- Product Advantages Section -->
    <section class="product-advantages">
      <div class="container">
        <h2>产品优势</h2>
        <div class="advantages-grid">
          <div class="advantage-item">
            <div class="advantage-icon ai-icon"></div>
            <h3>AI智能质检</h3>
            <p>7*24小时不间断疵点检测，实时停机告警，漏检率不超2%，过检率不超20%</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon workflow-icon"></div>
            <h3>生产全流程管理</h3>
            <p>覆盖客户资料、原料进仓、生产订单、坯布进出仓的完整生产管理流程</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon monitor-icon"></div>
            <h3>实时数据监控</h3>
            <p>生产进度、库存状态、质量检测实时监控，云端日报随时查看</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Features Section -->
    <section class="product-features">
      <div class="container">
        <h2>产品功能</h2>
        <div class="features-grid">
          <div class="feature-item">
            <h3>机台监控 随时随地</h3>
            <p>实时监控机台状态，支持手机端随时随地查看生产数据，及时掌握生产情况</p>
          </div>
          <div class="feature-item">
            <h3>工资统计 精准快速</h3>
            <p>自动计算工人工资，减少人工统计误差，提高工资核算效率</p>
          </div>
          <div class="feature-item">
            <h3>生产报表 精炼省时</h3>
            <p>自动生成各类生产报表，数据精准，减少人工整理时间，提升管理效率</p>
          </div>
          <div class="feature-item">
            <h3>本地或云端部署 快速定制</h3>
            <p>支持本地服务器部署或云端部署，可根据企业需求快速定制功能模块</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Advantages Section -->
    <section class="technical-advantages">
      <div class="container">
        <h2>技术优势</h2>
        <div class="advantages-grid">
          <div class="advantage-item">
            <h3>高精度识别</h3>
            <p>适应所有国产及进口品牌的单面机型，识别精度高，漏检率低</p>
          </div>
          <div class="advantage-item">
            <h3>本地部署</h3>
            <p>本地部署设备，安装快捷简便、位置固定、维护轻松简单</p>
          </div>
          <div class="advantage-item">
            <h3>端云一体</h3>
            <p>采用时空联合定位算法，响应速度快，维护成本低，检测效率高</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Benefits Section -->
    <section class="customer-benefits">
      <div class="container">
        <h2>为您带来的效益</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon waste-reduction-icon"></div>
            <h3>废布量极大减少</h3>
            <p>废布经济损失降低80%以上</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon efficiency-icon"></div>
            <h3>工人效率提升</h3>
            <p>从看4台机到看6台机，工作积极性变高</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon order-growth-icon"></div>
            <h3>订单量显著提升</h3>
            <p>布匹品质卓越，订单源源不断</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section class="customer-reviews">
      <div class="container">
        <h2>客户评价</h2>
        <div class="reviews-grid">
          <div class="review-item" v-for="(review, index) in reviews" :key="index">
            <div class="review-content">
              <p>{{ review }}</p>
            </div>
            <div class="review-author">
              <span>{{ reviewAuthors[index] }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        "用了之后每台机的废布损失减少了80%",
        "装了检测设备后，每台机每个月能省下近千元",
        "装了之后，除了废布减少了，工人的工作积极性也提高了不少",
        "工人说现在看机更简单了，而且每天还可以多织布",
        "以前一个工人看4台机，装了之后一个工人可以看6台机",
        "装了之后，看机效率和看机质量都提升了"
      ],
      reviewAuthors: [
        "针织厂1",
        "针织厂2",
        "针织厂3",
        "针织厂4",
        "针织厂5",
        "针织厂6"
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.hero-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: -1;
  border-radius: 10px;
  padding: 50px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  letter-spacing: 1px;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #666;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  padding: 15px 40px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

.btn-primary {
  background-color: #c8995d;
  color: white;
  border: 2px solid #c8995d;
}

.btn-primary:hover {
  background-color: transparent;
  color: #c8995d;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #c8995d;
  border: 2px solid #c8995d;
  margin-top: 30px;
}

.btn-secondary:hover {
  background-color: #c8995d;
  color: white;
  transform: translateY(-2px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Common styles for all sections */
.product-advantages, .product-features, .technical-advantages, .customer-benefits, .customer-reviews {
  padding: 100px 0;
  position: relative;
}

.product-features, .customer-reviews {
  background-color: #f8f9fa;
}

.product-advantages h2, .product-features h2, .technical-advantages h2, .customer-benefits h2, .customer-reviews h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 70px;
  color: #333;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.product-advantages h2::after, .product-features h2::after, .technical-advantages h2::after, .customer-benefits h2::after, .customer-reviews h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #c8995d;
}

/* Grid styles */
.advantages-grid, .features-grid, .benefits-grid, .reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 60px 40px;
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--text-color);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 24px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: -1px;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 40px;
  color: var(--text-light);
  line-height: 1.8;
}

.hero-content .btn {
  margin: 0 12px;
}

/* Product Advantages Section */
.product-advantages {
  background-color: var(--bg-secondary);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

/* Product Features Section */
.product-features {
  background-color: var(--bg-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

/* Technical Advantages Section */
.technical-advantages {
  background-color: var(--bg-secondary);
}

/* Customer Benefits Section */
.customer-benefits {
  background-color: var(--bg-primary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

/* Reviews Section */
.reviews {
  background-color: var(--bg-secondary);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

/* CTA Section */
.cta {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.cta h2 {
  color: white;
}

.cta h2::after {
  background-color: var(--accent-color);
}

/* Item styles */
.advantage-item, .feature-item, .benefit-item {
  background-color: var(--bg-primary);
  padding: 48px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.advantage-item::before, .feature-item::before, .benefit-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background-color: var(--accent-color);
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3px;
}

.advantage-item:hover, .feature-item:hover, .benefit-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.advantage-item:hover::before, .feature-item:hover::before, .benefit-item:hover::before {
  transform: scaleY(1);
}

.advantage-item h3, .feature-item h3, .benefit-item h3 {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 0.5px;
}

.advantage-item p, .feature-item p, .benefit-item p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Icon styles */
.advantage-icon, .benefit-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 36px;
  position: relative;
  background-color: var(--accent-color);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(237, 137, 54, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.advantage-icon:hover, .benefit-icon:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 32px rgba(237, 137, 54, 0.3);
}

/* AI Icon */
.ai-icon::before, .ai-icon::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 4px;
}

.ai-icon::before {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: 20px;
  left: 25px;
}

.ai-icon::after {
  width: 40px;
  height: 15px;
  bottom: 20px;
  left: 20px;
  border-radius: 0 0 20px 20px;
}

/* Workflow Icon */
.workflow-icon::before, .workflow-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.workflow-icon::before {
  width: 25px;
  height: 15px;
  border-radius: 4px;
  top: 22px;
  left: 17px;
  box-shadow: 0 23px 0 white;
}

.workflow-icon::after {
  width: 6px;
  height: 12px;
  background-color: transparent;
  border: 2px solid white;
  border-left: none;
  top: 25px;
  right: 18px;
  box-shadow: 0 23px 0 -2px white;
}

/* Monitor Icon */
.monitor-icon::before, .monitor-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.monitor-icon::before {
  width: 40px;
  height: 30px;
  border-radius: 4px;
  top: 15px;
  left: 20px;
}

.monitor-icon::after {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  bottom: 18px;
  left: 36px;
}

/* Waste Reduction Icon */
.waste-reduction-icon::before, .waste-reduction-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.waste-reduction-icon::before {
  width: 30px;
  height: 5px;
  top: 25px;
  left: 25px;
  transform: rotate(-45deg);
}

.waste-reduction-icon::after {
  width: 35px;
  height: 20px;
  border-radius: 20px 20px 0 0;
  bottom: 20px;
  left: 22px;
}

/* Efficiency Icon */
.efficiency-icon::before, .efficiency-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.efficiency-icon::before {
  width: 12px;
  height: 40px;
  border-radius: 6px;
  top: 20px;
  left: 34px;
}

.efficiency-icon::after {
  width: 25px;
  height: 10px;
  bottom: 30px;
  left: 27px;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
}

/* Order Growth Icon */
.order-growth-icon::before, .order-growth-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.order-growth-icon::before {
  width: 35px;
  height: 20px;
  border-radius: 4px;
  bottom: 20px;
  left: 22px;
}

.order-growth-icon::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 20px 25px;
  border-color: transparent transparent white transparent;
  top: 25px;
  right: 22px;
}

/* Reviews section */
.review-item {
  background-color: var(--bg-primary);
  padding: 48px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.review-item:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-8px);
}

.review-content {
  margin-bottom: 32px;
}

.review-content p {
  color: var(--text-light);
  line-height: 1.8;
  font-style: normal;
  font-size: 1.05rem;
  position: relative;
  padding-left: 32px;
}

.review-content p::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -8px;
  font-size: 2.5rem;
  color: var(--accent-color);
  font-family: serif;
}

.review-author {
  text-align: right;
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-content {
    padding: 40px 24px;
    margin: 0 16px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .hero-content .btn {
    margin: 8px 0;
    display: block;
  }
  
  .advantages-grid,
  .features-grid,
  .benefits-grid,
  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .advantage-item, .feature-item, .benefit-item, .review-item {
    padding: 32px 24px;
  }
}
</style>
