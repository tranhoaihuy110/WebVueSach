<template>
  <div class="register-container">
    <h2>Đăng ký tài khoản</h2>
    <form @submit.prevent="register" class="register-form">
      <input v-model="fullName" placeholder="Họ và Tên" required />
      <input v-model="phone" placeholder="Số điện thoại" required />
      <input v-model="address" placeholder="Địa chỉ" required />
      <input v-model="username" placeholder="Tên đăng nhập" required />
      <input v-model="password" type="password" placeholder="Mật khẩu" required />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
        required
      />
      <button type="submit" class="register-button">Đăng ký</button>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
    </form>
  </div>
</template>

<script>
import users from "@/data/user";
export default {
  data() {
    return {
      fullName: "",
      phone: "",
      address: "",
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      success: "",
      users: users,
    };
  },
  methods: {
  register() {
    
    this.error = "";
    this.success = "";

    
    if (
      !this.fullName ||
      !this.phone.trim() ||
      !this.address.trim() ||
      !this.username.trim() ||
      !this.password.trim() ||
      !this.confirmPassword.trim()
    ) {
      this.error = "Vui lòng điền đầy đủ tất cả các thông tin.";
      return;
    }

    
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(this.fullName)) {
      this.error = "Họ và Tên không được chứa số hoặc ký tự đặc biệt.";
      return;
    }

    
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(this.phone)) {
      this.error = "Số điện thoại chỉ được chứa số.";
      return;
    }

    
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(this.username)) {
      this.error =
        "Tên đăng nhập phải không chứa ký tự đặc biệt.";
      return;
    }

    
    if (this.password.length < 8) {
      this.error = "Mật khẩu phải có ít nhất 8 ký tự.";
      return;
    }

    
    if (this.password !== this.confirmPassword) {
      this.error = "Mật khẩu và Xác nhận mật khẩu không khớp.";
      return;
    }

    
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(
      (x) => x.username === this.username
    );
    if (userExists) {
      this.error = "Tên đăng nhập đã tồn tại.";
      return;
    }

    
    const newUser = {
      id: existingUsers.length + 1,
      fullName: this.fullName,
      phone: this.phone,
      address: this.address,
      username: this.username,
      password: this.password,
    };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    
    this.success = "Đăng ký thành công!";
    this.error = "";
    this.fullName = "";
    this.phone = "";
    this.address = "";
    this.username = "";
    this.password = "";
    this.confirmPassword = "";
  },


  },
};
</script>
<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.register-form input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-button {
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 14px;
  text-align: center;
}

.success {
  color: green;
  font-size: 14px;
  text-align: center;
}
</style>
