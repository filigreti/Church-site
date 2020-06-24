<template>
  <main
    :style="toggle ? 'filter:blur(1.3px); z-index:5' :''"
    class="flex items-center pt-40 h-full flex-col lg:mx-0 mx-3 overflow-y-auto"
  >
    <h2
      class="lg:uppercase lg:tracking-wider font-normal text-gray-900 lg:leading-3 play lg:text-2xl text-xl leading-3"
    >Welcome back !</h2>
    <p
      class="text-xs capitalize text-blue-500 lg:mt-3 lg:pt-1 pt-2 font-light"
    >We care so much about you</p>
    <p
      class="text-xs capitalize text-blue-500 leading-none font-light"
    >Because God cares even more about you</p>
    <div class="lg:w-9/12 lg:mt-6 lg:px-12 w-full lg:mx-auto bg-white mt-6 rounded-lg shadow-xl">
      <form @submit.prevent="login" class="py-6 lg:w-full">
        <h1
          class="lg:text-2xl text-sm font-light leading-6 tracking-wider text-blue-500 text-center"
        >Sign In</h1>

        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            class="bg-gray-200 mt-6 font-light text-xs text-center rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="email"
            placeholder="Email Address"
            required
            v-model="loginDetails.email"
          />
        </div>
        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            class="bg-gray-200 font-light mt-3 text-center text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="password"
            placeholder="Password"
            required
            v-model="loginDetails.password"
          />
        </div>
        <p
          v-if="this.error !== ''"
          class="py-3 text-red-500 text-xs font-light text-center"
        >{{this.error}}</p>
        <router-link to="/forgot-password">
          <p class="text-xs text-gray-500 font-light text-center my-4">Forgot Password ?</p>
        </router-link>

        <div class="w-full flex items-center">
          <button
            class="font-light mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 border border-blue-500 hover:border-transparent rounded"
          >Login</button>
        </div>
        <span class="mt-4 mb-2 text-gray-500 font-light text-xs text-center block">
          Do not have an account ?
          <router-link to="register">
            <span class="text-blue-500 font-light">Register</span>
          </router-link>
        </span>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  props: ["toggle"],
  data() {
    return {
      loginDetails: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  watch: {
    error(x) {
      setTimeout(() => {
        this.error = "";
      }, 5000);
    }
  },
  methods: {
    async login() {
      let res = await this.$store.dispatch("loginUser", this.loginDetails);
      if (res.status == 422) {
        this.error = res.data.message;
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
</style>