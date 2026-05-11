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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - 页面未找到',
      description: '抱歉，您访问的页面不存在。广州三思智联技术有限公司专注于针织织厂智能化管理解决方案。'
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
  const defaultImage = baseUrl + '/images/home.jpg'

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
  } else {
    ogUrl = document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.setAttribute('content', baseUrl + to.path)
    document.head.appendChild(ogUrl)
  }

  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || defaultTitle)
  } else {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', to.meta.title || defaultTitle)
    document.head.appendChild(ogTitle)
  }

  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', to.meta.description || defaultDescription)
  } else {
    ogDescription = document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', to.meta.description || defaultDescription)
    document.head.appendChild(ogDescription)
  }

  let ogType = document.querySelector('meta[property="og:type"]')
  if (ogType) {
    ogType.setAttribute('content', 'website')
  } else {
    ogType = document.createElement('meta')
    ogType.setAttribute('property', 'og:type')
    ogType.setAttribute('content', 'website')
    document.head.appendChild(ogType)
  }

  let ogSiteName = document.querySelector('meta[property="og:site_name"]')
  if (ogSiteName) {
    ogSiteName.setAttribute('content', '三思智联')
  } else {
    ogSiteName = document.createElement('meta')
    ogSiteName.setAttribute('property', 'og:site_name')
    ogSiteName.setAttribute('content', '三思智联')
    document.head.appendChild(ogSiteName)
  }

  let ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.setAttribute('content', 'zh_CN')
  } else {
    ogLocale = document.createElement('meta')
    ogLocale.setAttribute('property', 'og:locale')
    ogLocale.setAttribute('content', 'zh_CN')
    document.head.appendChild(ogLocale)
  }

  let ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage) {
    ogImage.setAttribute('content', to.meta.image || defaultImage)
  } else {
    ogImage = document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    ogImage.setAttribute('content', to.meta.image || defaultImage)
    document.head.appendChild(ogImage)
  }

  let twitterUrl = document.querySelector('meta[name="twitter:url"]')
  if (twitterUrl) {
    twitterUrl.setAttribute('content', baseUrl + to.path)
  } else {
    twitterUrl = document.createElement('meta')
    twitterUrl.name = 'twitter:url'
    twitterUrl.content = baseUrl + to.path
    document.head.appendChild(twitterUrl)
  }

  let twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', to.meta.title || defaultTitle)
  } else {
    twitterTitle = document.createElement('meta')
    twitterTitle.name = 'twitter:title'
    twitterTitle.content = to.meta.title || defaultTitle
    document.head.appendChild(twitterTitle)
  }

  let twitterDescription = document.querySelector('meta[name="twitter:description"]')
  if (twitterDescription) {
    twitterDescription.setAttribute('content', to.meta.description || defaultDescription)
  } else {
    twitterDescription = document.createElement('meta')
    twitterDescription.name = 'twitter:description'
    twitterDescription.content = to.meta.description || defaultDescription
    document.head.appendChild(twitterDescription)
  }

  let twitterCard = document.querySelector('meta[name="twitter:card"]')
  if (twitterCard) {
    twitterCard.setAttribute('content', 'summary_large_image')
  } else {
    twitterCard = document.createElement('meta')
    twitterCard.name = 'twitter:card'
    twitterCard.content = 'summary_large_image'
    document.head.appendChild(twitterCard)
  }

  let robots = document.querySelector('meta[name="robots"]')
  if (robots) {
    robots.setAttribute('content', 'index, follow')
  } else {
    robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'index, follow'
    document.head.appendChild(robots)
  }

  next()
})

export default router
