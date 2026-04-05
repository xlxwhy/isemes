<template>
  <div class="job-detail">
    <section class="jobs-hero">
      <div class="container">
        <h1>{{ jobDetail.title }}</h1>
        <p class="hero-subtitle">{{ jobDetail.companyName }} - {{ jobDetail.location }}</p>
      </div>
    </section>

    <section class="job-content">
      <div class="container">
        <div class="job-main">
          <div class="job-info">
            <div class="job-header">
              <div class="company-info">
                <div class="company-logo">{{ jobDetail.companyLogo }}</div>
                <div>
                  <h2 class="company-name">{{ jobDetail.companyName }}</h2>
                  <div class="job-meta">
                    <span class="meta-item">{{ jobDetail.type }}</span>
                    <span class="meta-item">{{ jobDetail.salary }}</span>
                    <span class="meta-item">{{ jobDetail.postDate }}</span>
                  </div>
                </div>
              </div>
              <div class="job-actions">
                <button class="btn btn-primary">立即申请</button>
                <button class="btn btn-secondary">收藏职位</button>
              </div>
            </div>

            <div class="job-description">
              <h3>职位描述</h3>
              <div class="description-content">
                <p>{{ jobDetail.description }}</p>
                <p>我们正在寻找一位有经验的{{ jobDetail.title }}加入我们的团队，负责{{ jobDetail.title }}相关的工作，包括但不限于：</p>
                <ul>
                  <li>负责针织设备的日常维护和故障排除</li>
                  <li>参与生产流程优化和设备升级</li>
                  <li>制定设备维护计划和操作规程</li>
                  <li>培训和指导操作人员正确使用设备</li>
                  <li>记录设备运行数据和维护情况</li>
                  <li>协助管理层制定生产计划和目标</li>
                </ul>
              </div>
            </div>

            <div class="job-requirements">
              <h3>任职要求</h3>
              <div class="requirements-content">
                <ul>
                  <li>{{ jobDetail.experience }}相关工作经验</li>
                  <li>{{ jobDetail.education }}学历</li>
                  <li>熟悉针织设备的工作原理和维护方法</li>
                  <li>具备良好的沟通能力和团队合作精神</li>
                  <li>能够承受工作压力，适应倒班工作</li>
                  <li>持有相关职业资格证书者优先考虑</li>
                </ul>
              </div>
            </div>

            <div class="job-benefits">
              <h3>福利待遇</h3>
              <div class="benefits-content">
                <ul>
                  <li>具有竞争力的薪资待遇</li>
                  <li>完善的社会保险和住房公积金</li>
                  <li>带薪年假和节假日福利</li>
                  <li>定期体检和健康管理</li>
                  <li>职业培训和晋升机会</li>
                  <li>员工餐厅和宿舍</li>
                  <li>丰富的员工活动和团队建设</li>
                </ul>
              </div>
            </div>

            <div class="company-intro">
              <h3>公司介绍</h3>
              <div class="intro-content">
                <p>{{ jobDetail.companyName }}是一家专业从事针织产品生产和销售的企业，成立于2005年，总部位于{{ jobDetail.location }}。公司拥有先进的生产设备和技术团队，产品涵盖针织面料、服装和家居用品等多个领域。</p>
                <p>公司秉承"质量第一、客户至上"的经营理念，致力于为客户提供高品质的产品和优质的服务。多年来，公司不断发展壮大，已成为行业内的知名企业，产品远销国内外市场。</p>
                <p>我们重视人才培养和团队建设，为员工提供良好的工作环境和发展空间。欢迎有才华、有激情的您加入我们的团队，共同创造美好的未来！</p>
              </div>
            </div>

            <div class="application-info">
              <h3>申请方式</h3>
              <div class="application-content">
                <p>有意者请将个人简历发送至：<a href="mailto:hr@example.com">hr@example.com</a></p>
                <p>邮件主题请注明：{{ jobDetail.title }} - 姓名</p>
                <p>联系电话：13763317850</p>
                <p>联系人：人力资源部</p>
              </div>
            </div>
          </div>

          <div class="job-sidebar">
            <div class="sidebar-card">
              <h3>职位信息</h3>
              <div class="info-item">
                <label>职位名称</label>
                <span>{{ jobDetail.title }}</span>
              </div>
              <div class="info-item">
                <label>公司名称</label>
                <span>{{ jobDetail.companyName }}</span>
              </div>
              <div class="info-item">
                <label>工作地点</label>
                <span>{{ jobDetail.location }}</span>
              </div>
              <div class="info-item">
                <label>工作类型</label>
                <span>{{ jobDetail.type }}</span>
              </div>
              <div class="info-item">
                <label>薪资范围</label>
                <span>{{ jobDetail.salary }}</span>
              </div>
              <div class="info-item">
                <label>工作经验</label>
                <span>{{ jobDetail.experience }}</span>
              </div>
              <div class="info-item">
                <label>学历要求</label>
                <span>{{ jobDetail.education }}</span>
              </div>
              <div class="info-item">
                <label>发布日期</label>
                <span>{{ jobDetail.postDate }}</span>
              </div>
            </div>

            <div class="sidebar-card">
              <h3>联系方式</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <span>13763317850</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <a href="mailto:hr@example.com">hr@example.com</a>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <span>{{ jobDetail.location }}</span>
                </div>
              </div>
            </div>

            <div class="sidebar-card">
              <h3>相似职位</h3>
              <div class="similar-jobs">
                <div 
                  class="similar-job" 
                  v-for="job in similarJobs" 
                  :key="job.id"
                  @click="goToJobDetail(job.id)"
                >
                  <h4>{{ job.title }}</h4>
                  <p>{{ job.companyName }}</p>
                  <div class="similar-job-meta">
                    <span>{{ job.salary }}</span>
                    <span>{{ job.location }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  data() {
    return {
      jobDetail: {},
      similarJobs: [
        {
          id: 2,
          title: '生产管理人员',
          companyName: '深圳纺织科技公司',
          location: '深圳宝安',
          salary: '10k-15k'
        },
        {
          id: 4,
          title: '设备工程师',
          companyName: '中山机械科技有限公司',
          location: '中山东区',
          salary: '9k-13k'
        },
        {
          id: 7,
          title: '纺织工艺师',
          companyName: '惠州针织厂',
          location: '惠州博罗',
          salary: '10k-14k'
        }
      ]
    }
  },
  mounted() {
    // 模拟从API获取数据
    this.getJobDetail()
  },
  methods: {
    getJobDetail() {
      // 这里应该是从API获取数据，现在使用模拟数据
      const mockJobs = [
        {
          id: 1,
          companyLogo: '🏭',
          companyName: '广州针织有限公司',
          location: '广州番禺',
          type: '全职',
          title: '织机维护工程师',
          description: '负责针织设备的日常维护、故障排除和技术支持，确保生产设备正常运行。',
          salary: '8k-12k',
          experience: '3年以上',
          education: '大专以上',
          postDate: '2024-03-15',
          status: 'active'
        },
        {
          id: 2,
          companyLogo: '🧶',
          companyName: '深圳纺织科技公司',
          location: '深圳宝安',
          type: '全职',
          title: '生产管理人员',
          description: '负责针织生产车间的日常管理，优化生产流程，提高生产效率和产品质量。',
          salary: '10k-15k',
          experience: '5年以上',
          education: '本科以上',
          postDate: '2024-03-12',
          status: 'active'
        },
        {
          id: 3,
          companyLogo: '👕',
          companyName: '东莞服装制造集团',
          location: '东莞大朗',
          type: '全职',
          title: '质量检验员',
          description: '负责针织产品的质量检验工作，确保产品符合质量标准和客户要求。',
          salary: '5k-8k',
          experience: '1年以上',
          education: '高中以上',
          postDate: '2024-03-10',
          status: 'active'
        },
        {
          id: 4,
          companyLogo: '🔧',
          companyName: '中山机械科技有限公司',
          location: '中山东区',
          type: '全职',
          title: '设备工程师',
          description: '负责针织机械设备的安装、调试、维护和技术改造工作。',
          salary: '9k-13k',
          experience: '4年以上',
          education: '本科以上',
          postDate: '2024-03-08',
          status: 'active'
        },
        {
          id: 5,
          companyLogo: '📊',
          companyName: '佛山纺织贸易有限公司',
          location: '佛山南海',
          type: '全职',
          title: '生产统计员',
          description: '负责生产数据的收集、统计和分析，协助管理层制定生产计划。',
          salary: '6k-9k',
          experience: '2年以上',
          education: '大专以上',
          postDate: '2024-03-05',
          status: 'active'
        },
        {
          id: 6,
          companyLogo: '👔',
          companyName: '珠海服装集团',
          location: '珠海香洲',
          type: '全职',
          title: '生产主管',
          description: '负责针织生产部门的全面管理工作，包括人员管理、生产安排和质量控制。',
          salary: '12k-18k',
          experience: '6年以上',
          education: '本科以上',
          postDate: '2024-03-03',
          status: 'active'
        },
        {
          id: 7,
          companyLogo: '🧵',
          companyName: '惠州针织厂',
          location: '惠州博罗',
          type: '全职',
          title: '纺织工艺师',
          description: '负责针织产品的工艺设计和优化，提高产品质量和生产效率。',
          salary: '10k-14k',
          experience: '3年以上',
          education: '本科以上',
          postDate: '2024-03-01',
          status: 'active'
        },
        {
          id: 8,
          companyLogo: '👗',
          companyName: '汕头服装有限公司',
          location: '汕头龙湖',
          type: '全职',
          title: '跟单员',
          description: '负责客户订单的跟进和协调，确保订单按时完成和交付。',
          salary: '7k-10k',
          experience: '2年以上',
          education: '大专以上',
          postDate: '2024-02-28',
          status: 'active'
        }
      ]
      
      // 根据路由参数id获取对应的职位详情
      const jobId = this.$route.params.id
      const job = mockJobs.find(j => j.id === parseInt(jobId))
      this.jobDetail = job || mockJobs[0]
    },
    goToJobDetail(jobId) {
      this.$router.push(`/jobs/${jobId}`)
    }
  }
}
</script>

