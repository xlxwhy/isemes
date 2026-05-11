# GitHub Pages 部署指南

## 方案说明

本项目采用 **History 模式 + 404.html 回退** 方案，在 GitHub Pages 上实现：
- ✅ 美观的 URL 格式（无 # 符号）
- ✅ SEO 友好
- ✅ 直接访问子页面不会 404
- ✅ 刷新页面正常工作

## 工作原理

1. 用户访问 `https://www.isemes.com/about`
2. GitHub Pages 发现 `/about` 不是静态文件，返回 404.html
3. 404.html 保存原始 URL 到 sessionStorage，并重定向到 `/`
4. index.html 加载 Vue Router，检测 sessionStorage 中的 redirect_url
5. Router 自动导航到 `/about` 页面
6. 用户看到正确的页面，URL 保持为 `/about`

## 部署步骤

### 1. 确保 GitHub Pages 设置正确

在 GitHub 仓库设置中：
1. 进入 **Settings → Pages**
2. Source 选择 **GitHub Actions**
3. 确保 Custom domain 设置为 `www.isemes.com`（如有自定义域名）

### 2. 推送代码

```bash
git add .
git commit -m "feat: 配置 GitHub Pages History 模式支持"
git push origin main
```

### 3. 验证部署

部署完成后，访问以下链接验证：
- https://你的用户名.github.io/你的仓库名/
- https://你的用户名.github.io/你的仓库名/about
- https://你的用户名.github.io/你的仓库名/products

## 文件说明

| 文件 | 作用 |
|------|------|
| `public/404.html` | GitHub Pages 的 SPA 回退处理 |
| `src/main.js` | 处理从 404.html 重定向过来的路由恢复 |
| `src/router/index.js` | 使用 createWebHistory() 启用 History 模式 |
| `.github/workflows/ci.yml` | 自动构建和部署到 GitHub Pages |

## SEO 注意事项

1. **sitemap.xml** 中的 URL 使用正常路径（无 #）
2. **robots.txt** 正常配置即可
3. 搜索引擎爬虫首次访问子页面可能会看到 404.html，但会被重定向到首页
4. 建议在 GitHub Pages 设置中配置自定义域名，并使用 HTTPS

## 自定义域名（可选）

如果使用自定义域名 `www.isemes.com`：

1. 在 `public/` 目录下创建 `CNAME` 文件：
   ```
   www.isemes.com
   ```

2. 在域名 DNS 设置中添加：
   - CNAME 记录：`www` → `你的用户名.github.io`

3. 在 GitHub Pages 设置中配置自定义域名

## 故障排查

### 问题：刷新页面后显示首页内容

**原因**：404.html 重定向逻辑可能有问题

**解决**：检查浏览器控制台是否有错误，确保 sessionStorage 正常工作

### 问题：直接访问子页面仍然 404

**原因**：404.html 可能没有被正确部署

**解决**：检查 `dist/404.html` 是否存在，GitHub Actions 是否正确执行
