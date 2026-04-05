<template>
  <div class="jobs-employers">
    <section class="jobs-hero">
      <div class="container">
        <h1>老板招聘平台</h1>
        <p class="hero-subtitle">为您的针织织厂寻找优秀人才</p>
      </div>
    </section>

    <section class="jobs-list">
      <div class="container">
        <div class="jobs-header">
          <div class="jobs-title">
            <h2>最新招聘信息</h2>
            <p class="jobs-count">共 {{ jobList.length }} 个招聘职位</p>
          </div>
          <div class="jobs-actions">
            <button class="btn btn-primary">发布新职位</button>
          </div>
        </div>

        <div class="job-cards">
          <div 
            class="job-card" 
            v-for="job in jobList" 
            :key="job.id"
            @click="goToJobDetail(job.id)"
          >
            <div class="job-header">
              <div class="job-company">
                <div class="company-logo">{{ job.companyLogo }}</div>
                <div class="company-info">
                  <h3 class="company-name">{{ job.companyName }}</h3>
                  <p class="company-location">{{ job.location }}</p>
                </div>
              </div>
              <div class="job-type">{{ job.type }}</div>
            </div>
            <div class="job-content">
              <h4 class="job-title">{{ job.title }}</h4>
              <p class="job-description">{{ job.description }}</p>
              <div class="job-tags">
                <span class="tag">{{ job.salary }}</span>
                <span class="tag">{{ job.experience }}</span>
                <span class="tag">{{ job.education }}</span>
              </div>
            </div>
            <div class="job-footer">
              <div class="job-date">发布于 {{ job.postDate }}</div>
              <div class="job-status" :class="job.status">{{ job.statusText }}</div>
            </div>
          </div>
        </div>

        <div class="pagination">
          <button class="page-btn" :disabled="currentPage === 1">上一页</button>
          <button 
            v-for="page in totalPages" 
            :key="page"
            class="page-btn" 
            :class="{ active: currentPage === page }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          <button class="page-btn" :disabled="currentPage === totalPages">下一页</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JobsEmployers',
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      totalPages: 1,
      jobList: [
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
          status: 'active',
          statusText: '招聘中'
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
          status: 'active',
          statusText: '招聘中'
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
          status: 'pending',
          statusText: '审核中'
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
          status: 'active',
          statusText: '招聘中'
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
          status: 'active',
          statusText: '招聘中'
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
          status: 'closed',
          statusText: '已关闭'
        }
      ]
    }
  },
  computed: {
    paginatedJobs() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.jobList.slice(start, end)
    }
  },
  mounted() {
    this.totalPages = Math.ceil(this.jobList.length / this.pageSize)
  },
  methods: {
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

.jobs-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(44, 92, 151, 0.9) 0%, rgba(44, 92, 151, 0.8) 100%);
  z-index: 1;
}

.jobs-hero .container {
  position: relative;
  z-index: 2;
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

.jobs-list {
  padding: 100px 0;
  background-color: var(--bg-primary);
}

.jobs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.jobs-title h2 {
  font-size: 2.25rem;
  margin-bottom: 8px;
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  display: inline-block;
  text-align: left;
}

.jobs-title h2::after {
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

.jobs-count {
  font-size: 1rem;
  color: var(--text-light);
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  border: 2px solid var(--accent-color);
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--accent-color);
}

.job-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.job-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  padding: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 4px solid var(--accent-color);
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.job-company {
  display: flex;
  align-items: center;
  gap: 15px;
}

.company-logo {
  font-size: 3rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  border-radius: 8px;
}

.company-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 4px;
}

.company-location {
  font-size: 0.9rem;
  color: var(--text-light);
}

.job-type {
  background-color: var(--secondary-color);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.job-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
}

.job-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  background-color: var(--bg-secondary);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.job-date {
  font-size: 0.85rem;
  color: var(--text-light);
}

.job-status {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
}

.job-status.active {
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
}

.job-status.pending {
  background-color: rgba(255, 193, 7, 0.1);
  color: #ffc107;
}

.job-status.closed {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.page-btn {
  background-color: white;
  border: 1px solid var(--border-color);
  color: var(--primary-color);
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.page-btn:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.page-btn.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.page-btn:disabled {
  background-color: var(--bg-secondary);
  color: var(--text-light);
  border-color: var(--border-color);
  cursor: not-allowed;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .job-cards {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 25px;
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
  
  .jobs-list {
    padding: 60px 0;
  }
  
  .jobs-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .job-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .jobs-hero h1 {
    font-size: 2rem;
  }
  
  .job-card {
    padding: 20px;
  }
  
  .company-logo {
    font-size: 2rem;
    width: 50px;
    height: 50px;
  }
  
  .job-title {
    font-size: 1.25rem;
  }
}
</style>