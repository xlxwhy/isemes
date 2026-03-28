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
          name: '工业智能质检平台',
          description: '基于人工智能图像识别技术，采用时空联合定位算法，实现24小时不间断疵点检测。可根据实际生产情况匹配不同的检测灵敏度，同时具备实时停机告警功能，提高工人看机效率，真正为企业实现提速增产降次布和智能化管理的目标。',
          features: [
            '7*24小时不间断检测',
            '实时停机告警功能',
            '可调节检测灵敏度',
            '时空联合定位算法',
            '云边端技术架构',
            '高精度识别，漏检率低',
            '本地部署，安装快捷',
            '云端数据报表和监控'
          ],
          image: 'https://picsum.photos/id/188/1200/800'
        },
        {
          id: 2,
          name: '纺织生产管理系统',
          description: '专为纺织企业设计的生产管理系统，覆盖从客户资料管理、原料进仓、生产订单管理到坯布进出仓的全流程管理。帮助企业实现生产过程的数字化、智能化，提高管理效率，降低生产成本。',
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
