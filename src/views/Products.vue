<template>
  <div class="products">
    <section class="products-hero">
      <div class="container">
        <h1>我们的产品</h1>
        <p class="hero-subtitle">为针织织厂提供智能化、数字化的管理解决方案</p>
      </div>
    </section>

    <section class="products-list">
      <div class="container">
        <div 
          class="product-card" 
          v-for="product in products" 
          :key="product.id"
          :class="{ 'reverse-layout': product.id % 2 === 0 }"
        >
          <div class="product-image">
            <div class="image-wrapper" @click="openImagePreview(product.image)">
              <img :src="product.image" :alt="product.name" class="clickable-image">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
          </div>
          <div class="product-info">
            <div class="info-content">
              <h2>{{ product.name }}</h2>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-features">
                <h3>核心功能</h3>
                <div class="features-grid">
                  <div 
                    class="feature-item" 
                    v-for="(feature, index) in product.features" 
                    :key="index"
                  >
                    <span class="feature-icon">✓</span>
                    <span class="feature-text">{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Preview Modal -->
    <div v-if="isPreviewOpen" class="image-preview-modal" @click="closeImagePreview">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeImagePreview">×</button>
        <img :src="previewImage" :alt="'预览图片'" class="preview-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPreviewOpen: false,
      previewImage: '',
      products: [
        {
          id: 1,
          name: '织机监控系统',
          description: '专为针织织厂设计的智能织机监控系统，实现机台运行状态实时监控、生产数据采集与分析、数据看板与监控大屏展示，帮助企业随时随地掌握生产情况。',
          features: [
            '实时监控机台运行状态',
            '生产数据采集与分析',
            '数据看板可视化展示',
            '监控大屏实时监控',
            '故障告警通知功能',
            '历史数据查询与追溯',
            '机台事件记录与管理',
            '支持本地或云端部署'
          ],
          image: new URL('../assets/images/监控.png', import.meta.url).href
        },
        {
          id: 2,
          name: '纺织生产全流程管理系统',
          description: '覆盖针织企业生产全流程的智能化管理系统，从工厂基础设置、原料管理、坯布管理到订单管理、生产工资、报表分析，实现生产过程的数字化与智能化。',
          features: [
            '工厂基础设置管理',
            '原料进仓与库存管理',
            '坯布出仓与进仓查询',
            '生产订单管理与排产',
            '生产工资自动计算',
            '多维度工厂报表分析',
            '扫码应用系统支持',
            'AI智能质检系统集成'
          ],
          image: new URL('../assets/images/生产.png', import.meta.url).href
        },
        {
          id: 3,
          name: '原料与库存管理系统',
          description: '实现针织企业原料全生命周期管理的智能系统，包括原材料管理、原料绑定、进仓退料、领用出库、库存监控与流水跟踪。',
          features: [
            '原材料基础信息管理',
            '原料与机台绑定管理',
            '原料进仓与退料管理',
            '生产原料领用管理',
            '实时库存监控与预警',
            '原料流转全程跟踪',
            '库存盘点与调整',
            '原料成本核算与分析'
          ],
          image: new URL('../assets/images/库存.png', import.meta.url).href
        },
        {
          id: 4,
          name: '生产工资与报表系统',
          description: '自动化的生产工资计算与多维度报表分析系统，支持多种工资计算方式，提供全面的生产数据统计与分析功能。',
          features: [
            '灵活的工资方案设置',
            '日工资自动核算',
            '月工资统计与汇总',
            '工资明细查询与分析',
            '生产运行记录管理',
            '产量与效率报表',
            '设备利用率分析',
            '换布记录与统计'
          ],
          image: new URL('../assets/images/工资.png', import.meta.url).href
        }
      ]
    }
  },
  methods: {
    openImagePreview(imageUrl) {
      this.previewImage = imageUrl;
      this.isPreviewOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    },
    closeImagePreview() {
      this.isPreviewOpen = false;
      document.body.style.overflow = ''; // Restore background scrolling
    }
  }
}
</script>

<style scoped>
.products-hero {
  background-color: var(--primary-color);
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.products-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(19, 66, 115, 0.9) 0%, rgba(19, 66, 115, 0.8) 100%);
  z-index: 1;
}

.products-hero .container {
  position: relative;
  z-index: 2;
}

.products-hero h1 {
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

.products-list {
  padding: 100px 0;
  background-color: var(--bg-secondary);
}

.product-card {
  display: flex;
  align-items: stretch;
  gap: 40px;
  margin-bottom: 60px;
  padding: 40px;
  background-color: var(--bg-primary);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.product-card:last-child {
  margin-bottom: 0;
}

.product-card.reverse-layout {
  flex-direction: row-reverse;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var(--accent-color);
  transform: scaleY(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.product-card:hover::before {
  transform: scaleY(1);
}

.product-image {
  flex: 1;
  overflow: hidden;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(200, 153, 93, 0.1) 0%, rgba(200, 153, 93, 0) 100%);
  z-index: 1;
  transition: opacity 0.3s ease;
}

.product-card:hover .image-wrapper::before {
  opacity: 0;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background-color: #f8f9fa;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-image img {
  transform: scale(1.08);
}

.product-info {
  flex: 1.2;
  display: flex;
  align-items: center;
}

.info-content {
  width: 100%;
}

.product-info h2 {
  font-size: 2.25rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: -0.3px;
  position: relative;
  padding-bottom: 15px;
  display: inline-block;
  text-align: left;
}

.product-info h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
  transform: none;
}

.product-description {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: var(--text-light);
  font-weight: 400;
}

.product-features h3 {
  font-size: 1.375rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-weight: 600;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  background-color: rgba(200, 153, 93, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.feature-item:hover {
  background-color: rgba(200, 153, 93, 0.1);
  transform: translateX(5px);
  border-left-color: var(--accent-color);
}

.feature-icon {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Image Zoom Effect */
.image-wrapper {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.clickable-image {
  transition: opacity 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.zoom-icon {
  font-size: 3rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Image Preview Modal */
.image-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  z-index: 10;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.preview-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.feature-text {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .product-card {
    gap: 40px;
    padding: 50px;
  }
  
  .image-wrapper {
    min-height: 300px;
  }
  
  .product-info h2 {
    font-size: 2.25rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .products-hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .product-card,
  .product-card.reverse-layout {
    flex-direction: column;
    gap: 35px;
    padding: 40px 30px;
    margin-bottom: 70px;
  }
  
  .image-wrapper {
    min-height: 280px;
  }
  
  .product-info h2 {
    font-size: 2rem;
  }
  
  .product-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .products-hero {
    padding: 80px 0;
  }
  
  .products-hero h1 {
    font-size: 2rem;
  }
  
  .product-card {
    padding: 30px 20px;
    gap: 30px;
  }
  
  .image-wrapper {
    min-height: 220px;
  }
  
  .product-info h2 {
    font-size: 1.75rem;
  }
}
</style>
