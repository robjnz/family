<template>
  <section
    id="container-centre"
    class="column centre flex-1 px-6 py-14 overflow-auto"
  >
    <div class="work-card mb-6" v-for="post in posts" :key="post.node.id">
      <h1 class="text-red-900 text-2xl">
        <g-image
          class="h-24 w-24 inline-block"
          alt="cover image"
          :src="post.node.cover_image"
        />

        {{ post.node.title }}
      </h1>
      <p class="text-gray-900 text-xl">{{ post.node.excerpt }}</p>
      <br />
      <p class="text-gray-900 text-lg">Published on {{ post.node.date }}</p>
      <p class="text-red-900 text-xl">Author: {{ post.node.author }}</p>

      <p class="text-red-900 text-2xl">
        <g-link to="/europe/britishgeneral">
          <g-image
            class="h-10 w-12 inline-block"
            alt="flag"
            :src="post.node.flag"
        /></g-link>

         <g-image
            class="h-10 w-12 inline-block ml-6"
            alt="religion"
            :src="post.node.religion"
        />

        {{ post.node.tags }}
      </p>

      <g-link class="text-blue-700 text-2xl" :to="post.node.path"
        >Read article</g-link
      >
    </div>

    
  </section>
</template>

<script>



export default {
  metaInfo: {
    title: "blog posts",
    meta: [
      {
        name: "description",
        content: "Blog posts",
      },
    ],
  },
 
  props: ["posts"],
};
 
</script>

<style>
.post-list {
  margin-top: 12px;
}

.post {
  padding: 12px 0;
}
</style>
