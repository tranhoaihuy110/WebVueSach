<template>
  <div class="product">
    <!-- Đường dẫn đến chi tiết sản phẩm -->
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
      <div class="product-image">
        <img :src="product.image" alt="product image" />
      </div>
       <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-quantity">Số lượng tồn: {{ product. quality }}</p>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    },
  },
}
</script>

<style scoped>
.product {
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  text-align: center;
  flex-direction: column;
}

.product-image img {
  width: 100%;
  transition: transform 0.3s ease;
}

.product-info {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}


.product:hover .product-image img {
  transform: scale(1.05);
}

.product-info h3 {
  font-size: 18px;
  margin: 0 0 5px;
}

.product-name, .product-quantity {
  font-size: 16px;
  color: #000; /* Màu đen mặc định */
  margin: 5px 0;
  transition: color 0.3s ease;
}

.product:hover .product-name, 
.product:hover .product-quantity {
  color: #0080ff; /* Màu xanh khi rê chuột */
}

.product-price {
  font-size: 16px;
  color: #ff0000; /* Màu đỏ mặc định cho giá */
  font-weight: bold;
  margin-top: 5px;
}

.product-info p {
  margin: 0;
  color: #ccc;
}

.price {
  font-size: 16px;
  color: #ffdd57;
  margin-top: 5px;
}
</style>
