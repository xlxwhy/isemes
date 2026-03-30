<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>联系我们</h1>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-form">
          <h2>发送消息</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="subject">主题</label>
              <input type="text" id="subject" v-model="form.subject" required>
            </div>
            <div class="form-group">
              <label for="message">消息</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">发送消息</button>
          </form>
        </div>

        <div class="contact-info">
          <h2>联系方式</h2>
          <div class="info-item">
            <div class="info-icon location-icon"></div>
            <div>
              <h3>地址</h3>
              <p>广州市天河区长湴白沙水路85号27房号</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon phone-icon"></div>
            <div>
              <h3>电话</h3>
              <p>+86 010-12345678</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon email-icon"></div>
            <div>
              <h3>邮箱</h3>
              <p>public@isemes.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon time-icon"></div>
            <div>
              <h3>工作时间</h3>
              <p>周一至周五: 9:00 - 18:00</p>
            </div>
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
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里可以添加表单提交逻辑
      alert('消息发送成功！我们会尽快回复您。');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-hero {
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.contact-hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0;
}

.contact-content {
  padding: 80px 0;
}

.contact-content .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-form h2, .contact-info h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: var(--primary-color);
  position: relative;
  padding-bottom: 15px;
}

.contact-form h2::after, .contact-info h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.form-group {
  margin-bottom: 28px;
}

.form-group label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: var(--primary-color);
  font-size: 1rem;
  letter-spacing: 0.3px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--bg-primary);
  color: var(--text-color);
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(237, 137, 54, 0.1);
  transform: translateY(-1px);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
  line-height: 1.6;
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(237, 137, 54, 0.2);
}

.btn-primary:hover {
  background-color: #dd6b20;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(237, 137, 54, 0.3);
}

.info-item {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  align-items: flex-start;
  padding: 24px;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.info-icon {
  width: 60px;
  height: 60px;
  position: relative;
  background-color: var(--accent-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 4px;
}

/* Location Icon */
.location-icon::before, .location-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.location-icon::before {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 20px;
  left: 20px;
}

.location-icon::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 16px 10px;
  border-color: transparent transparent white transparent;
  bottom: 12px;
  left: 20px;
}

/* Phone Icon */
.phone-icon::before, .phone-icon::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 6px;
}

.phone-icon::before {
  width: 30px;
  height: 25px;
  top: 12px;
  left: 15px;
  border-radius: 6px 6px 12px 12px;
}

.phone-icon::after {
  width: 10px;
  height: 8px;
  top: 14px;
  left: 25px;
  border-radius: 50%;
}

/* Email Icon */
.email-icon::before, .email-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.email-icon::before {
  width: 32px;
  height: 20px;
  top: 18px;
  left: 14px;
  border-radius: 4px;
}

.email-icon::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 12px 8px 12px;
  border-color: transparent white transparent white;
  top: 28px;
  left: 18px;
}

/* Time Icon */
.time-icon::before, .time-icon::after {
  content: '';
  position: absolute;
  background-color: white;
}

.time-icon::before {
  width: 24px;
  height: 24px;
  border: 4px solid white;
  border-radius: 50%;
  top: 12px;
  left: 12px;
}

.time-icon::after {
  width: 8px;
  height: 12px;
  background-color: transparent;
  border-right: 4px solid white;
  border-bottom: 4px solid white;
  top: 18px;
  left: 24px;
  transform: rotate(45deg);
}

.info-item h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: var(--primary-color);
  font-weight: 700;
}

.info-item p {
  color: var(--text-light);
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
