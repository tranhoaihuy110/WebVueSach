<template>
    <div class="about-container">
      <h1 class="about-title">Về HYH2 Shop</h1>
      <p class="about-description">
        Chào mừng bạn đến với <strong>Cửa hàng bán sách của tôi</strong>, nơi mang đến cho bạn những sản phẩm chất lượng, dịch vụ chuyên nghiệp và trải nghiệm mua sắm tuyệt vời.
      </p>
  
      <div class="about-section">
        <h2>Sứ Mệnh Của Chúng Tôi</h2>
        <div class="about-content">
          <p>
            Sứ mệnh của chúng tôi là cung cấp các sản phẩm tốt nhất đến tay khách hàng, luôn lắng nghe và không ngừng cải tiến để mang lại sự hài lòng tuyệt đối.
          </p>
          <img src="@/assets/banner3.png" alt="Sứ Mệnh Của Chúng Tôi" class="about-image" />
        </div>
      </div>
  
      <div class="about-section">
        <h2>Tại Sao Chọn Chúng Tôi?</h2>
        <div class="about-content">
          <ul>
            <li>Sản phẩm đa dạng, giá cả cạnh tranh.</li>
            <li>Cam kết chất lượng, đảm bảo nguồn gốc rõ ràng.</li>
            <li>Dịch vụ chăm sóc khách hàng chu đáo.</li>
            <li>Hỗ trợ giao hàng nhanh chóng và an toàn.</li>
          </ul>
          <img src="@/assets/banner2.png" alt="Tại Sao Chọn Chúng Tôi" class="about-image" />
        </div>
      </div>
    </div>
  </template>
<style>
.about-container {
  padding: 20px;
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.8;
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 30px auto;
}

.about-title {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
}

.about-description {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
  padding: 0 20px;
}

.about-section {
  margin-bottom: 40px;
}

.about-section h2 {
  font-size: 28px;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}

.about-section p, .about-section ul {
  font-size: 16px;
  color: #666;
}

.about-section ul {
  list-style: disc;
  padding-left: 20px;
}

.about-section li {
  margin-bottom: 8px;
}

.about-image {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.about-image:hover {
  transform: scale(1.05);
}

</style>  