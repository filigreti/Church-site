<template>
  <main>
    <Hero
      :position="'object-center'"
      :color="'bg-indigo-800'"
      :buttonText="false"
      :screen="'Views'"
      :mainText="'Events'"
      :subText="`God's care mission (GCM) is a rural mission based work, commited to reaching the lost,depopulating hell to populate heaven. It is also commited to encouraging the saints,labouring for restoration in the body of christ and bringing help to the less privileged. It is purely an evangelistic outfit`"
      :bgImage="'https://images.unsplash.com/photo-1571751888410-0c83afb6f3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'"
    />
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