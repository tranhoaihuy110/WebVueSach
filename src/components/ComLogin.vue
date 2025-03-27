<template>
  <div class="login-container">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login" class="login-form">
      <input 
        v-model="username" 
        placeholder="Tên đăng nhập" 
        required 
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="Mật khẩu" 
        required 
      />
      <button type="submit" class="login-button">Đăng nhập</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>
<script>
import eventBus from "@/eventBus";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      user: JSON.parse(localStorage.getItem("currentUser")) || null,
    };
  },
  created() {
    eventBus.on("loginSuccess", (user) => {
      this.user = user;
    });
  },
  beforeMount() {
    eventBus.off("loginSuccess");
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );
      if (!user) {
        this.error = "Tên đăng nhập hoặc mật khẩu không chính xác.";
        return;
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      this.error = "";
      eventBus.emit("loginSuccess", user);
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-form input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  padding: 12px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #2980b9;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
