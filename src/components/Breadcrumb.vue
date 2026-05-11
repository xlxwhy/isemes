<template>
  <nav class="breadcrumb" aria-label="面包屑导航">
    <div class="container">
      <ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <router-link to="/" itemprop="item">
            <span itemprop="name">首页</span>
          </router-link>
          <meta itemprop="position" content="1" />
        </li>
        <li 
          v-for="(crumb, index) in breadcrumbs" 
          :key="index"
          class="breadcrumb-item" 
          itemprop="itemListElement" 
          itemscope 
          itemtype="https://schema.org/ListItem"
        >
          <template v-if="crumb.to && index < breadcrumbs.length - 1">
            <router-link :to="crumb.to" itemprop="item">
              <span itemprop="name">{{ crumb.text }}</span>
            </router-link>
          </template>
          <template v-else>
            <span itemprop="name" aria-current="page">{{ crumb.text }}</span>
          </template>
          <meta itemprop="position" :content="String(index + 2)" />
        </li>
      </ol>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  background-color: var(--bg-secondary);
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}

.breadcrumb-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  color: var(--text-light);
  margin-left: 8px;
}

.breadcrumb-item a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.breadcrumb-item[aria-current="page"] {
  color: var(--text-light);
  font-weight: 500;
}

@media (max-width: 768px) {
  .breadcrumb {
    padding: 12px 0;
  }
  
  .breadcrumb-item {
    font-size: 0.85rem;
  }
}
</style>
