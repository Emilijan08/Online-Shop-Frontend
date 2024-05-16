import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    error: false,
    message: ref(""),
    token: "",
    user: {
      username: "",
      role: "",
    },
  }),
  persist: {
    paths: ["token", "user.username", "user.role"],
  },
  actions: {
    async login(temp_username, password) {
      const URL = "http://localhost:3000/login";
      try {
        const res = await axios.post(URL, {
          username: temp_username,
          password: password,
        });

        console.log(res);
        const { message, username, role } = res.data;
        this.token = message;
        this.user.username = username;
        this.user.role = role;

        localStorage.setItem("token", this.token);

        router.push("/");
      } catch (err) {
        this.error = true;
      }
    },
    async register(temp_username, password, confirmPassword) {
      const URL = "http://localhost:3000/register";
      try {
        const res = await axios.post(URL, {
          username: temp_username,
          password: password,
          confirmPassword: confirmPassword,
        });
        const { token, username, role } = res.data;
        this.token = token;
        this.user.username = username;
        this.user.role = role;
        localStorage.setItem("token", this.token);
        router.push("/");
      } catch (err) {
        if (err.response && err.response.status === 409) {
          throw new Error("Username already exists");
        } else {
          this.error = true;
          this.message = err.response.data.message;
        }
      }
    },
    async logout() {
      await router.push("/login");
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    },
  },
});
