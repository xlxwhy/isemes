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
          name: '机台监控服务',
          icon: 'monitor-icon',
          description: '实时监控机台状态，随时随地掌握生产数据，及时发现和处理生产异常。',
          detail: '提供24小时不间断的机台状态监控，支持手机端和电脑端实时查看。系统自动采集生产数据，包括开机时间、织布数量、效率等关键指标，帮助企业实时掌握生产情况。'
        },
        {
          id: 2,
          name: '工资统计服务',
          icon: 'salary-icon',
          description: '自动计算工人工资，减少人工统计误差，提高工资核算效率。',
          detail: '根据机台采集的数据自动计算工人工资，支持多种工资计算方式。系统生成详细的工资报表，包括每个人的生产产量、工时、工资等信息，减少人工统计工作量。'
        },
        {
          id: 3,
          name: '生产报表服务',
          icon: 'report-icon',
          description: '自动生成各类生产报表，数据精准，减少人工整理时间。',
          detail: '系统自动生成生产日报、月报、年报等各类报表，包括产量统计、效率分析、设备利用率等。报表数据实时更新，帮助企业管理层快速了解生产情况，做出决策。'
        },
        {
          id: 4,
          name: '定制化开发服务',
          icon: 'custom-icon',
          description: '根据企业需求快速定制功能模块，满足不同企业的个性化需求。',
          detail: '提供本地服务器部署或云端部署两种方式，可根据企业规模和需求选择。支持功能模块的定制开发，包括特定的报表格式、数据采集方式、工资计算规则等。'
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

/* Monitor Icon */
.monitor-icon::before, .monitor-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.monitor-icon::before {
  width: 40px;
  height: 25px;
  top: 20px;
  left: 25px;
  border-radius: 4px 4px 0 0;
}

.monitor-icon::after {
  width: 10px;
  height: 6px;
  bottom: 18px;
  left: 40px;
  background-color: white;
  border-radius: 0 0 3px 3px;
}

/* Salary Icon */
.salary-icon::before, .salary-icon::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 4px;
}

.salary-icon::before {
  width: 35px;
  height: 30px;
  top: 25px;
  left: 27px;
  border-radius: 6px;
}

.salary-icon::after {
  width: 25px;
  height: 4px;
  top: 35px;
  left: 32px;
  box-shadow: 0 8px 0 white;
}

/* Report Icon */
.report-icon::before, .report-icon::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 4px;
}

.report-icon::before {
  width: 40px;
  height: 35px;
  top: 20px;
  left: 25px;
  border-radius: 4px;
}

.report-icon::after {
  width: 30px;
  height: 4px;
  top: 30px;
  left: 30px;
  box-shadow: 0 8px 0 white, 0 16px 0 white;
}

/* Custom Icon */
.custom-icon::before, .custom-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.custom-icon::before {
  width: 15px;
  height: 15px;
  top: 25px;
  left: 37px;
  border-radius: 50%;
}

.custom-icon::after {
  width: 30px;
  height: 20px;
  bottom: 20px;
  left: 30px;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 4px;
  transform: rotate(45deg);
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
