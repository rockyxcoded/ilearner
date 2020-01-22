<template>
  <div class="pt-5 container w-1/2 mx-auto">
    <h1 class="text-gray-700 text-4xl text-left font-thin">Login</h1>
    <div class="w-full max-w-lg">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="login"
      >
        <div class="mb-4">
          <label
            class="block text-left text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            v-model="user.email"
          >
        </div>
        <div class="mb-6">
          <label
            class="block text-left text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
            v-model="user.password"
          >
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="loading"
          >
            Login
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      loading: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.loading = true;

      axios({
        method: "POST",
        url: "/session",
        data: this.user
      })
        .then(response => {
          const token = response.data.data
          this.$store.dispatch("login", response.data.data);
          this.$router.push({name: 'home'})
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false;
        })
    }
  }
};
</script>