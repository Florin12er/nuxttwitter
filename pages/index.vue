<template>
    <div>
        <MainSection title="home" :loading="isLoading">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nulla autem facilis excepturi architecto aspernatur libero quidem ducimus quaerat minima cumque inventore obcaecati doloribus totam, perspiciatis natus culpa error numquam?
            Unde soluta necessitatibus eum aspernatur. Odio pariatur, dolor totam facere, quod et tempore fugit temporibus voluptas iusto accusamus consequuntur impedit magni mollitia ipsa! Soluta dolores ab ducimus repellat facere est!
            Nemo blanditiis dicta tempora rerum voluptas quo aperiam expedita ad, aspernatur sint quasi minus similique explicabo deleniti deserunt sequi ab nulla et saepe aut natus, sed tempore? Officiis, saepe beatae.
            Ducimus porro architecto at, numquam explicabo, eos saepe culpa vel debitis odit nam quae aspernatur laboriosam! Dignissimos quidem libero optio inventore nesciunt, sint eius eveniet recusandae eos maiores, aut ab.
            At enim facere nostrum laboriosam atque nemo sapiente possimus vel voluptas alias in tempora a, corporis amet, assumenda reiciendis temporibus cum dolorum vero. Earum, voluptates quibusdam architecto exercitationem fugiat at!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolore consequuntur esse quae voluptate ullam aspernatur ipsa ab. Harum consequuntur alias commodi assumenda asperiores inventore! Praesentium vero sunt magnam nesciunt.
            Laudantium autem odio rerum, accusantium alias laboriosam, in vero provident odit perspiciatis eum molestiae deserunt aliquam necessitatibus fugit iusto. Quas, reiciendis quis cumque eligendi soluta nobis iste! Placeat, quae blanditiis.
            Eos ullam asperiores illum cum voluptates dicta, alias odit iste delectus est officia pariatur placeat quod assumenda, consequuntur reprehenderit qui culpa, autem eligendi possimus dolore earum id dolorem numquam? Fuga.
            Inventore ipsum nam cum suscipit, esse, eveniet, beatae ducimus quaerat tempora perspiciatis asperiores? Ipsum delectus necessitatibus quia sunt veritatis impedit inventore earum esse. Velit ipsam consequatur aperiam error numquam maiores.
            Maxime iste amet, eligendi sapiente impedit nisi, tempore cupiditate iusto natus odit dolore. Consequatur debitis repellat possimus tempore sapiente necessitatibus, velit reprehenderit, facere impedit exercitationem molestias quas nemo neque totam!
            Officiis fuga praesentium, distinctio corrupti blanditiis rerum provident exercitationem ex! Quasi recusandae dolorum voluptate unde temporibus deleniti consectetur! Nobis, exercitationem vitae saepe nemo voluptatibus deserunt sunt praesentium maxime recusandae facilis?
            Maiores, rem? Aspernatur ab, earum tenetur accusantium doloribus saepe ea aliquid exercitationem sint quos, ut ipsam corrupti, cumque quo voluptatibus vero sed perferendis amet. Ea adipisci molestias quos officiis dicta?
            Esse nisi voluptas voluptatem molestias nobis quisquam atque veniam at reprehenderit incidunt, doloribus est. Tenetur autem alias quasi eveniet id maiores totam, ducimus inventore reprehenderit, repudiandae ut voluptates a sit.
            Dignissimos dolorem ullam id repudiandae suscipit delectus voluptatibus commodi quasi laboriosam consectetur. Temporibus consectetur, soluta tenetur dolorem, quibusdam blanditiis eligendi magni libero sapiente nam assumenda veritatis ratione veniam ducimus praesentium.
            Molestiae dolores exercitationem vero deleniti autem culpa eligendi? Consequatur temporibus quis totam. Aliquam ipsa corporis vel nemo, eaque molestiae maiores placeat, qui modi, quos nam? Eum nihil cupiditate provident unde.
            Quas ut numquam nesciunt aliquam a, nam facere, debitis nemo nobis esse earum enim tempora harum qui sunt quos quidem, totam cum sit perspiciatis illum! Sequi sint laboriosam soluta corrupti.
            Deserunt accusamus recusandae harum ducimus pariatur, veniam laboriosam corporis sed corrupti consectetur illo neque tempora ipsum culpa facilis obcaecati earum ab? Quod repellat mollitia consequatur officiis itaque odio, saepe nobis.
            Reprehenderit veniam nisi nostrum atque! Facere est rerum tenetur minima incidunt, qui quam modi omnis aliquam voluptates dolore quis? Quas eum, saepe eius expedita assumenda aliquam aut praesentium alias odio.
            Earum aspernatur rerum odio aliquid nam doloremque commodi obcaecati ea eveniet eius adipisci iusto quia, sint rem quae molestiae nisi, quo eum a quidem! Obcaecati ipsa numquam inventore nisi voluptate.
            Assumenda doloribus ab rem totam. Distinctio dolores a nemo dolor tempora, maxime, magni asperiores consequatur sed impedit nesciunt, voluptate nihil numquam totam! Vel, pariatur tempore facere quae libero illo debitis.
            Quas earum voluptatibus labore sequi, in laudantium exercitationem odit, illum corrupti eius consequuntur ducimus porro explicabo repellat dicta atque dolorem nisi sed! Tempore iste veniam nulla sapiente vero maxime temporibus?
            Perspiciatis eligendi, sequi et consequuntur minus aut corrupti esse in architecto blanditiis iure laudantium vitae, exercitationem doloribus incidunt odio sit repellendus. Ipsam placeat necessitatibus debitis culpa voluptate, beatae aut incidunt?
            Veritatis ducimus libero quidem iste! Mollitia eligendi accusamus et officia velit non est ad adipisci molestiae possimus rerum incidunt, minus at cumque laborum maxime error alias dolorum molestias rem. Reprehenderit!
            Velit iusto nemo voluptatem non molestiae omnis, libero repudiandae corporis vel enim impedit earum sit necessitatibus in! Similique, esse aut assumenda tenetur corporis cum ab reiciendis aperiam ducimus impedit quo.
            Voluptate vel saepe magni dolor, ipsam est dignissimos dolorum sunt, maxime ratione quam corporis illo quis illum ipsum earum hic, sapiente corrupti minima sit veritatis aliquam voluptas consectetur quisquam. Dicta.
        </MainSection>
    </div>
</template>

<script setup>

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

</script>
