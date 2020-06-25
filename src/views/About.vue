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
      <div class="grid lg:grid-cols-2 lg:gap-20 gap-5 justify-between">
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b border-blue-200 pb-2 border-gray-300">
            <h2
              class="text-lg font-black uppercase text-blue-500 tracking-wide text-center"
            >OUR GENESIS</h2>
          </div>
          <p
            class="mt-4 leading-6 text-center tracking-tight text-gray-600 font-light text-xs"
          >At God’s instance and clear direction, 25 years ago I came into Okpo with my late wife: Evang. Esther omojo Oguche and son, Joshua! To the glory of God , today I have five biological children and other adopted children living with me, and a great number of spiritual children world-over unto God’s glory, and also a lovely wife, co- partner, helper, encourager, adviser and supporter. Pastor (Mrs) Rose Ojone Oguche.</p>
        </div>
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b pb-2 border-gray-300">
            <h2
              class="text-lg font-black uppercase text-blue-500 tracking-wide text-center"
            >OUR COMMISSION</h2>
          </div>
          <p class="mt-4 leading-8 tracking-tight text-center text-gray-600 font-light text-xs">
            Our commission is to bring God’s loving care and intervention to the human race at no charge through various
            outlets, saving the lost at all cost as grace enables us. He has helped us over these years to bring His love and care to the needy world. We care because God cares
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-4xl flex items-center lg:mx-auto mx-3 lg:mt-10 mt-2">
      <div class="bg-white shadow-2xl w-full flex items-center rounded-lg justify-center">
        <p class="text-xl font-medium tracking-wider py-8 text-blue-500">MEET THE FOUNDER</p>
      </div>
    </div>
    <div class="max-w-4xl flex lg:flex-row flex-col mx-auto lg:mt-12 mt-20">
      <div class="flex flex-col items-center justify-center mt-8">
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
      <div class="lg:ml-16 mx-5 mt-4">
        <p class="text-gray-800 font-light text-xs max-w-xl tracking-wide leading-6">
          Evangelist Sunday Oguche was born on 3rd September 1961 to Christian parents. Just before his 14th birthday on 5th of June, 1975, he attended a crusade in the city of Kano where Evangelist J. K. Solomon preached the gospel and demonstrated the supernatural; the cripple walked, the blind saw, the deaf heard and many more. When the evangelist gave an altar call, Sunday gave his heart to the Lord at this teenage age. After this encounter with The Lord, He never looked back. He began to fast and seek the Lord five days in a week. He also joined the new church that was planted after the crusade. He received sound teachings from this new church and his passion to see souls saved through the preaching of the gospel and sick healed increased daily.
          After his secondary school education, he left the far north of Nigeria for the Middle belt region for his higher learning where he practically lunched into full soul winning ventures. As a student, he held crusades from one village to another, miracle services and prayer conferences and traveled to different places to preach. This drew hundreds initially, but now several thousands have been impacted around the world.
          Today, He has taken the gospel of Jesus Christ to five continents of the world except Australia. Tens of thousands of sinners have been saved, the sick healed and several testimonies of the dead being raised back to life. By the mercies for God, his ministry has witnessed all kinds of miracles you can imagine
        </p>
      </div>
    </div>
    <div class="max-w-4xl mx-auto mt-1 lg:px-0 px-5">
      <p class="text-gray-800 text-xs font-light tracking-wider leading-6">
        He has a ceaseless passion for lost souls. His joyous moments is when he sees souls saved, the sick healed and the oppressed delivered. His motto is “Reach the lost souls, wherever they may be found”. He runs conferences for Youths and evangelistic campus crusade. These crusades have brought massive harvest of souls from the campuses around Africa to the glory of God.
        The evangelist has also written more than 25 books that are blessing lives all around the world.
        He has strong passion to demonstrate God’s love to the widows, orphans and the Fatherless. His ministry has brought tremendous hope to the hopeless. He feeds and cloths them in their thousands in different parts of Africa and offers educational scholarship to them.
        He is married to Rose Oguche and blessed with five children. And they are currently living in Okpo Kogi State, Nigeria where the headquarters of their ministry; God’s Care Missions Incorporated is situated.
      </p>
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