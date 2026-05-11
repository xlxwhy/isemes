import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页 - 广州三思智联技术有限公司',
      description: '广州三思智联技术有限公司专注于针织织厂智能化管理解决方案，提供AI智能质检、生产全流程管理、实时数据监控等数字化转型服务。',
      keywords: '针织织厂,智能管理系统,AI质检,纺织行业,数字化转型'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我们 - 广州三思智联技术有限公司',
      description: '了解广州三思智联技术有限公司的发展历程、企业愿景和核心团队，我们专注于纺织行业数字化转型。',
      keywords: '三思智联,公司介绍,企业文化,纺织行业'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    meta: {
      title: '产品中心 - 针织织厂智能管理系统',
      description: '三思智联提供织机监控系统、AI智能质检、原料管理、坯布管理、订单管理等针织织厂智能管理产品。',
      keywords: '织机监控,AI质检,原料管理,坯布管理,订单管理,生产管理系统'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: {
      title: '服务支持 - 三思智联',
      description: '三思智联提供技术咨询、系统部署、培训支持、售后维护等全方位服务，助力企业数字化转型。',
      keywords: '技术咨询,系统部署,培训支持,售后服务,数字化转型'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: '联系我们 - 广州三思智联技术有限公司',
      description: '联系三思智联，获取针织织厂智能管理系统咨询。电话：+86 13763317850，邮箱：public@isemes.com。',
      keywords: '联系方式,咨询电话,技术支持,三思智联'
    }
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue'),
    meta: {
      title: '招聘广场 - 三思智联',
      description: '加入三思智联，与优秀团队一起推动纺织行业数字化转型。查看最新职位空缺。',
      keywords: '招聘,职位,加入我们,三思智联'
    }
  },
  {
    path: '/jobs/employers',
    name: 'JobsEmployers',
    component: () => import('../views/JobsEmployers.vue'),
    meta: {
      title: '企业招聘 - 三思智联招聘广场',
      description: '企业在三思智联招聘广场发布职位，寻找优秀人才。',
      keywords: '企业招聘,发布职位,人才搜索'
    }
  },
  {
    path: '/jobs/employees',
    name: 'JobsEmployees',
    component: () => import('../views/JobsEmployees.vue'),
    meta: {
      title: '求职中心 - 三思智联招聘广场',
      description: '在三思智联招聘广场查找理想工作，开启职业新篇章。',
      keywords: '求职,找工作,职业发展'
    }
  },
  {
    path: '/jobs/:id',
    name: 'JobDetail',
    component: () => import('../views/JobDetail.vue'),
    meta: {
      title: '职位详情 - 三思智联招聘广场',
      description: '查看三思智联最新职位详情，了解岗位要求和福利待遇。',
      keywords: '职位详情,岗位要求,福利待遇'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const defaultTitle = '广州三思智联技术有限公司 - 针织织厂智能管理系统'
  const defaultDescription = '广州三思智联技术有限公司专注于针织织厂智能化管理解决方案，提供AI智能质检、生产全流程管理、实时数据监控等数字化转型服务。'
  const defaultKeywords = '针织织厂,智能管理系统,AI质检,纺织行业,数字化转型,生产管理'
  const baseUrl = 'https://www.isemes.com'

  document.title = to.meta.title || defaultTitle

  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || defaultDescription)
  } else {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    metaDescription.content = to.meta.description || defaultDescription
    document.head.appendChild(metaDescription)
  }

  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords || defaultKeywords)
  } else {
    metaKeywords = document.createElement('meta')
    metaKeywords.name = 'keywords'
    metaKeywords.content = to.meta.keywords || defaultKeywords
    document.head.appendChild(metaKeywords)
  }

  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) {
    canonicalLink.setAttribute('href', baseUrl + to.path)
  } else {
    canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = baseUrl + to.path
    document.head.appendChild(canonicalLink)
  }

  let ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', baseUrl + to.path)
  }

  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || defaultTitle)
  }

  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', to.meta.description || defaultDescription)
  }

  let twitterUrl = document.querySelector('meta[name="twitter:url"]')
  if (twitterUrl) {
    twitterUrl.setAttribute('content', baseUrl + to.path)
  }

  let twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', to.meta.title || defaultTitle)
  }

  let twitterDescription = document.querySelector('meta[name="twitter:description"]')
  if (twitterDescription) {
    twitterDescription.setAttribute('content', to.meta.description || defaultDescription)
  }

  next()
})

export default router
