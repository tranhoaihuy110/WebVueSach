<template>
    <header>
        <div class="container">
            <div class="logo">
              <router-link to="/">
                <img src="/Images/book-fair.png" alt="Shop Logo">
              </router-link>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/"><i class="fas fa-home"></i> Trang Chủ</router-link></li>
                    <li><router-link to="/gioithieu"><i class="fas fa-info-circle"></i> Giới Thiệu</router-link></li>
                    <li v-if="!user"><router-link to="/login"><i class="fa fa-sign-in"></i> Đăng Nhập</router-link></li>
                    <li v-if="!user"><router-link to="/dangky"><i class="fa fa-user-o"></i> Đăng Ký</router-link></li>
                </ul>
            </nav>
            <div v-if="user">
                <!-- Hiển thị thông tin người dùng và nút đăng xuất khi đã đăng nhập -->
                <p>Xin chào, {{ user.username }}</p>
                <button @click="logout" >Đăng Xuất</button>
            </div>
            <div class="cta">
              <router-link to="/cart" class="cta-button" >Giỏ Hàng</router-link >
            </div>
        </div>
    </header>
    <router-view />
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("currentUser")) || null, // Lấy user từ localStorage
    };
  },
  
  methods: {
    // Đăng xuất
    logout() {
      localStorage.removeItem("currentUser");  // Xóa thông tin người dùng khỏi localStorage
      this.user = null;
      this.$router.push("/");   // Đặt lại user về null
    },
  },
  mounted() {
    // Kiểm tra lại thông tin người dùng khi trang được tải lại
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      this.user = storedUser; // Cập nhật lại thông tin người dùng
    } else {
      this.user = null;  // Nếu không có người dùng, đặt user về null
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 15%;
  background-color: rgba(239, 21, 21, 0.95);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 45px;
  height: 45px;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.1);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

nav ul li a:hover {
  color: #ffd700;
}

.cta-button {
  padding: 12px 25px;
  background-color: #d35400;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #e67e22;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  nav ul {
    display: none;
  }
  .cta-button {
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>
