<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3>三思智联</h3>
          <p>广州三思智联技术有限公司，打造高品质工业智能质检平台，引领纺织行业智能化革命。</p>
        </div>
        <div class="footer-section links">
          <h3>快速链接</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
            <li><router-link to="/products">产品</router-link></li>
            <li><router-link to="/services">服务</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h3>联系我们</h3>
          <div class="contact-info">
            <p><span class="icon">📍</span> 北京市海淀区中关村科技园区</p>
            <p><span class="icon">📞</span> +86 010-12345678</p>
            <p><span class="icon">✉️</span> contact@isemes.com</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 广州三思智联技术有限公司. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  color: #333;
  padding: 80px 0 30px;
  border-top: 1px solid #e9ecef;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-bottom: 50px;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 25px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #c8995d;
}

.footer-section p {
  line-height: 1.8;
  margin-bottom: 15px;
  color: #666;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 15px;
}

.footer-section a::before {
  content: '>';
  position: absolute;
  left: 0;
  color: #c8995d;
  font-weight: bold;
}

.footer-section a:hover {
  color: #c8995d;
  transform: translateX(5px);
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  font-size: 1.2rem;
  color: #c8995d;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #e9ecef;
  color: #999;
  font-size: 0.9rem;
}
</style>
