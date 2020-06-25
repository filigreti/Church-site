<template>
  <div id="app" class="absolute w-full">
    <HeaderTop />
    <router-view />
    <FooterBottom />
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import FooterBottom from "@/components/FooterBottom";
export default {
  components: {
    HeaderTop,
    FooterBottom
  },
  watch: {
    $route(x) {
      this.$store.commit("restorePage");
    }
  },
  async created() {
    await this.$store.dispatch("getTestimonies");
    await this.$store.dispatch("getWorkshop");
  }
};
</script>

<style>
.h-60 {
  height: 29rem;
}
.h-38 {
  height: 9.5rem;
}
.play {
  font-family: "Playfair Display", serif;
}
.poppins {
  font-family: "Poppins", sans-serif;
}
.VueCarousel-navigation-prev {
  margin-left: -20px;
}
.VueCarousel-navigation-next {
  margin-right: -20px;
}
.VueCarousel-navigation-prev,
.VueCarousel-navigation-next {
  background: white !important;
  width: 40px !important;
  height: 40px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.897) !important;
}
.VueCarousel-navigation--disabled[data-v-453ad8cd] {
  opacity: 1;
  cursor: default;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: black !important;
  outline: none !important;
}
</style>
