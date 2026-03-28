<template>
  <div class="services">
    <section class="services-hero">
      <div class="container">
        <h1>我们的服务</h1>
      </div>
    </section>

    <section class="services-list">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">
              {{ service.icon }}
            </div>
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-details">
      <div class="container">
        <h2>服务详情</h2>
        <div class="detail-item" v-for="service in services" :key="service.id">
          <h3>{{ service.name }}</h3>
          <div class="detail-content">
            <p>{{ service.detail }}</p>
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
      services: [
        {
          id: 1,
          name: '客户资料管理',
          icon: '👥',
          description: '完善的客户信息管理系统，支持客户全称、简称、空差等信息的维护。',
          detail: '提供客户资料的新增、编辑、查询功能，支持设置坯布进仓匹重限重、质量小数位和空差参数。客户简称用于布票显示，客户全称用于出厂单抬头打印，空差功能可在称重时自动调整重量。'
        },
        {
          id: 2,
          name: '原料管理服务',
          icon: '📦',
          description: '完整的原料进仓、退仓和库存管理流程，支持实时库存监控。',
          detail: '提供原料进仓、退仓功能，支持抽称原料的重量管理和欠重计算。系统自动维护原料库存，包括进仓、退料、计划用料、损耗用料、废布用料、织布用料等多种库存状态的实时计算和监控。'
        },
        {
          id: 3,
          name: '生产订单管理',
          icon: '📋',
          description: '从订单创建到布票打印的全流程生产订单管理。',
          detail: '支持生产订单的创建、排产和布票打印，可设置客户别名和空差参数。提供原料信息关联和比例损耗设置，支持本单转料功能，方便更换原料批号。生产信息模块支持工资计算所需的各项参数设置。'
        },
        {
          id: 4,
          name: '坯布进出仓管理',
          icon: '🚚',
          description: '扫码出仓与库存出仓相结合的灵活出仓方式，支持码单打印。',
          detail: '支持PDA扫码出仓和库存出仓两种方式，可批量取消出仓操作。提供出仓加重功能，支持按比例或固定重量调整出仓布匹重量。支持打印出货单，可根据客户需求定制打印模板。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-hero {
  background-color: #c8995d;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.services-hero h1 {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.services-list {
  padding: 100px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.service-card {
  background-color: white;
  padding: 50px 40px;
  border-radius: 0;
  text-align: center;
  box-shadow: none;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
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

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.service-card:hover::before {
  transform: scaleY(1);
}

.service-icon {
  font-size: 4.5rem;
  margin-bottom: 25px;
  color: #c8995d;
}

.service-card h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.service-card p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
}

.service-details {
  background-color: #f8f9fa;
  padding: 100px 0;
}

.service-details h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.detail-item {
  background-color: white;
  padding: 40px;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: none;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.detail-item::before {
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

.detail-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.detail-item:hover::before {
  transform: scaleY(1);
}

.detail-item h3 {
  font-size: 1.6rem;
  margin-bottom: 25px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.detail-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}
</style>
