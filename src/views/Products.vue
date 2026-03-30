<template>
  <div class="products">
    <section class="products-hero">
      <div class="container">
        <h1>我们的产品</h1>
      </div>
    </section>

    <section class="products-list">
      <div class="container">
        <div class="product-card" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <ul>
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>
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
      products: [
        {
          id: 1,
          name: '机台管理系统',
          description: '专为针织织厂设计的智能管理系统，实现机台监控、生产数据采集、工资统计和生产报表等功能，支持本地或云端部署，随时随地掌握生产情况。',
          features: [
            '机台监控 随时随地',
            '工资统计 精准快速',
            '生产报表 精炼省时',
            '本地或云端部署',
            '实时数据采集',
            '生产进度监控',
            '故障告警通知',
            '快速定制化开发'
          ],
          image: 'https://picsum.photos/id/188/1200/800'
        },
        {
          id: 2,
          name: '纺织生产管理系统',
          description: '覆盖从客户资料管理、原料进仓、生产订单管理到坯布进出仓的全流程管理系统，帮助企业实现生产过程的数字化、智能化。',
          features: [
            '客户资料管理与维护',
            '原料进仓、退仓与库存管理',
            '生产订单管理与布票打印',
            '坯布进仓与质量检测',
            '扫码出仓与码单打印',
            '实时库存监控与分析',
            '生产数据统计与报表',
            '灵活的权限管理系统'
          ],
          image: 'https://picsum.photos/id/3/1200/800'
        }
      ]
    }
  }
}
</script>

<style scoped>
.products-hero {
  background-color: #c8995d;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.products-hero h1 {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.products-list {
  padding: 100px 0;
}

.product-card {
  display: flex;
  gap: 50px;
  margin-bottom: 80px;
  padding: 40px;
  background-color: white;
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.product-card::before {
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

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.product-card:hover::before {
  transform: scaleY(1);
}

.product-image {
  flex: 1;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  flex: 1;
}

.product-info h2 {
  font-size: 2rem;
  margin-bottom: 25px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.product-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: #666;
}

.product-info ul {
  list-style-type: none;
  padding: 0;
}

.product-info li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  color: #666;
  transition: all 0.3s ease;
}

.product-info li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #c8995d;
  font-weight: bold;
  font-size: 1.2rem;
}

.product-info li:hover {
  color: #c8995d;
  transform: translateX(5px);
}
</style>
