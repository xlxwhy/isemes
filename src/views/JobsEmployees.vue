<template>
  <div class="jobs-employees">
    <section class="jobs-hero">
      <div class="container">
        <h1>员工求职平台</h1>
        <p class="hero-subtitle">找到您理想的针织行业工作机会</p>
      </div>
    </section>

    <section class="jobs-list">
      <div class="container">
        <div class="jobs-header">
          <div class="jobs-title">
            <h2>热门职位推荐</h2>
            <p class="jobs-count">共 {{ jobList.length }} 个招聘职位</p>
          </div>
          <div class="jobs-search">
            <input 
              type="text" 
              placeholder="搜索职位或公司..." 
              class="search-input"
              v-model="searchKeyword"
            >
            <button class="search-btn">🔍</button>
          </div>
        </div>

        <div class="job-filters">
          <div class="filter-group">
            <label>工作类型：</label>
            <div class="filter-options">
              <button 
                class="filter-btn" 
                :class="{ active: selectedType === 'all' }"
                @click="selectedType = 'all'"
              >
                全部
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedType === '全职' }"
                @click="selectedType = '全职'"
              >
                全职
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedType === '兼职' }"
                @click="selectedType = '兼职'"
              >
                兼职
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedType === '实习' }"
                @click="selectedType = '实习'"
              >
                实习
              </button>
            </div>
          </div>
          <div class="filter-group">
            <label>薪资范围：</label>
            <div class="filter-options">
              <button 
                class="filter-btn" 
                :class="{ active: selectedSalary === 'all' }"
                @click="selectedSalary = 'all'"
              >
                全部
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedSalary === '5k以下' }"
                @click="selectedSalary = '5k以下'"
              >
                5k以下
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedSalary === '5k-10k' }"
                @click="selectedSalary = '5k-10k'"
              >
                5k-10k
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedSalary === '10k-15k' }"
                @click="selectedSalary = '10k-15k'"
              >
                10k-15k
              </button>
              <button 
                class="filter-btn" 
                :class="{ active: selectedSalary === '15k以上' }"
                @click="selectedSalary = '15k以上'"
              >
                15k以上
              </button>
            </div>
          </div>
        </div>

        <div class="job-cards">
          <div 
            class="job-card" 
            v-for="job in filteredJobs" 
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
              <div class="job-salary">{{ job.salary }}</div>
            </div>
            <div class="job-content">
              <h4 class="job-title">{{ job.title }}</h4>
              <p class="job-description">{{ job.description }}</p>
              <div class="job-tags">
                <span class="tag">{{ job.type }}</span>
                <span class="tag">{{ job.experience }}</span>
                <span class="tag">{{ job.education }}</span>
              </div>
            </div>
            <div class="job-footer">
              <div class="job-date">发布于 {{ job.postDate }}</div>
              <button class="apply-btn">立即申请</button>
            </div>
          </div>
        </div>

        <div v-if="filteredJobs.length === 0" class="no-results">
          <p>没有找到符合条件的职位</p>
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
  name: 'JobsEmployees',
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      totalPages: 1,
      searchKeyword: '',
      selectedType: 'all',
      selectedSalary: 'all',
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
    }
  },
  computed: {
    filteredJobs() {
      let jobs = this.jobList
      
      // 搜索过滤
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase()
        jobs = jobs.filter(job => 
          job.title.toLowerCase().includes(keyword) ||
          job.companyName.toLowerCase().includes(keyword) ||
          job.description.toLowerCase().includes(keyword)
        )
      }
      
      // 工作类型过滤
      if (this.selectedType !== 'all') {
        jobs = jobs.filter(job => job.type === this.selectedType)
      }
      
      // 薪资范围过滤
      if (this.selectedSalary !== 'all') {
        jobs = jobs.filter(job => {
          const salary = job.salary
          switch (this.selectedSalary) {
            case '5k以下':
              return parseFloat(salary) < 5
            case '5k-10k':
              return parseFloat(salary) >= 5 && parseFloat(salary) < 10
            case '10k-15k':
              return parseFloat(salary) >= 10 && parseFloat(salary) < 15
            case '15k以上':
              return parseFloat(salary) >= 15
            default:
              return true
          }
        })
      }
      
      // 分页
      this.totalPages = Math.ceil(jobs.length / this.pageSize)
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return jobs.slice(start, end)
    }
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
  gap: 30px;
}

.jobs-title h2 {
  font-size: 2.25rem;
  margin-bottom: 25px;
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

.jobs-search {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search-input {
  padding: 12px 20px;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  width: 300px;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(212, 167, 106, 0.1);
}

.search-btn {
  background-color: var(--accent-color);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover {
  background-color: #c59257;
}

.job-filters {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 15px;
}

.filter-group label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  white-space: nowrap;
}

.filter-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  background-color: white;
  border: 1px solid var(--border-color);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.filter-btn.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
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
  border-left: 4px solid var(--secondary-color);
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

.job-salary {
  background-color: var(--accent-color);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 700;
  white-space: nowrap;
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

.apply-btn {
  background-color: var(--secondary-color);
  color: white;
  border: 2px solid var(--secondary-color);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.apply-btn:hover {
  background-color: transparent;
  color: var(--secondary-color);
}

.no-results {
  text-align: center;
  padding: 80px 0;
  color: var(--text-light);
  font-size: 1.1rem;
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
  
  .search-input {
    width: 100%;
    max-width: 300px;
  }
  
  .job-filters {
    flex-direction: column;
    gap: 20px;
  }
  
  .filter-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .filter-options {
    width: 100%;
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