<style scoped>
.jobs-hero {
  background-color: var(--color-blue-opportunity); /* 机遇蓝 - 代表人才与机会 */
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.jobs-hero .container {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
}

.jobs-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  font-weight: 400;
  color: white;
}

.job-content {
  padding: 100px 0;
  background-color: var(--bg-primary);
}

.job-main {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
}

.job-info {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  padding: 40px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
}

.company-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.company-logo {
  font-size: 4rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  border-radius: 12px;
}

.company-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 30px;
  position: relative;
}

.company-name::after {
  content: none;
}

.job-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.meta-item {
  font-size: 1rem;
  color: var(--text-light);
  padding: 6px 12px;
  background-color: var(--bg-secondary);
  border-radius: 20px;
}

.job-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  border: 2px solid var(--accent-color);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--accent-color);
}

.btn-secondary {
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}

.job-description,
.job-requirements,
.job-benefits,
.company-intro,
.application-info {
  margin-bottom: 40px;
}

.job-description h3,
.job-requirements h3,
.job-benefits h3,
.company-intro h3,
.application-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
}

.description-content,
.requirements-content,
.benefits-content,
.intro-content,
.application-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-color);
}

.description-content p,
.intro-content p,
.application-content p {
  margin-bottom: 20px;
}

.description-content ul,
.requirements-content ul,
.benefits-content ul {
  list-style-type: disc;
  padding-left: 30px;
  margin-bottom: 20px;
}

