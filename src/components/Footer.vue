<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3>三思智联</h3>
          <p>广州三思智联技术有限公司，专注于针织织厂智能化管理解决方案，为企业提供数字化转型的核心动力。</p>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fab fa-weixin"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-weibo"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="footer-section links">
          <h3>快速链接</h3>
          <div class="links-grid">
            <div class="links-column">
              <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
                <li><router-link to="/products">产品中心</router-link></li>
              </ul>
            </div>
            <div class="links-column">
              <ul>
                <li><router-link to="/services">服务支持</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
                <li><a href="#">常见问题</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-section contact">
          <h3>联系我们</h3>
          <div class="contact-info">
            <div class="contact-item">
              <span class="icon">📍</span>
              <span>广州市天河区长湴白沙水路85号27房号</span>
            </div>
            <div class="contact-item">
              <span class="icon">📞</span>
              <span>+86 13763317850</span>
            </div>
            <div class="contact-item">
              <span class="icon">✉️</span>
              <span>public@isemes.com</span>
            </div>
            <div class="contact-item">
              <span class="icon">⏰</span>
              <span>周一至周五: 9:00 - 18:00</span>
            </div>
            <div class="contact-item wechat">
              <span class="icon">💬</span>
              <div class="wechat-content">
                <span>微信咨询</span>
                <div class="wechat-qr">
                  <img src="../assets/images/contact.png" alt="微信二维码">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="bottom-content">
          <p>&copy; {{ new Date().getFullYear() }} 广州三思智联技术有限公司. 保留所有权利.</p>
          <div class="legal-links">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: #fff;
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--accent-color);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 60px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.3px;
  position: relative;
  padding-bottom: 15px;
  display: inline-block;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.footer-section p {
  line-height: 1.8;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 15px;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 20px;
  font-size: 0.95rem;
}

.footer-section a::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: var(--accent-color);
  transform: translateX(8px);
}

.footer-section a:hover::before {
  opacity: 1;
  transform: translateX(-5px);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0;
}

.social-icon::before {
  content: none;
}

.social-icon:hover {
  background-color: var(--accent-color);
  color: #fff;
  transform: translateY(-3px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
}

.icon {
  font-size: 1.3rem;
  color: var(--accent-color);
  margin-top: 2px;
  flex-shrink: 0;
}

/* WeChat QR code styles */
.contact-item.wechat {
  position: relative;
}

.wechat-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wechat-qr {
  position: relative;
  width: 120px;
  height: 120px;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.wechat-qr img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
}

.bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0;
}

.legal-links a::before {
  content: none;
}

.legal-links a:hover {
  color: var(--accent-color);
  transform: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .legal-links {
    gap: 20px;
  }
  
  /* WeChat QR code responsive styles */
  .contact-item.wechat {
    align-items: center;
  }
  
  .wechat-content {
    align-items: center;
    text-align: center;
    gap: 10px;
  }
  
  .wechat-qr {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 480px) {
  /* WeChat QR code mobile optimization */
  .contact-item.wechat {
    flex-direction: column;
    text-align: center;
  }
  
  .wechat-content {
    gap: 8px;
  }
  
  .wechat-qr {
    width: 90px;
    height: 90px;
    padding: 6px;
  }
}
</style>
