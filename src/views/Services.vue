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
            <div class="service-icon" :class="service.icon"></div>
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
          icon: 'customer-icon',
          description: '完善的客户信息管理系统，支持客户全称、简称、空差等信息的维护。',
          detail: '提供客户资料的新增、编辑、查询功能，支持设置坯布进仓匹重限重、质量小数位和空差参数。客户简称用于布票显示，客户全称用于出厂单抬头打印，空差功能可在称重时自动调整重量。'
        },
        {
          id: 2,
          name: '原料管理服务',
          icon: 'material-icon',
          description: '完整的原料进仓、退仓和库存管理流程，支持实时库存监控。',
          detail: '提供原料进仓、退仓功能，支持抽称原料的重量管理和欠重计算。系统自动维护原料库存，包括进仓、退料、计划用料、损耗用料、废布用料、织布用料等多种库存状态的实时计算和监控。'
        },
        {
          id: 3,
          name: '生产订单管理',
          icon: 'order-icon',
          description: '从订单创建到布票打印的全流程生产订单管理。',
          detail: '支持生产订单的创建、排产和布票打印，可设置客户别名和空差参数。提供原料信息关联和比例损耗设置，支持本单转料功能，方便更换原料批号。生产信息模块支持工资计算所需的各项参数设置。'
        },
        {
          id: 4,
          name: '坯布进出仓管理',
          icon: 'warehouse-icon',
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
  background-color: var(--primary-color);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.services-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 0;
  color: white;
}

.services-list {
  padding: 100px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.service-card {
  background-color: var(--bg-primary);
  padding: 50px 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Service Icon Styles */
.service-icon {
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

.service-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(237, 137, 54, 0.3);
}

/* Customer Icon */
.customer-icon::before, .customer-icon::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 50%;
}

.customer-icon::before {
  width: 30px;
  height: 30px;
  top: 20px;
  left: 30px;
}

.customer-icon::after {
  width: 50px;
  height: 28px;
  bottom: 18px;
  left: 20px;
  border-radius: 0 0 25px 25px;
}

/* Material Icon */
.material-icon::before, .material-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.material-icon::before {
  width: 40px;
  height: 35px;
  top: 20px;
  left: 25px;
  border-radius: 4px;
  box-shadow: 0 0 0 2px white inset;
  background-color: transparent;
}

.material-icon::after {
  width: 20px;
  height: 35px;
  top: 28px;
  left: 35px;
  background-color: white;
  transform: rotate(45deg);
}

/* Order Icon */
.order-icon::before, .order-icon::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 4px;
}

.order-icon::before {
  width: 45px;
  height: 30px;
  top: 25px;
  left: 22px;
  border-radius: 8px;
}

.order-icon::after {
  width: 35px;
  height: 4px;
  top: 35px;
  left: 27px;
  box-shadow: 0 8px 0 white, 0 16px 0 white;
}

/* Warehouse Icon */
.warehouse-icon::before, .warehouse-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.warehouse-icon::before {
  width: 35px;
  height: 25px;
  top: 30px;
  left: 27px;
  border-radius: 4px;
}

.warehouse-icon::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 18px 25px;
  border-color: transparent transparent white transparent;
  top: 18px;
  left: 20px;
}

.service-card h2 {
  font-size: 2rem;
  margin-bottom: 24px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: -0.3px;
}

.service-card p {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 0;
}

.service-details {
  background-color: var(--bg-secondary);
  padding: 100px 0;
}

.service-details h2 {
  text-align: center;
  font-size: 2.75rem;
  margin-bottom: 60px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
}

.service-details h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.detail-item {
  background-color: var(--bg-primary);
  padding: 50px;
  border-radius: 16px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.detail-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.detail-item h3 {
  font-size: 1.875rem;
  margin-bottom: 28px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: -0.3px;
  position: relative;
  padding-bottom: 15px;
}

.detail-item h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.detail-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 0;
}
</style>