.description-content li,
.requirements-content li,
.benefits-content li {
  margin-bottom: 10px;
}

.application-content a {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
}

.application-content a:hover {
  text-decoration: underline;
}

.job-sidebar {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.sidebar-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  padding: 25px;
}

.sidebar-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent-color);
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-item label {
  font-weight: 600;
  color: var(--primary-color);
  white-space: nowrap;
  margin-right: 15px;
}

.info-item span {
  color: var(--text-color);
  text-align: right;
  flex: 1;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-icon {
  font-size: 1.25rem;
  color: var(--accent-color);
}

.contact-item a {
  color: var(--primary-color);
  text-decoration: none;
}

.contact-item a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.similar-jobs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.similar-job {
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.similar-job:hover {
  border-color: var(--accent-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.similar-job h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.similar-job p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 10px;
}

.similar-job-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-light);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .job-main {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .job-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .jobs-hero {
    padding: 80px 0;
  }
  
  .jobs-hero h1 {
    font-size: 2.25rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .job-content {
    padding: 60px 0;
  }
  
  .job-info {
    padding: 30px;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .company-logo {
    font-size: 3rem;
    width: 60px;
    height: 60px;
  }
  
  .job-actions {
    width: 100%;
  }
  
  .btn {
    flex: 1;
    text-align: center;
  }
  
  .sidebar-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .jobs-hero h1 {
    font-size: 2rem;
  }
  
  .job-info {
    padding: 20px;
  }
  
  .company-name {
    font-size: 1.5rem;
  }
  
  .job-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .btn {
    flex: none;
    width: 100%;
  }
}
</style>