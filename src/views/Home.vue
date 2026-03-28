<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=modern%20industrial%20technology%20building%20with%20glass%20facade%20and%20blue%20sky&image_size=landscape_16_9" alt="工业智能科技">
      </div>
      <div class="container">
        <div class="hero-content">
          <h1>纺织行业智能解决方案提供商</h1>
          <p>工业智能质检平台 + 生产管理系统，为纺织企业提供全方位智能化服务</p>
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
            <div class="advantage-icon">🤖</div>
            <h3>AI智能质检</h3>
            <p>7*24小时不间断疵点检测，实时停机告警，漏检率不超2%，过检率不超20%</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">📊</div>
            <h3>生产全流程管理</h3>
            <p>覆盖客户资料、原料进仓、生产订单、坯布进出仓的完整生产管理流程</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">⚡</div>
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
            <h3>智能质检功能</h3>
            <p>边织边检、实时停机告警、可调节检测灵敏度、时空联合定位算法</p>
          </div>
          <div class="feature-item">
            <h3>生产管理功能</h3>
            <p>客户资料管理、原料进仓退仓、生产订单管理、布票打印、扫码出仓</p>
          </div>
          <div class="feature-item">
            <h3>数据分析功能</h3>
            <p>云端日报、实时库存监控、生产数据统计、质量检测报表</p>
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
            <div class="benefit-icon">📉</div>
            <h3>废布量极大减少</h3>
            <p>废布经济损失降低80%以上</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">👨‍💼</div>
            <h3>工人效率提升</h3>
            <p>从看4台机到看6台机，工作积极性变高</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">📈</div>
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

/* Item styles */
.advantage-item, .feature-item, .benefit-item {
  background-color: white;
  padding: 40px 30px;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
  position: relative;
  overflow: hidden;
}

.advantage-item::before, .feature-item::before, .benefit-item::before {
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

.advantage-item:hover, .feature-item:hover, .benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.advantage-item:hover::before, .feature-item:hover::before, .benefit-item:hover::before {
  transform: scaleY(1);
}

.advantage-item h3, .feature-item h3, .benefit-item h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.advantage-item p, .feature-item p, .benefit-item p {
  color: #666;
  line-height: 1.8;
  font-size: 0.95rem;
}

/* Icon styles */
.advantage-icon, .benefit-icon {
  font-size: 3.5rem;
  margin-bottom: 25px;
  color: #c8995d;
}

/* Reviews section */
.review-item {
  background-color: white;
  padding: 35px;
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.review-item:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.review-content {
  margin-bottom: 25px;
}

.review-content p {
  color: #666;
  line-height: 1.8;
  font-style: normal;
  font-size: 0.95rem;
  position: relative;
  padding-left: 20px;
}

.review-content p::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -5px;
  font-size: 2rem;
  color: #c8995d;
  font-family: serif;
}

.review-author {
  text-align: right;
  font-weight: 600;
  color: #c8995d;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}
</style>
