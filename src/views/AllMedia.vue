<template>
  <main>
    <Hero
      :position="'object-top'"
      :color="'bg-indigo-800'"
      :buttonText="false"
      :screen="'media'"
      :mainText="'Media'"
      :subText="`Browse our media stores and get the best media contents. You can download audio, video contents and pdf file for free or aso  buy some of our best seller books.`"
      :bgImage="'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
    />
    <div class="mt-10 max-w-4xl mx-auto">
      <router-view />
    </div>
  </main>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  components: {
    Hero
  }
};
</script>

<style>
</style>