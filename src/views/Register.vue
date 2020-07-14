<template>
  <main
    :style="toggle ? 'filter:blur(1.3px); z-index:5' :''"
    class="flex items-center pt-32 h-full flex-col lg:mx-0 mx-3 overflow-y-auto"
  >
    <h2
      class="lg:uppercase font-normal lg:tracking-wider text-gray-900 lg:leading-3 play lg:text-2xl text-xl leading-3"
    >Register</h2>
    <p
      class="text-xs capitalize text-blue-500 lg:mt-3 lg:pt-1 pt-2 font-light"
    >We care so much about you</p>
    <p
      class="text-xs capitalize text-blue-500 leading-none font-light"
    >Because God cares even more about you</p>
    <div
      class="lg:w-9/12 lg:mt-6 lg:px-12 lg:mx-auto bg-white rounded-lg shadow-xl lg:mx-0 mx-4 w-full mt-6"
    >
      <form @submit.prevent="register" autocomplete="off" class="py-6 lg:w-full">
        <h1
          class="lg:text-2xl text-sm font-light leading-6 tracking-wider text-blue-500 text-center"
        >Sign Up</h1>

        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            required
            class="bg-gray-200 font-light mt-6 text-xs text-center rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="string"
            v-model="details.full_name"
            placeholder="Full Name"
          />
        </div>
        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            :class="emailError"
            required
            class="bg-gray-200 font-light mt-3 text-center text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="email"
            v-model="details.email"
            placeholder="Email Address"
          />
          <p
            v-for="(error, index) in errors.email"
            :key="index"
            class="text-xs text-center mt-2 text-red-500"
          >{{error}}</p>
        </div>
        <div class="max-w-xl mx-auto lg:px-0 px-6 relative">
          <vue-tel-input
            :class="phoneError"
            required
            autocomplete="off"
            v-on:country-changed="countryChanged"
            class="mt-3"
            v-model.trim="details.phone_number"
          ></vue-tel-input>
          <p
            v-for="(error, index) in errors.phone_number"
            :key="index"
            class="text-xs text-center mt-2 text-red-500"
          >{{error}}</p>
        </div>

        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            required
            class="bg-gray-200 font-light mt-3 text-center text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="password"
            v-model="details.password"
            placeholder="Password"
            minlength="5"
          />
        </div>

        <div class="w-full flex items-center mt-4">
          <button
            type="submit"
            class="font-light mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 border border-blue-500 hover:border-transparent rounded"
          >Sign up</button>
        </div>
        <span class="mt-4 mb-2 text-gray-500 text-xs text-center block font-light">
          Already have an account ?
          <router-link to="login">
            <span class="text-blue-500 font-light">Login</span>
          </router-link>
        </span>
      </form>
    </div>
  </main>
</template>

<script>
import { VueTelInput } from "vue-tel-input";
export default {
  props: ["toggle"],
  components: {
    VueTelInput
  },
  data() {
    return {
      details: {
        full_name: null,
        email: null,
        password: null,
        phone_number: ""
      },
      country: "",
      errors: {}
    };
  },
  watch: {
    errors: {
      deep: true,
      handler(x) {
        if (x) {
          setTimeout(() => {
            this.errors = {};
          }, 5000);
        }
      }
    }
  },
  computed: {
    emailError() {
      if (this.errors && this.errors.hasOwnProperty("email")) {
        return "border-red-500 border text-red-500";
      }
    },
    phoneError() {
      if (this.errors && this.errors.hasOwnProperty("phone_number")) {
        return "danger";
      }
    }
  },
  methods: {
    countryChanged(country) {
      this.country = `+${country.dialCode}`;
    },
    async register() {
      let formattedNumber = this.details.phone_number;
      formattedNumber = `${this.country}${this.details.phone_number.replace(
        /^0+/,
        ""
      )}`;
      let allDetails = {};
      allDetails.full_name = this.details.full_name;
      allDetails.email = this.details.email;
      allDetails.phone_number = formattedNumber;
      allDetails.password = this.details.password;

      let res = await this.$store.dispatch("registerUser", allDetails);
      if (res.status === 400) {
        this.errors = res.data;
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
.vue-tel-input {
  border-radius: 99999px !important;
  padding: 0.3rem 0;
  position: relative !important;
  border: none !important;
  box-shadow: none !important;
  background-color: #edf2f7 !important;
}
.danger {
  border: 1px solid red !important;
}
.vti__input {
  border-radius: 99999px !important;
  position: absolute !important;
  text-align: center !important;
  width: 100%;
  height: 100%;
  top: 0 !important;
  font-family: "Poppins" !important;
  font-size: 0.75rem !important;
  font-weight: 300 !important;
  background-color: #edf2f7 !important;
}
.vti__dropdown:focus {
  outline: 0;
  outline-color: transparent;
  outline-style: none;
}
.focus\:shadow-outline:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
.vti__selection {
  z-index: 10;
}
.vti__dropdown-list {
  width: 350px !important;
  position: absolute !important;
  font-size: 0.75rem !important;
  font-weight: 300 !important;
  font-family: "Poppins" !important;
}
.vti__dropdown.open {
  background-color: none !important;
}
.vti__dropdown-list.below {
  top: 42px !important;
}
.vti__dropdown {
  left: 7px !important;
}
</style>