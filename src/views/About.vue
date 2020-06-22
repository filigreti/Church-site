


<template>
  <main>
    <Hero
      class
      :position="'object-center'"
      :color="'bg-black opacity-90'"
      :buttonText="false"
      :screen="'About'"
      :mainText="'About Us'"
      :subText="`God's care mission (GCM) is a rural mission based work, commited to reaching the lost,depopulating hell to populate heaven. It is also commited to encouraging the saints,labouring for restoration in the body of christ and bringing help to the less privileged. It is purely an evangelistic outfit`"
      :bgImage="'https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'"
    />
    <div class="lg:mt-2 bg-d flex justify-center max-w-4xl mx-auto py-4">
      <div class="grid grid-cols-2 gap-20 justify-between">
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b border-blue-200 pb-2 border-gray-300">
            <h2
              class="text-lg font-black uppercase text-blue-500 tracking-wide text-center"
            >OUR GENESIS</h2>
          </div>
          <p
            class="mt-4 leading-6 text-center tracking-tight text-gray-600 font-light text-xs"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quo repellendus delectus voluptas, perferendis ex suscipit velit tempore excepturi, quasi non quam quas ullam totam repudiandae doloremque mollitia? Maiores culpa illo quia velit recusandae blanditiis magnam nisi odit quibusdam. Consectetur aliquid magni deserunt perferendis autem doloremque architecto aut recusandae non?</p>
        </div>
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b pb-2 border-gray-300">
            <h2
              class="text-lg font-black uppercase text-blue-500 tracking-wide text-center"
            >OUR COMMISSION</h2>
          </div>
          <p
            class="mt-4 leading-6 tracking-tight text-center text-gray-600 font-light text-xs"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quo repellendus delectus voluptas, perferendis ex suscipit velit tempore excepturi, quasi non quam quas ullam totam repudiandae doloremque mollitia? Maiores culpa illo quia velit recusandae blanditiis magnam nisi odit quibusdam. Consectetur aliquid magni deserunt perferendis autem doloremque architecto aut recusandae non?</p>
        </div>
      </div>
    </div>
    <div class="max-w-4xl flex items-center mx-auto mt-10">
      <div class="bg-white shadow-2xl w-full flex items-center rounded-lg justify-center">
        <p class="text-xl font-medium tracking-wider py-8 text-blue-500">MEET THE FOUNDER</p>
      </div>
    </div>
    <div class="max-w-4xl flex mx-auto mt-12">
      <div class="flex flex-col items-center justify-center">
        <div class="p-3 bg-white shadow-xl rounded-lg">
          <img
            class="w-56 h-48 object-cover shadow-md"
            src="https://godscaremissionsinc.org/wp-content/uploads/2019/07/477_O_JuiceDrop.jpg"
            alt
          />
          <p class="text-center text-xs py-4 font-medium">EVANGELIST. SUNDAY OGUCHE</p>
        </div>
        <p class="text-xs py-3 text-center text-red-500 w-full">Founder God's Care Mission</p>
      </div>
      <div class="ml-16 mt-4">
        <p
          class="text-gray-800 font-light text-xs max-w-xl tracking-wide leading-6"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quam non, consequatur in unde maiores aliquam quos, consequuntur ipsum architecto doloremque. Ullam quos quam nisi doloremque exercitationem sapiente quae repellat quisquam, magnam consequuntur expedita. Molestias, necessitatibus numquam! Nostrum amet, tempora tempore quos blanditiis corrupti commodi adipisci, quod facilis animi, perspiciatis labore. Officiis, iste maxime corporis eos facilis consequuntur hic quidem quae, eveniet accusantium earum ad quam aliquam? Eos est adipisci maxime distinctio perferendis facilis cumque rerum placeat, quod veniam molestias consequuntur libero temporibus maiores nam, voluptas quia illo quae, vero nesciunt recusandae expedita! Aliquid deleniti officiis obcaecati neque culpa aspernatur!</p>
      </div>
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